import os
import random

from flask import Flask, send_file, jsonify

app = Flask(__name__)


@app.route("/data")
def data():
    names = ['Annie', 'Bob', 'Cooper', 'Dougie', 'Laura']
    data = [{'name': name, 'score': random.randint(0, 100)} for name in names]
    return jsonify(data)


@app.route("/")
def main():
    index_path = os.path.join(app.static_folder, "index.html")
    return send_file(index_path)


# Everything not declared before (not a Flask route / API endpoint)...
@app.route("/<path:path>")
def route_frontend(path):
    # ...could be a static file needed by the front end that
    # doesn't use the `static` path (like in `<script src="bundle.js">`)
    file_path = os.path.join(app.static_folder, path)
    if os.path.isfile(file_path):
        return send_file(file_path)
    # ...or should be handled by the SPA's "router" in front end
    else:
        index_path = os.path.join(app.static_folder, "index.html")
        return send_file(index_path)


if __name__ == "__main__":
    # Only for debugging while developing
    app.run(host="0.0.0.0", debug=True, port=80)
