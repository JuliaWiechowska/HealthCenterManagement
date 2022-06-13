import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

function TablePatients({
  patientsArray,
  setPatientsArray,
  currentEditId,
  setCurrentEditId,
}) {
  //const [currentEditId, setCurrentEditId] = useState(null);
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
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleClickOpen(patient.id)}
                >
                  Edit
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
                id="id"
                label="Name"
                type="name"
                defaultValue={
                  patientsArray.find((patient) => patient.id === currentEditId)
                    ?.name
                }
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Save</Button>
            </DialogActions>
          </Dialog>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TablePatients;
