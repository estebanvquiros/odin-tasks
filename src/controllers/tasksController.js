import Task from "../models/Task";
import {saveTask} from "../state/AppState";

function createTask (id, title, projectId) {
	const newTask = new Task(id, title, projectId);
	saveTask(newTask);
}

export {createTask};