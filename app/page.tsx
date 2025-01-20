import Image from "next/image";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
    </div>
  );
}
