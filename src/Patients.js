import data from "./patientsData.json";

import { useState } from "react";

import TablePatients from "./TablePatients";

import AddPatient from "./AddPatient.js";

import "./patients.css";

function Patients() {
  const [patientsArray, setPatientsArray] = useState(data.patients || []);
  const [currentEditId, setCurrentEditId] = useState(null);
  return (
    <div>
      <div className="user-form">
        <AddPatient
          patientsArray={patientsArray}
          setPatientsArray={setPatientsArray}
        />
      </div>
      <TablePatients
        patientsArray={patientsArray}
        setPatientsArray={setPatientsArray}
        currentEditId={currentEditId}
        setCurrentEditId={setCurrentEditId}
      />
    </div>
  );
}

export default Patients;
