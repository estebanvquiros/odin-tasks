const events = {};

function subscribe(eventName, fn) {
	events[eventName] = events[eventName] || [];
	if (events[eventName].includes(fn)) return;
	events[eventName].push(fn);
}

function emit(eventName, data) {
	if (!events[eventName]) return;
	events[eventName].forEach(fn => fn(data));
}

export {subscribe, emit};


