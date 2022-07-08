/**
 * Find the area of a rectangle given the four corners.
 * The base of the rectangle is assumed to be horizontal.
 * Note: The corners can be given in any order.
 * @param {{ x: number, y: number }[]} points - an array of 4 points, e.g. { x: 3, y: 5 }
 * @return {number} the area
*/

function rectangleAreaFromCoords (points) {
  [A,B,C,D] = points
  return (Math.max(A.x, B.x, C.x, D.x) - Math.min(A.x, B.x, C.x, D.x))*(Math.max(A.y, B.y, C.y, D.y) - Math.min(A.y, B.y, C.y, D.y))

}

module.exports = rectangleAreaFromCoords
