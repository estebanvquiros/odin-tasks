import "../styles/global.css";

import {createTask} from "./controllers/tasksController";
import {createProject} from "./controllers/projectsController";
import {printState, getProjectTasks} from "./state/AppState";
import {loadData} from "./persistence/DAO";

loadData(); // Loads state from persistence

createProject("p1", "School");
createProject("p2", "Internship");

createTask("t1", "Do the homework", "p1");
createTask("t2", "Send the resume", "p2");
createTask("t3", "Meet at the interview", "p2");

printState();

console.log(getProjectTasks("p2"));