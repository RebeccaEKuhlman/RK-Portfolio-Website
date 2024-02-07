from flask import Flask, flash, request, redirect, url_for, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app,  resources={r"*": {"origins": "*"}})

@app.route('/')
#@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def hello():
    return 'Hello, World!'

@app.route('/search', methods=['POST'])
def search():
    data = request.json
    query = data['query']
    results = {'message': f'Search results for "{query}"'}
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)