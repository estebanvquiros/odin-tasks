import {subscribe} from "../events/PubSub";

subscribe("stateChange", writeData);

function loadData() {
	console.log("Loading data...");
}

function writeData(state) {
	localStorage.setItem("localStorage", JSON.stringify(state));
}

export {loadData, writeData};
