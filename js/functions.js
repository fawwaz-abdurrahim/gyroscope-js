function createElement(tagName, className) {
	let element = document.createElement(tagName);

	if (className) {
		element.setAttribute("class", className);
	}

	return element;
}

function createParagraf(className) {
	let el = [],
		p;
	for (let i = 0; i < className.length; i++) {
		p = createElement("p", className[i]);
		el.push(p);
	}

	return el;
}

function updateUi(target, value) {
	if (Array.isArray(target)) {
		return target.map((el) => (el.innerHTML = value));
	} else {
		return (target.innerHTML = value);
	}
}
