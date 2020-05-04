function lerp(v0, v1, t) {
	return v0*(1-t)+v1*t
}

function lerpPlus(v0, v1, t, a = 0, min = 0, max = 0) {
	var c = (a !== 0 && Math.abs(v1 - v0) < a ? v1 : lerp(v0, v1, t));
	
	if (min !== 0 && Math.abs(c - v0) < min) {
		return v0 + (min * (v1 > v0 ? 1 : -1));
	} else if (max !== 0 && Math.abs(c - v0) > max) {
		return v0 + (max * (v1 > v0 ? 1 : -1));
	} else {
		return c;
	}
}