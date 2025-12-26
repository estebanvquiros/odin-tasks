import Project from "../models/Project";
import {saveProject} from "../state/AppState";

function createProject (id, name) {
	const newProject = new Project(id, name);
	saveProject(newProject);
}

export {createProject};