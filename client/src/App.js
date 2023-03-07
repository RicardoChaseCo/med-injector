import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InjectionForm from './InjectionForm';
import InjectionList from './InjectionList';

function App() {
  const [injections, setInjections] = useState([]);
  const [loading, setLoading] = useState(true);

  async function addInjection(injection) {
    setInjections([...injections, injection]);
  }

  async function deleteInjection(id) {
    await axios.delete(`/api/injections/${id}`);
    setInjections(injections.filter(injection => injection.id !== id));
  }

  async function fetchInjections() {
    try {
      const response = await axios.get('http://localhost:5000/api/injections');
      setInjections(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchInjections();
  }, []);

  return (
    <div>
      <h1>Medical Injections</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <InjectionForm onAdd={addInjection} />
          <InjectionList injections={injections} onDelete={deleteInjection} />
        </>
      )}
    </div>
  );
}

export default App;
