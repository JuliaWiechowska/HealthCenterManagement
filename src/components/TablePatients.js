import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { Icon } from "@mui/material";

function TablePatients({
  patientsArray,
  setPatientsArray,
  currentEditId,
  setCurrentEditId,
}) {
  const handleDeleteClick = (id) => {
    setPatientsArray(patientsArray.filter((patient) => patient.id !== id));
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = (id) => {
    setCurrentEditId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("2017-05-24");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  useEffect(() => {
    if (!currentEditId) return;
    const currentPatient = patientsArray.find(
      (patient) => patient.id === currentEditId
    );
    if (!currentPatient) return;
    setName(currentPatient.name);
    setSurname(currentPatient.surname);
    setBirthday(currentPatient.birthday);
    setCity(currentPatient.city);
    setStreet(currentPatient.street);
  }, [currentEditId, patientsArray]);

  const handleSave = () => {
    const newPatientsArray = patientsArray.map((patient) => {
      if (patient.id === currentEditId) {
        return {
          ...patient,
          name: name,
          surname: surname,
          birthday: birthday,
          city: city,
          street: street,
        };
      }
      return patient;
    });
    setPatientsArray(newPatientsArray);
    setCurrentEditId(null);
    setOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Birthdate</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Street</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patientsArray.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell>{patient.id}</TableCell>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.surname}</TableCell>
              <TableCell>{patient.birthday}</TableCell>
              <TableCell>{patient.city}</TableCell>
              <TableCell>{patient.street}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleDeleteClick(patient.id)}
                >
                  <DeleteIcon />
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleClickOpen(patient.id)}
                >
                  <EditIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit patient data</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Name"
                value={name}
                fullWidth
                variant="standard"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Surname"
                value={surname}
                fullWidth
                variant="standard"
                onChange={(e) => setSurname(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Birthday"
                value={birthday}
                fullWidth
                variant="standard"
                type="date"
                onChange={(e) => setBirthday(e.target.value)}
              />
              <TextField
                margin="dense"
                label="City"
                value={city}
                fullWidth
                variant="standard"
                onChange={(e) => setCity(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Street"
                value={street}
                fullWidth
                variant="standard"
                onChange={(e) => setStreet(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleSave}>Save</Button>
            </DialogActions>
          </Dialog>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TablePatients;
