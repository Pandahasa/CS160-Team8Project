import { useState } from 'react';
import './pageStyles/WhatToRecycle.css';
import bottleImage from '../assets/bottles.jpg';
import cansImage from '../assets/cans.png';
import paperImage from '../assets/paperrecycling.jpeg';
import plasticbagsImage from '../assets/plasticbags.jpg';
import { Link } from 'react-router-dom';

// BarcodeInput: Modified to lift the searched barcode value and correct state/input type
function BarcodeInput({ setRecycleMethod, onBarcodeSubmit }) {
  const [barcode, setBarcode] = useState(''); // Corrected initial state for input

  async function handleSubmit(e) {
    e.preventDefault();
    if (!barcode.trim()) {
        // Optionally set an error or return if barcode is empty
        setRecycleMethod({ error: "Barcode cannot be empty." });
        return;
    }
    onBarcodeSubmit(barcode); // Pass the submitted barcode to the parent

    try {
      const params = new URLSearchParams();
      params.append("barcode", barcode);
      const response = await fetch(`http://localhost:5000/api/v1/get-first-barcode-data?${params.toString()}`, { // Added .toString() for params
        method: 'GET',
      });
      // Corrected fetch response handling
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Server error: ${response.status}`);
      }
      const resp = await response.json();
      console.log('Server response:', resp);
      setRecycleMethod(resp);
    } catch (error) {
      console.error('Error sending barcode:', error);
      setRecycleMethod({ error: error.message || 'Failed to fetch barcode data.' });
    }
  }

  return (
    <form className="barcode-form" onSubmit={handleSubmit}>
      <label htmlFor="barcodeInput">Enter Barcode:</label>
      <input
        id="barcodeInput"
        type="text" // Changed to text for broader barcode compatibility
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
        required
      /> {/* Corrected button placement */}
      <button type="submit">Send Barcode</button>
    </form>
  );
}

function capitalizeFirstLetter(val) {
  if (typeof val !== 'string' || val.length === 0) return '';
  return val.charAt(0).toUpperCase() + val.slice(1);
}

// RecycleMethod: Modified to show an "Add Item" button
function RecycleMethod({ recycleMethod, onAddItem }) {
  // Handle error state from parent
  if (recycleMethod && recycleMethod.error) {
    return <p style={{ color: 'red', textAlign: 'left', marginTop: '1rem' }}>Error: {recycleMethod.error}</p>;
  }
  // Handle initial empty string state for recycleMethod
  if (typeof recycleMethod === 'string' && recycleMethod === '') {
    return <p style={{ textAlign: 'left', marginTop: '1rem' }}>Enter a barcode to get information.</p>;
  }

  return (
    <div style={{ textAlign: 'left', marginTop: '1rem' }}> {/* Added marginTop for consistent spacing */}
      {recycleMethod && typeof recycleMethod === 'object' && recycleMethod.hasOwnProperty("order") ? (
        recycleMethod.order.length > 0 ? (
          recycleMethod.order.map((x, i) => {
            // Assuming x is a key like "product_name", make it "Product name"
            const formattedKey = x.split('_').map(word => capitalizeFirstLetter(word)).join(' ');
            return <p key={i}><b>{formattedKey}</b>: {recycleMethod[x]}</p>;
          })
        ) : (
          // Item not found, show button to add
          <div>
            <p>Unknown Item.</p>
            <button onClick={onAddItem} style={{ marginTop: '0.5rem' }}>Add Information for this Item?</button>
          </div>
        )
      ) : (
        // Fallback for unexpected recycleMethod structure after a search attempt
        // (e.g., if it's a string message not indicating an error object)
        (typeof recycleMethod !== 'object' && recycleMethod !== '') ? <p>No information found or unexpected data format.</p> : null
      )}
    </div>
  );
}

// New AddItemForm component
function AddItemForm({ barcodeToSubmit, onFormSubmitSuccess, onCancel }) {
  const [productName, setProductName] = useState('');
  const [material, setMaterial] = useState('');
  const [recyclable, setRecyclable] = useState('Yes'); // Default value
  const [instructions, setInstructions] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedbackMessage('');

    const itemData = {
      order: ["product_name", "material", "recyclable", "instructions", "notes"],
      product_name: productName,
      material: material,
      recyclable: recyclable,
      instructions: instructions,
      notes: notes,
    };

    const formData = new FormData();
    formData.append('barcode', barcodeToSubmit);
    formData.append('data', JSON.stringify(itemData));

    try {
      const response = await fetch('http://localhost:5000/api/v1/upload-barcode-data', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Server error: ${response.status}`);
      }
      const successText = await response.text();
      setFeedbackMessage(`Success: ${successText}. Item data for ${barcodeToSubmit} submitted.`);
      // Clear form fields
      setProductName(''); setMaterial(''); setRecyclable('Yes'); setInstructions(''); setNotes('');
      if (onFormSubmitSuccess) onFormSubmitSuccess(); // Callback to parent
    } catch (error) {
      console.error('Error submitting new item:', error);
      setFeedbackMessage(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="add-item-form-container" style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #eee' }}>
      <h4>Add Information for Barcode: {barcodeToSubmit}</h4>
      {feedbackMessage && <p style={{ color: feedbackMessage.startsWith('Error') ? 'red' : 'green' }}>{feedbackMessage}</p>}
      <form onSubmit={handleFormSubmit}>
        <div style={{ marginBottom: '0.5rem' }}>
          <label>Product Name: </label>
          <input type="text" value={productName} onChange={e => setProductName(e.target.value)} required />
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <label>Material: </label>
          <input type="text" value={material} onChange={e => setMaterial(e.target.value)} required />
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <label>Recyclable: </label>
          <select value={recyclable} onChange={e => setRecyclable(e.target.value)}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Check Locally">Check Locally</option>
            <option value="Unsure">Unsure</option>
          </select>
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <label>Instructions: </label>
          <textarea value={instructions} onChange={e => setInstructions(e.target.value)} />
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <label>Notes (optional): </label>
          <textarea value={notes} onChange={e => setNotes(e.target.value)} />
        </div>
        <button type="submit" disabled={isSubmitting} style={{ marginRight: '10px' }}>
          {isSubmitting ? 'Submitting...' : 'Submit New Item'}
        </button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default function WhatToRecycle() {
  const [recycleMethod, setRecycleMethod] = useState(''); // Kept as per original
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const [currentBarcode, setCurrentBarcode] = useState(''); // To store the barcode for the add form

  const handleBarcodeSubmit = (submittedBarcode) => {
    setCurrentBarcode(submittedBarcode); // Store the barcode that was searched
    setShowAddItemForm(false); // Hide add item form if it was open for a previous search
    // The actual fetch is done in BarcodeInput, which calls setRecycleMethod
  };

  const handleShowAddItemForm = () => {
    setShowAddItemForm(true); // Show the form
  };

  const handleFormSubmitSuccess = () => {
    // After successful submission, you might want to hide the form
    // and optionally clear the recycleMethod or re-fetch.
    setShowAddItemForm(false);
    setRecycleMethod({ message: `Data for ${currentBarcode} submitted. You can search again to view.` }); // Provide feedback
  };

  const handleCancelAddItem = () => {
    setShowAddItemForm(false); // Hide the form
  };

  return (
    <section className="what-to-recycle">
      <h1>What to Recycle</h1>
      <p>Below are common recyclables. Click on an image for details:</p>

      <div className="recyclables-grid">
        <Link to="/PaperCardboard" className="recyclable-item">
          <img src={paperImage} alt="Paper Recycling" /> {/* Corrected img tag */}
          <h3>Paper &amp; Cardboard</h3>
        </Link>

        <Link to="/PlasticBottles" className="recyclable-item">
          <img src={bottleImage} alt="Plastic Bottles" /> {/* Corrected img tag */}
          <h3>Plastic Bottles</h3>
        </Link>

        <Link to="/AluminumCans" className="recyclable-item">
          <img src={cansImage} alt="Aluminum Cans" /> {/* Corrected img tag */}
          <h3>Aluminum Cans</h3>
        </Link>

        <Link to="/PlasticBags" className="recyclable-item">
          <img src={plasticbagsImage} alt="Plastic Bags" /> {/* Corrected img tag */}
          <h3>Plastic Bags</h3>
        </Link>
      </div>

      <div className="barcode-section">
        <h2>Scan Your Barcode</h2>
        <BarcodeInput
          setRecycleMethod={setRecycleMethod}
          onBarcodeSubmit={handleBarcodeSubmit}
        />
        {showAddItemForm ? (
          <AddItemForm
            barcodeToSubmit={currentBarcode}
            onFormSubmitSuccess={handleFormSubmitSuccess}
            onCancel={handleCancelAddItem}
          />
        ) : (
          <RecycleMethod
            recycleMethod={recycleMethod}
            onAddItem={handleShowAddItemForm}
          />
        )}
      </div>
    </section>
  );
}