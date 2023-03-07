import React from 'react';
import axios from 'axios';

function InjectionList(props) {
  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:5000/api/injections/${id}`);
      props.onDelete(id);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Timestamp</th>
          <th>Type</th>
          <th>Dose</th>
          <th>User ID</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.injections.map(injection => (
          <tr key={injection.id}>
            <td>{injection.id}</td>
            <td>{injection.timestamp}</td>
            <td>{injection.type}</td>
            <td>{injection.dose}</td>
            <td>{injection.user_id}</td>
            <td><button onClick={() => handleDelete(injection.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InjectionList;
