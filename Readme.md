# Digital Signature Web Application

This is a web application built with Flask for the backend and React for the frontend. It allows users to upload documents, send them for signature to specified recipients, and retrieve the signed documents.

## Setup

### Backend (Flask)

1. Navigate to the `backend` directory.
2. Install the required Python packages:

   ```bash
   pip install Flask
   ```

3. Run the Flask server:

   ```bash
   python app.py
   ```

### Frontend (React)

1. Navigate to the `frontend` directory.
2. Install the required npm packages:

   ```bash
   npm install
   ```

3. Run the React app:

   ```bash
   npm start
   ```

## Usage

1. **Upload a Document**: Click on the "Upload" button and select a document (PDF or Word) to upload.

2. **Send Document for Signature**: Enter email addresses of recipients (comma-separated) in the input field and click on the "Send" button.

3. **Get Signed Document**: Click on the "Get Signed Document" button to retrieve the signed document.

## Project Structure

- `backend/`: Contains the Flask backend code.
- `frontend/`: Contains the React frontend code.

## Dependencies

- **Backend**:

  - Flask: Web framework for the backend.

- **Frontend**:
  - React: JavaScript library for building user interfaces.
  - Axios: Promise-based HTTP client for making requests.

## Authors

- [Marwan Abu Gama]

Feel free to contribute to this project by opening issues or pull requests.
