import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./patients.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

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
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="add-btn">
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleClickOpen()}
      >
        Add Patient
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add patient</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-helperText"
            variant="standard"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-helperText"
            variant="standard"
            label="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <br />
          <TextField
            id="date"
            label="Birthday"
            variant="standard"
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <TextField
            id="outlined-helperText"
            variant="standard"
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-helperText"
            variant="standard"
            label="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmitCLick}>Submit</Button>
        </DialogActions>
      </Dialog>

      <div className="txt-fields"></div>
    </div>
  );
}

export default AddPatient;
