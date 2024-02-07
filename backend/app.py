from flask import Flask, flash, request, redirect, url_for, jsonify
from flask_cors import CORS, cross_origin
from openai import OpenAI

app = Flask(__name__)
cors = CORS(app,  resources={r"*": {"origins": "*"}})


client = OpenAI() # gets API key from .env file

file = client.files.create(
  file=open("Kuhlman_Resume2024.pdf", "rb"),
  purpose='assistants'
)
"""
file = client.files.create(
  file=open("qa_doc.pdf", "rb"),
  purpose='assistants'
)
"""
assistant = client.beta.assistants.create(
    name="Stella",
    instructions="GPT is Rebecca Kuhlman's personal advocate. GPT gives user information regarding Rebecca Kuhlman, regarding their interests, experience in Computer Science, and their stellar work ethic. Their pronouns are They/Them. Everything is business professional. Answer only questions about Rebecca's qualifications and career. If a user asks for code, to do math, or something irrelevant about the topic, politely decline the question.",
    model="gpt-3.5-turbo-0125",
    tools=[{"type": "retrieval"}],
    file_ids=[file.id]
)

thread = client.beta.threads.create(
  messages=[
    {
      "role": "user",
      "content": "Create 3 data visualizations based on the trends in this file.",
      "file_ids": [file.id]
    }
  ]
)

run = client.beta.threads.runs.create(
  thread_id=thread.id,
  assistant_id=assistant.id
)

@app.route('/')
#@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def hello():
    return 'Hello, World!'

@app.route('/search', methods=['POST'])
def search():
    data = request.json
    query = data['query']
    print(data)
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
    print(result.content)
    return jsonify(result.content)

if __name__ == '__main__':
    app.run(debug=True)