// if (window.DeviceMotionEvent) alert('Device Motion supported');
// if (window.DeviceOrientationEvent) alert('Device Orientation supported');

const dvcmotion_acl = createParagraf([
	"devicemotion acl alpha",
	"devicemotion acl beta",
	"devicemotion acl gamma",
]);

const dvcmotion_aclIncludeGrav = createParagraf([
	"devicemotion acl-include-grav alpha",
	"devicemotion acl-include-grav beta",
	"devicemotion acl-include-grav gamma",
]);

const dvcmotion_rotationRate = createParagraf([
	"devicemotion rotation-rate alpha",
	"devicemotion rotation-rate beta",
	"devicemotion rotation-rate gamma",
]);

for (let el of dvcmotion_acl) {
	const current = el.classList;

	if (current.contains("alpha")) {
		el.innerHTML = "alpha / Z: ";
	}
	if (current.contains("beta")) {
		el.innerHTML = "beta / X: ";
	}
	if (current.contains("gamma")) {
		el.innerHTML = "gamma / Y: ";
	}
}

for (let el of dvcmotion_aclIncludeGrav) {
	const current = el.classList;

	if (current.contains("alpha")) {
		el.innerHTML = "alpha / Z: ";
	}
	if (current.contains("beta")) {
		el.innerHTML = "beta / X: ";
	}
	if (current.contains("gamma")) {
		el.innerHTML = "gamma / Y: ";
	}
}

for (let el of dvcmotion_rotationRate) {
	const current = el.classList;

	if (current.contains("alpha")) {
		el.innerHTML = "alpha / Z: ";
	}
	if (current.contains("beta")) {
		el.innerHTML = "beta / X: ";
	}
	if (current.contains("gamma")) {
		el.innerHTML = "gamma / Y: ";
	}
}

acl.append(...dvcmotion_acl);
aclIncludeGravity.append(...dvcmotion_aclIncludeGrav);
rotationRate.append(...dvcmotion_rotationRate);

for (let el of dm) {
	el.append(createElement("span", "dm-value"));
}

window.addEventListener("devicemotion", (evt) => {
	// app.append(createParagraf([`device motion: alpha: ${evt.accelerationIncludingGravity.z}`, `beta: ${evt.accelerationIncludingGravity.x}`, `gamma: ${evt.accelerationIncludingGravity.y}`]))

	for (let el of dm) {
		const current = el.classList;

		if (current.contains("acl")) {
			if (current.contains("alpha")) {
				el.firstElementChild.innerHTML = evt.acceleration.z;
			}
			if (current.contains("beta")) {
				el.firstElementChild.innerHTML = evt.acceleration.x;
			}
			if (current.contains("gamma")) {
				el.firstElementChild.innerHTML = evt.acceleration.y;
			}
		}

		if (current.contains("acl-include-grav")) {
			if (current.contains("alpha")) {
				el.firstElementChild.innerHTML = evt.accelerationIncludingGravity.z;
			}
			if (current.contains("beta")) {
				el.firstElementChild.innerHTML = evt.accelerationIncludingGravity.x;
			}
			if (current.contains("gamma")) {
				el.firstElementChild.innerHTML = evt.accelerationIncludingGravity.y;
			}
		}

		if (current.contains("rotation-rate")) {
			if (current.contains("alpha")) {
				el.firstElementChild.innerHTML = evt.rotationRate.z;
			}
			if (current.contains("beta")) {
				el.firstElementChild.innerHTML = evt.rotationRate.x;
			}
			if (current.contains("gamma")) {
				el.firstElementChild.innerHTML = evt.rotationRate.y;
			}
		}
	}

	boxAcl.style.transform = `skewX(${evt.acceleration.x}deg)`;
	boxAcl.style.transform = `skewY(${evt.acceleration.y}deg)`;

	boxAclIncludeGrav.style.transform = `skewX(-${evt.accelerationIncludingGravity.x}deg)`;
	boxAclIncludeGrav.style.transform = `skewY(-${evt.accelerationIncludingGravity.y}deg)`;

	boxRotationRate.style.transform = `skewX(${evt.rotationRate.x}deg)`;
	boxRotationRate.style.transform = `skewY(${evt.rotationRate.y}deg)`;
});

// window.addEventListener('deviceorientation', function (event) {
//     const paragrafs = createParagraf(['deviceorientation alpha', 'deviceorientation beta', 'deviceorientation gamma']);

//     app.append(...paragrafs);
// });
