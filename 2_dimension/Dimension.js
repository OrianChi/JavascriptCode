const theaterSeats = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"],
];
function updateStatus(seatElement, status) {
  // Remove previous status classes
  seatElement.classList.remove("available", "booked");

  // Add the new status class
  seatElement.classList.add(status);
}

function bookSeat(row, col) {
  const seatElement = document.querySelectorAll(".seat")[row * 3 + col];
  if (theaterSeats[row][col] === "O") {
    theaterSeats[row][col] = "X";
    updateStatus(seatElement, "booked");
    alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is booked`);
  } else {
    alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is already taken`);
  }
}
