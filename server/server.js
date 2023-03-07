const express = require('express');
const app = express();

// Define some fake medical injection data
const injections = [
  { id: 1, timestamp: '2023-03-07T13:00:00Z', type: 'Flu shot', dose: 0.5, user_id: 123 },
  { id: 2, timestamp: '2023-03-06T08:30:00Z', type: 'COVID vaccine', dose: 1, user_id: 456 },
  { id: 3, timestamp: '2023-03-05T11:15:00Z', type: 'Pneumonia vaccine', dose: 0.5, user_id: 789 },
  { id: 3, timestamp: '2023-03-05T11:15:00Z', type: 'Pneumonia vaccine', dose: 0.5, user_id: 789 },
  { id: 3, timestamp: '2023-03-05T11:15:00Z', type: 'Pneumonia vaccine', dose: 0.5, user_id: 789 },
  { id: 3, timestamp: '2023-03-05T11:15:00Z', type: 'Pneumonia vaccine', dose: 0.5, user_id: 789 },
  { id: 2, timestamp: '2023-03-06T08:30:00Z', type: 'COVID vaccine', dose: 1, user_id: 456 },
];

// Define a function to get all injections
function getAllInjections(req, res) {
  res.json(injections);
}

// Define a function to get a single injection by ID
function getInjectionById(req, res) {
  const id = parseInt(req.params.id);
  const injection = injections.find(injection => injection.id === id);
  if (injection) {
    res.json(injection);
  } else {
    res.status(404).send('Injection not found');
  }
}

// Define a function to add a new injection
function addInjection(req, res) {
  const newInjection = {
    id: injections.length + 1,
    timestamp: new Date().toISOString(),
    type: req.body.type,
    dose: parseFloat(req.body.dose),
    user_id: parseInt(req.body.user_id)
  };
  injections.push(newInjection);
  res.json(newInjection);
}

// Use middleware to parse request bodies as JSON
app.use(express.json());

// Allow cross-origin requests from all domains
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Define API endpoints for interacting with injections
app.get('/api/injections', getAllInjections);
app.get('/api/injections/:id', getInjectionById);
app.post('/api/injections', addInjection);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
