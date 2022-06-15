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
import { useEffect, useState } from "react";

function TableProjects({
  projectsArray,
  setProjectsArray,
  currentEditId,
  setCurrentEditId,
}) {
  const handleDeleteClick = (id) => {
    setProjectsArray(projectsArray.filter((project) => project.id !== id));
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
            <TableCell>Project Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Patients Count</TableCell>
            <TableCell>Patients with agreement</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projectsArray.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.id}</TableCell>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.description}</TableCell>
              <TableCell>{project.date}</TableCell>
              <TableCell>{project.patients.length}</TableCell>
              <TableCell>
                {project.patients.filter((patient) => patient.agreement).length}
              </TableCell>

              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleDeleteClick(project.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleClickOpen(project.id)}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableProjects;
