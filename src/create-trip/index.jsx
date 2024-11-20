import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../components/styles/Header.css";
import { Input } from "@/components/ui/input";
function CreateTrip() {
  useGSAP(() => {
    gsap.from(".create", { duration: 3, x: -300, ease: "power2.inOut" });
    gsap.from(".box", { duration: 1, y: -100, ease: "power2.inOut" });
    gsap.from(".box1", { duration: 3, x: -100, ease: "power2.inOut" });
    gsap.from("create-trip", { duration: 2, y: -100, ease: "power2.inOut" });
    gsap.from(".logo", { duration: 1, y: -100, ease: "power2.inOut" });
    gsap.from("p", { duration: 3, y: -200, ease: "power2.inOut" });
    gsap.from(".button", { duration: 2, y: -100, ease: "power2.inOut" });
  });
  return (
    <div className="create">
      <div>
        <h2>Create a New Trip</h2>
        <p>
          Just provide your basic information about the trip you wish to create
          and we will help you get started!
        </p>
      </div>
      <div>
        <h3 className="box">What is your destination of choice ?</h3>
        <Input className="create-trip" type="text" placeholder="Destination" />
      </div>
      <div>
        <h3 className="box1">When do you want to start your trip?</h3>
        <Input className="create-trip1" type="date" />
      </div>
      <div>
        <h3 className="box2">What is your preferred budget for your trip?</h3>
        <Input className="create-trip2" type="number" placeholder="USD $" />
      </div>
      <div></div>
    </div>
  );
}

export default CreateTrip;
