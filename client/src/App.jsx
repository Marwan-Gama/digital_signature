// src/App.js
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [recipients, setRecipients] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleRecipientChange = (e) => {
    setRecipients(e.target.value);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    axios
      .post("http://localhost:5000/upload", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error uploading document:", error);
      });
  };

  const handleSend = () => {
    axios
      .post("http://localhost:5000/send", {
        recipients: recipients.split(",").map((email) => email.trim()),
        file_path: "/path/to/uploaded/document.pdf", // Update with the actual file path
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error sending document:", error);
      });
  };

  const handleGetSignedDocument = () => {
    axios
      .get("http://localhost:5000/get_signed")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving signed document:", error);
      });
  };

  return (
    <div className="App">
      <h1>Digital Signature Web App</h1>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Recipients (comma-separated)"
          onChange={handleRecipientChange}
        />
        <button onClick={handleSend}>Send</button>
      </div>
      <div>
        <button onClick={handleGetSignedDocument}>Get Signed Document</button>
      </div>
    </div>
  );
}

export default App;
