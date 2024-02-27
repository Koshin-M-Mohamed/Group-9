import React, { useState } from 'react';
import './DetailUpdatePage.css';
//import UpdateDetailPage from './components/UpdateDetailPage';

const DetailUpdatePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [patientId, setPatientId] = useState('12345');
  const [examId, setExamId] = useState('67890');
  const [imageUrl, setImageUrl] = useState('https://example.com/image.jpg');
  const [age, setAge] = useState('30');
  const [sex, setSex] = useState('Male');
  const [zipCode, setZipCode] = useState('12345');
  const [bmi, setBmi] = useState('25');

  const handleUpdate = () => {
    // Implement update logic here
    console.log('Updating patient details...');
    setIsEditing(false); // Exit editing mode after update
  };

  return (
    <div>
      <h2>Patient Details</h2>
      <div>
        <label>Patient ID:</label>
        {isEditing ? (
          <input
            type="text"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          />
        ) : (
          <span>{patientId}</span>
        )}
      </div>
      <div>
        <label>Exam ID:</label>
        {isEditing ? (
          <input
            type="text"
            value={examId}
            onChange={(e) => setExamId(e.target.value)}
          />
        ) : (
          <span>{examId}</span>
        )}
      </div>
      <div>
        <label>Image URL:</label>
        {isEditing ? (
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        ) : (
          <span>{imageUrl}</span>
        )}
      </div>
      <div>
        <label>Age:</label>
        {isEditing ? (
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        ) : (
          <span>{age}</span>
        )}
      </div>
      <div>
        <label>Sex:</label>
        {isEditing ? (
          <input
            type="text"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          />
        ) : (
          <span>{sex}</span>
        )}
      </div>
      <div>
        <label>Zip Code:</label>
        {isEditing ? (
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        ) : (
          <span>{zipCode}</span>
        )}
      </div>
      <div>
        <label>BMI:</label>
        {isEditing ? (
          <input
            type="text"
            value={bmi}
            onChange={(e) => setBmi(e.target.value)}
          />
        ) : (
          <span>{bmi}</span>
        )}
      </div>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
      {isEditing && <button onClick={handleUpdate}>Update</button>}
    </div>
  );
};

export default DetailUpdatePage;