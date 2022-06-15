import React from "react";
import { useEffect, useState } from "react";
import data from "../projects.json";
import TableProjects from "./TableProjects";

function Projects() {
  const [projectsArray, setProjectsArray] = useState(data.projects || []);
  const [currentEditId, setCurrentEditId] = useState(null);

  return (
    <div>
      <TableProjects
        projectsArray={projectsArray}
        setProjectsArray={setProjectsArray}
        currentEditId={currentEditId}
        setCurrentEditId={setCurrentEditId}
      />
    </div>
  );
}

export default Projects;
