function createParagraf(className) {
	let el = [],
		p;
	for (let i = 0; i < className.length; i++) {
		p = document.createElement("p");
		p.setAttribute("class", className[i]);
		el.push(p);
	}

	return el;
}

function createElement(tagName, className) {
	let element = document.createElement(tagName);

	if (className) {
		element.setAttribute("class", className);
	}

	return element;
}

function updateUi(target, value) {
	if (Array.isArray(target)) {
		return target.map((el) => (el.innerHTML = value));
	} else {
		return (target.innerHTML = value);
	}
}
