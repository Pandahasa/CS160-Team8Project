import sqlite3

class SqliteMiddleware():
    def __init__(self, ):
        self.con = sqlite3.connect("sqlite.db")
        self.con.execute("CREATE TABLE IF NOT EXISTS kv (key TEXT PRIMARY KEY, value TEXT)")
        self.con.commit()

    def get(self, key: str) -> str:
        print(key)
        cur = self.con.execute("SELECT value FROM kv WHERE key = ?;", [key])
        val = cur.fetchone()
        cur.close()
        return val
    
    def set(self, key: str, val: str) -> None:
        cur = self.con.execute("INSERT INTO kv (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value;", [key, val])
        self.con.commit()
        cur.close()

    def close(self, ) -> None:
        self.con.close()