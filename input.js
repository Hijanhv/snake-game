// Current input direction (x=0, y=0 means no movement)
let inputDirection = { x: 0, y: 0 };
// Previous input direction (prevents 180° turns)
let lastInputDirection = { x: 0, y: 0 };

// Keyboard controls
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      // Prevent 180° turn if moving vertically
      // Alt check: lastInputDirection.y === 1 || lastInputDirection.y === -1
      // Specific check: lastInputDirection.y === -1 (only prevent down→up)
      if (lastInputDirection.y !== 0) {
        break;
      }

      // Move UP (y=1)
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowDown": // Prevent 180° turn if moving vertically
      // Alt check: lastInputDirection.y === 1 || lastInputDirection.y === -1
      // Specific check: lastInputDirection.y === 1 (only prevent up→down)
      if (lastInputDirection.y !== 0) {
        break;
      }

      // Move DOWN (y=-1)
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowLeft":
      // Prevent 180-degree turn: If we're currently moving horizontally, ignore this input
      // Alternative check could be: if (lastInputDirection.x === 1 || lastInputDirection.x === -1)
      // Or even more specifically: if (lastInputDirection.x === 1) - to only prevent reversing from right to left
      if (lastInputDirection.x !== 0) {
        break;
      }

      // Set direction to LEFT (negative x)
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      // Prevent 180-degree turn: If we're currently moving horizontally, ignore this input
      // Alternative check could be: if (lastInputDirection.x === 1 || lastInputDirection.x === -1)
      // Or even more specifically: if (lastInputDirection.x === -1) - to only prevent reversing from left to right
      if (lastInputDirection.x !== 0) {
        break;
      }

      // Set direction to RIGHT (positive x)
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

/**
 * Returns the current input direction and updates the last input direction.
 * This function should be called in the game loop to get the current direction.
 *
 * The coordinate system used is:
 * - x: positive = right, negative = left
 * - y: positive = up, negative = down
 *
 * @returns {Object} The current input direction as {x, y}
 */
export function getInputDirection() {
  // Save the current direction as the last direction for the next frame
  lastInputDirection = inputDirection;
  return inputDirection;
}
