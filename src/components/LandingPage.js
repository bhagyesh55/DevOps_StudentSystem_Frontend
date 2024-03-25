import React, { useState } from 'react';
import axios from 'axios';

const LandingPage = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post(`http://localhost:8090/updateStudents`, {
          name,
          address
        });
  
        console.log('Student added:', response.data);
        // Optionally, you can add code to handle success or display a message to the user
      } catch (error) {
        console.error('Error adding student:', error);
        // Optionally, you can add code to handle errors or display an error message to the user
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <button type="submit">Add Student</button>
      </form>
    );
  };
  
  export default LandingPage;