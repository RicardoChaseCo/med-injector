# MED-INJECTOR

## Summary

Web/Mobile Applications can interact with a wireless medical injector in multiple ways: 
* bluetooth
* Wifi
* NFC
* Cellular Network
* Long Range Gateway

## Implementation

For a medical injector, I can imagine that it has the following things to do with a web app:

* Track medication usage: The device could send data to the web application indicating when and how much medication was injected
* Set reminders and alerts: The web application could send reminders and alerts to the device, indicating when it's time for the patient to take their medication
* Monitor health data: The device could send health data to the web application, which could be used to monitor the patient's health
* Update hardware: The web application could send firmware updates to the device, allowing it to receive new features

## Codes

### Frontend:

* The frontend is a React app that displays a list of medications. It has two main components: the MedicationList and the MedicationForm. The MedicationList component displays a list of medications fetched from the backend. The MedicationForm component allows users to add new medications by making a POST request to the backend.

* The MedicationList component uses the useEffect hook to fetch medication data from the backend API when the component is mounted. It makes a GET request to the /api/medications endpoint using the axios library, and sets the retrieved data as the state of the component. The component then maps over the medications array to render each medication as a table row.

### Backend:

* The backend is a Node.js app that provides a RESTful API for the frontend to interact with. It has one endpoint at /api/medications, which returns a list of fake medication data.

* When the backend is started using node index.js, it listens for incoming requests on port 5000. When a GET request is received on the /api/medications endpoint, it returns the fake medication data as a JSON object.

* When a POST request is received on the /api/medications endpoint, it adds the new medication data to the fake medication data array and returns a JSON object containing the updated medication data.

### Together:

* When the frontend app is started using npm start, it runs on port 3000 and makes a request to the backend API on port 5000 to fetch medication data. The MedicationList component renders the retrieved medication data in a table on the page.

* When a user submits the MedicationForm, the new medication data is sent as a POST request to the backend API, which adds the new medication to the fake medication data array. The updated medication data is then returned to the frontend and displayed in the MedicationList component.

## simple demo

<img src="https://github.com/RicardoChaseCo/med-injector/blob/main/Screenshot%202023-03-07%20at%2011.32.41.png" alt="Image text" width="800">

