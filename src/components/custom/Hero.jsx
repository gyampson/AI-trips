import React from "react";
import "../styles/Header.css";
import "/src/index.css";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div>
      <h1 className="h1">
        Discover Your Next Adventure with AI Personalized Itineraries at Your
        Finger Tips
      </h1>
      <p>
        AI-driven itineraries will help you plan your adventure with confidence
        and personalized recommendations. Whether you are exploring a new city,
        discovering a new culture, or simply enjoying a day off, AI will provide
        you with the perfect itinerary tailored to your preferences and budget.
      </p>
      <Link to="/create-trip" className="link">
        <Button className="get-button">GET STARTED</Button>
      </Link>
      <div>
        <img className="pic" src="./assets/trip.webp" />
      </div>
    </div>
  );
}

export default Hero;
