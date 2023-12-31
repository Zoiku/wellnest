import "../styles/TherapistVerification.css";
import { IconButton, TextField } from "@mui/material";
import Button from "./Button";
import { useState } from "react";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

const TherapistVerification = ({ handleTherapistVerification }) => {
  const [documents, setDocuments] = useState([]);
  const [uploadDocument, setUploadDocument] = useState("");
  const handleUploadDocument = (event) => {
    setUploadDocument(event.target.value);
  };
  const handleAddDocument = () => {
    if (uploadDocument === "") return;
    setDocuments([...documents, uploadDocument]);
    setUploadDocument("");
  };
  const handleRemoveDocument = (document) => () => {
    setDocuments(documents.filter((doc) => doc !== document));
  };

  return (
    <div className="therapist-verification-page">
      <div className="therapist-verification-page-box">
        <div>Welcome!</div>
        <div>
          To ensure the highest standards of care, please upload your
          certifications and linceses for review. Your qualifications are
          essential to building trust with our users.
        </div>
        <div>
          We may request additional documents for verification purposes.
        </div>
        <div className="therapist-verfication-upload">
          <TextField
            value={uploadDocument}
            onChange={handleUploadDocument}
            size={"small"}
            placeholder={"Document Title"}
          />
          <Button
            onClick={handleAddDocument}
            label={"Upload Document"}
            styles={"231"}
          />
        </div>

        {documents && documents.length > 0 && (
          <div className="uploaded-document-rows-container">
            <div style={{ marginBottom: 10 }}>Uploaded Documents</div>
            <div className="uploaded-document-rows">
              {documents.map((document, index) => (
                <div className="uploaded-document-row" key={index}>
                  <div className="uploaded-document-row-name">{document}</div>
                  <IconButton
                    onClick={handleRemoveDocument(document)}
                    sx={{ background: "#BD8CE9", color: "white" }}
                  >
                    <DeleteOutlineRoundedIcon fontSize="small" />
                  </IconButton>
                </div>
              ))}
            </div>
          </div>
        )}

        {documents && documents.length > 0 && (
          <div>
            <Button
              onClick={handleTherapistVerification}
              label={"Submit"}
              styles={"230"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TherapistVerification;
