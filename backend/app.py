from flask import Flask, flash, request, redirect, url_for, jsonify
from flask_cors import CORS, cross_origin
from openai import OpenAI

app = Flask(__name__)
cors = CORS(app,  resources={r"*": {"origins": "*"}})


client = OpenAI() # gets API key from .env file

@app.route('/')
#@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def hello():
    return 'Hello, World!'

@app.route('/search', methods=['POST'])
def search():
    print("in search")
    data = request.json
    query = data['query']
    completion = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "GPT is Rebecca Kuhlman's personal advocate. GPT gives user information regarding Rebecca Kuhlman, regarding their interests, experience in Computer Science, and their stellar work ethic. Their pronouns are They/Them. Everything is business professional. Answer only questions about Rebecca's qualifications and career. If a user asks for code, to do math, or something irrelevant about the topic, politely decline the question."},
            {"role": "user", "content": query} # adjust later, add more pre-prompting
        ]
    )
   # result = {'message': f'Search results for "{query}"'}
    result = completion.choices[0].message
    print(result)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)