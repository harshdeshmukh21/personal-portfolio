import Image from "next/image";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import About from "./components/About1";
import AboutMain from "./components/About2";
import About3 from "./components/About3";
import About4 from "./components/About4";
import Works from "./components/Works";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <AboutMain></AboutMain>
      <About3></About3>
      <About4></About4>
      <Works></Works>
    </div>
  );
}
