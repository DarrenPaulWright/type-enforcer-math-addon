const TWO_PI = 2 * Math.PI;

/**
 * Angle functions.
 *
 * @typedef {object} angle
 */
const angle = {
	/**
	 * Returns the same angle between 0 and 2 * PI
	 *
	 * @function angle.normalize
	 *
	 * @arg {Number} angle
	 *
	 * @returns {Number} - The normalized angle
	 */
	normalize(angle) {
		angle %= TWO_PI;
		return (angle < 0) ? (angle + TWO_PI) : angle;
	},
	/**
	 * Returns the angle from origin to the provided Point
	 *
	 * @function angle.fromOrigin
	 *
	 * @arg {Point} point
	 *
	 * @returns {Number} - The angle
	 */
	fromOrigin(point) {
		return angle.normalize(Math.atan2(point.y, point.x));
	}
};

export default angle;