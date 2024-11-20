import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "./components/custom/Hero";
function App() {
  useGSAP(() => {
    gsap.from(".h1", { duration: 3, x: -300, ease: "power2.inOut" });
    gsap.from(".h2", { duration: 1, y: -100, ease: "power2.inOut" });
    gsap.from(".h3", { duration: 3, x: -100, ease: "power2.inOut" });
    gsap.from(".button", { duration: 2, y: -100, ease: "power2.inOut" });
    gsap.from(".logo", { duration: 1, y: -100, ease: "power2.inOut" });
    gsap.from("p", { duration: 3, y: -200, ease: "power2.inOut" });
    gsap.from(".pic", { duration: 3, x: -500, ease: "power2.inOut" });
    gsap.from(".get-button", { duration: 3, y: 500, ease: "power2.inOut" });
  });
  return (
    <>
      <Hero />
    </>
  );
}

export default App;
