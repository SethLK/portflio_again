import Image from "next/image";
import NavBar from "./components/navbar/nav";
import HeroSection from "./components/hero/hero";
import About from "./components/about/about";
import Experiences from "./components/experience/experience";
import Card from "./components/cards/card";
import CardContainer from "./components/cards/card_container";
import LeftSide from "./components/side_bars/leftSide";
import RightSide from "./components/side_bars/rightSide";
import Works from "./components/works/works";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <>
    <LeftSide />
        <NavBar />
      <div className="ml-14">
      <HeroSection />
      <About />
      <Experiences />
      {/* <CardContainer /> */}
      <Works />
      <Contact />
      </div>
      <RightSide />

    </>
  );
}
