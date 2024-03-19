# app.py
from flask import Flask, request, jsonify
import os

app = Flask(__name__)

# Directory to store uploaded documents
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/upload', methods=['POST'])
def upload_document():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file:
        filename = file.filename
        file_path = os.path.join(UPLOAD_FOLDER, filename)
        file.save(file_path)
        return jsonify({'message': 'Document uploaded successfully', 'file_path': file_path})
    else:
        return jsonify({'error': 'Error uploading document'})

@app.route('/send', methods=['POST'])
def send_document():
    # Mock logic to send document for signature
    data = request.json
    recipients = data.get('recipients')
    file_path = data.get('file_path')
    
    if recipients and file_path:
        # Send document to recipients (mocked)
        return jsonify({'message': 'Document sent for signature', 'recipients': recipients})
    else:
        return jsonify({'error': 'Missing recipients or file path'})

@app.route('/get_signed', methods=['GET'])
def get_signed_document():
    # Mock logic to retrieve signed document
    signed_document_path = 'signed_document.pdf'  # Path to the signed document
    if os.path.exists(signed_document_path):
        return jsonify({'message': 'Signed document retrieved', 'signed_document_path': signed_document_path})
    else:
        return jsonify({'error': 'Signed document not found'})

if __name__ == '__main__':
    app.run(debug=True , port=5000)
