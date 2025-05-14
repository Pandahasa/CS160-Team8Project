import sqlite3
import json

DB_NAME = "sqlite.db" # This will create the file in the same directory as the script

sample_data = {
    "barcode:123456789012": [
        {
            "order": ["product_name", "material", "recyclable", "instructions", "notes"],
            "product_name": "Generic Soda Bottle",
            "material": "PET Plastic (Type 1)",
            "recyclable": "Yes, in most areas",
            "instructions": "Empty and rinse. Replace cap if accepted locally.",
            "notes": "Check local municipal guidelines for specifics on caps.",
            "score": 0
        }
    ],
    "barcode:987654321098": [
        {
            "order": ["item_type", "material_composition", "disposal_method", "notes"],
            "item_type": "Standard Cereal Box",
            "material_composition": "Cardboard (Paperboard)",
            "disposal_method": "Recycle with paper products.",
            "notes": "Flatten the box. Remove any plastic liners or bags inside.",
            "score": 0
        }
    ],
    "barcode:112233445566": [
        {
            "order": ["product", "primary_material", "recycling_status", "action_needed", "tip"],
            "product": "Glass Food Jar (e.g., pickles, jam)",
            "primary_material": "Glass (Clear/Brown/Green)",
            "recycling_status": "Widely recyclable",
            "action_needed": "Rinse thoroughly. Remove lid.",
            "tip": "Metal lids can often be recycled separately; check local rules.",
            "score": 0
        }
    ],
    "barcode:665544332211": [
         {
            "order": ["item_description", "material_type", "how_to_recycle", "common_contaminants", "did_you_know"],
            "item_description": "Aluminum Beverage Can",
            "material_type": "Aluminum",
            "how_to_recycle": "Empty and rinse if needed. Generally, do not crush (unless your local facility prefers it, as it can help with sorting).",
            "common_contaminants": "Food residue, other waste.",
            "did_you_know": "Recycling aluminum saves up to 95% of the energy needed to make aluminum from raw materials.",
            "score": 0
        }
    ],
    "barcode:000000000000": [ # Example for an item not found or with no specific steps
        # This structure with an empty order list is what get-first-barcode-data would return
        # if the barcode exists but has no actual recycling steps defined in its primary entry.
        # However, for a truly "not found" barcode, the backend returns {"order": []} directly.
        # For this script, we'll simulate a barcode that exists but has an empty order.
        # The backend's get_first_barcode will return {"order": []} if the key isn't found at all.
        # This entry is more for testing the "empty order" display logic if such data existed.
        # For a truly non-existent barcode, the backend handles it.
    ]
}

def create_and_populate():
    conn = None
    try:
        conn = sqlite3.connect(DB_NAME)
        cursor = conn.cursor()

        # Ensure table exists (main.py also does this on first run)
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS kv (
            key TEXT PRIMARY KEY,
            value TEXT
        )
        """)
        conn.commit()
        print(f"Table 'kv' ensured to exist in {DB_NAME}.")

        # Insert or update sample data
        # The value stored in the DB is a JSON string representing a LIST of items.
        for key, list_of_items_for_barcode in sample_data.items():
            json_value_to_store = json.dumps(list_of_items_for_barcode)
            cursor.execute("""
            INSERT INTO kv (key, value) VALUES (?, ?)
            ON CONFLICT(key) DO UPDATE SET value = excluded.value
            """, (key, json_value_to_store))
            print(f"Inserted/Updated data for key: {key}")
        
        conn.commit()
        print(f"Successfully populated {DB_NAME} with sample data.")

    except sqlite3.Error as e:
        print(f"SQLite error: {e}")
    finally:
        if conn:
            conn.close()

if __name__ == "__main__":
    print(f"Attempting to create/populate {DB_NAME}...")
    create_and_populate()
    print("Script finished. If no errors, database should be ready.")
    print(f"The database file '{DB_NAME}' should be in the same directory as this script.")