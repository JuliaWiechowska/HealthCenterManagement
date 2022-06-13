import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./patients.css";

function AddPatient({ patientsArray, setPatientsArray }) {
  const [currentIndex, setCurrentIndex] = useState(7);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("2017-05-24");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  const handleSubmitCLick = () => {
    setPatientsArray([
      ...patientsArray,
      {
        id: currentIndex,
        name: name,
        surname: surname,
        birthday: birthday,
        city: city,
        street: street,
      },
    ]);
    setCurrentIndex(currentIndex + 1);
    setName("");
    setSurname("");
    setCity("");
    setStreet("");
  };
  return (
    <div className="txt-fields">
      <TextField
        id="outlined-helperText"
        label="Name"
        value={name}
        sx={{ width: 220 }}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-helperText"
        label="Surname"
        value={surname}
        sx={{ width: 220 }}
        onChange={(e) => setSurname(e.target.value)}
      />
      <TextField
        id="date"
        label="Birthday"
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-helperText"
        label="City"
        value={city}
        sx={{ width: 220 }}
        onChange={(e) => setCity(e.target.value)}
      />
      <TextField
        id="outlined-helperText"
        label="Street"
        value={street}
        sx={{ width: 220 }}
        onChange={(e) => setStreet(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmitCLick}>
        Submit
      </Button>
    </div>
  );
}

export default AddPatient;
