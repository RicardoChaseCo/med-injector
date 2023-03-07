import React, { useState } from 'react';
import axios from 'axios';

function InjectionForm(props) {
  const [type, setType] = useState('');
  const [dose, setDose] = useState('');
  const [userId, setUserId] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const injection = {
      type: type,
      dose: dose,
      user_id: userId
    };
    try {
      const response = await axios.post('http://localhost:5000/api/injections', injection);
      props.onAdd(response.data);
      setType('');
      setDose('');
      setUserId('');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="type">Type:</label>
        <input type="text" id="type" value={type} onChange={event => setType(event.target.value)} />
      </div>
      <div>
        <label htmlFor="dose">Dose:</label>
        <input type="text" id="dose" value={dose} onChange={event => setDose(event.target.value)} />
      </div>
      <div>
        <label htmlFor="user_id">User ID:</label>
        <input type="text" id="user_id" value={userId} onChange={event => setUserId(event.target.value)} />
      </div>
      <button type="submit">Add Injection</button>
    </form>
  );
}

export default InjectionForm;
