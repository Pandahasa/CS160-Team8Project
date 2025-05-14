import json

import importlib.util

from flask import Flask, request, g
from flask_cors import CORS
from sqlite_patch import SqliteMiddleware

app = Flask(__name__)
CORS(app, origins=r'https?:\/\/localhost:[0-9]{4}')

SQLITE = True

def get_kv_db():
    kv_db = getattr(g, '_database_kv', None)
    if kv_db is None:
        if SQLITE or importlib.util.find_spec("redis") is None:
            kv_db = g._database_kv = SqliteMiddleware()
        else:
            import redis
            kv_db = redis.Redis(host='localhost', port=6379, db=0)
    return kv_db

@app.teardown_appcontext
def close_connection(exception):
    kv_db = getattr(g, '_database_kv', None)
    if kv_db is not None:
        kv_db.close()

@app.route("/api/v1/hello")
def hello():
    return "Hello World"

@app.route("/api/v1/get-barcode-data", methods=["GET"])
def get_barcode():
    if "barcode" not in request.args or not request.args.get("barcode"):
        return "Unknown data", 400
    print(request.args.get("barcode"))
    
    data = request.args.get("barcode").replace("-", "")
    r = get_kv_db()
    info = r.get("barcode:"+data) # expect tuple even on single response
    return json.loads(info[0]) if info else "[{\"order\": []}]"

@app.route("/api/v1/get-first-barcode-data", methods=["GET"])
def get_first_barcode():
    if "barcode" not in request.args or not request.args.get("barcode"):
        return "Unknown data", 400
    print(request.args.get("barcode"))
    
    data = request.args.get("barcode").replace("-", "")
    r = get_kv_db()
    info = r.get("barcode:"+data) # expect tuple even on single response
    if info:
        result = json.loads(info[0])
        result.sort(key=lambda x: x["score"])
        return json.dumps(result[0])
    else:
        return "{\"order\": []}"

@app.route("/api/v1/upload-barcode-data", methods=["POST"])
def upload_barcode_data():
    request_data = request.form.to_dict()
    print(request_data)
    if "barcode" not in request_data:
        return "Unknown Format", 400
    if "data" not in request_data:
        return "Unknown Format", 400
    request_data_json = json.loads(request_data["data"])
    if "order" not in request_data_json:
        return "Unknown", 400
    for field in request_data_json["order"]:
        if field not in request_data_json:
            return "Field specified but not filled", 400
    
    key = "barcode:" + request_data["barcode"]
    r = get_kv_db()
    info = r.get(key)
    info = info[0] if info else "[]"
    d = json.loads(info)
    request_data_json["score"] = 0
    d.append(request_data_json)
    r.set(key, json.dumps(d))
    return "Uploaded", 200

if __name__ == '__main__':
    app.run(debug=True)