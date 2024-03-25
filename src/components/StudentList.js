import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []); // Empty dependency array to ensure the effect runs only once after the component mounts

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8090/allstudents`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
      // Optionally, you can add code to handle errors or display an error message to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Student List</h2>
      <button onClick={fetchStudents} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Students'}
      </button>
      <center>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </center>
    </div>
  );
};

export default StudentList;