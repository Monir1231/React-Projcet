import { Card, Slider } from "@heroui/react";
import "./App.css";
import Company from "./Component/Company";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import MyCard from "./Component/Card";
import Trian from "./Component/Trian";
import Carousel from "./Component/Slider";
import MyCarousel from "./Component/MyCarousel";
import Improvement from "./Improvement";
import Beta from "./Component/Beta";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Company />
      <MyCard />
      <Trian />
      <Carousel />
      {/* <MyCarousel/> */}
      <Improvement />
      <Beta />
      <Footer />
    </>
  );
}

export default App;
