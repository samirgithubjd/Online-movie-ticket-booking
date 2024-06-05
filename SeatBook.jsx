import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "./seatbook.css";

const Seat = ({ id, selected, onSelect }) => {
  const handleClick = () => {
    onSelect(id);
  };

  return (
    <div className={`seat ${selected ? "selected" : ""}`} onClick={handleClick}>
      {id}
    </div>
  );
};

export const SeatBook = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  return (
    <>
      <div className="sBooking">
        <div className="center">
          <img src="https://images.thequint.com/thequint/2019-04/6c891ab4-d8dd-490a-a66c-dc544cc65d97/avengers_infinity_war_and_endgame_poster_w7_1600x900.jpg?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0" />
        </div>
        <br />

        <div className="seats">
          {[...Array(40).keys()].map((index) => (
            <Seat
              key={index}
              id={index + 1}
              selected={selectedSeats.includes(index + 1)}
              onSelect={handleSeatSelect}
            />
          ))}
        </div>
        <div className="text-center mt-3">
          <p>Selected Seats: {selectedSeats.join(", ")}</p>
          <Link to="Payment1">
            <button type="button" class="btn btn-outline-success">
              proceed
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
