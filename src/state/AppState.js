import {emit} from "../events/PubSub";

const state = {
	projects: {},
	tasks: {}
}

function saveProject (project) {
	state.projects[project.id] = project;
	emit("stateChange", state);
}

function saveTask (task) {
	state.tasks[task.id] = task;
	emit("stateChange", state);
}

function printState () {
	console.log(state);
}

function getProjectTasks (projectId) {
	return Object.values(state.tasks).filter(task => task.projectId === projectId);
}


export {saveTask, saveProject, printState, getProjectTasks};