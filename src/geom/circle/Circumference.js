/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Returns the circumference of the given Circle.
 *
 * @function Phaser.Geom.Circle.Circumference
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to get the circumference of.
 *
 * @return {number} The circumference of the Circle.
 */
var Circumference = function (circle)
{
    return 2 * (Math.PI * circle.radius);
};

module.exports = Circumference;
