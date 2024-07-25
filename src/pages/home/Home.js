import { Box } from "@mui/material";
import React from "react";
import Welcome from "../../components/home/Welcome";
import HeroSection from "../../components/global/HeroSection";
import heroImage from "../../assets/image/HeroSection/Group671-min.png";
import recheroImage from "../../assets/image/HeroSection/Group694.png";
import heroImage2 from "../../assets/image/HeroSection/Group57.png";
import recheroImage2 from "../../assets/image/HeroSection/Group695.png";
import heroImage3 from "../../assets/image/HeroSection/Group58.png";
import recheroImage3 from "../../assets/image/HeroSection/Group696.png";
import Opportunities from "../../components/home/Opportunities";
import OurHistory from "../../components/home/OurHistory";
import WhatWeDo from "../../components/home/WhatWeDo";
import ShopByCategory from "../../components/global/ShopByCategory";
import img1 from "../../assets/image/Home/img1.png";
import img2 from "../../assets/image/Home/img2.png";
import img3 from "../../assets/image/Home/img3.png";
import img4 from "../../assets/image/Home/img4.png";
import img5 from "../../assets/image/Home/img5.png";
import img6 from "../../assets/image/Home/img6.png";
import img7 from "../../assets/image/Home/img7.png";
import img8 from "../../assets/image/Home/img8.png";
import img9 from "../../assets/image/Home/img9.png";
import img10 from "../../assets/image/Home/img10.png";
import img11 from "../../assets/image/Home/img11.png";
import img12 from "../../assets/image/Home/img12.png";
import BestOffer from "../../components/home/BestOffer";
import ShopByGender from "../../components/global/ShopByGender";
import woman from "../../assets/image/style/woman.png";
import kid from "../../assets/image/style/kid.png";
import man from "../../assets/image/style/man.png";
import GetInTouch from "../../components/contactUs/GetInTouch";
import TopSellers from "../../components/global/TopSellers";

function Home() {
  const herodetails = [
    {
      image: heroImage,
      resimage: recheroImage,
      subTitle: "HANDCRAFTED ONE OF A KIND CREATION",
      mainTitle: "QUALITY",
      justifyContent: "end",
    },
    {
      image: heroImage2,
      resimage: recheroImage2,
      subTitle: "ARE BEST GIRL'S FRIENDS",
      mainTitle: "DIAMONDS",
      justifyContent: "start",
    },
    {
      image: heroImage3,
      resimage: recheroImage3,
      subTitle: "YOUR PERSONALITY",
      mainTitle: "UNDERLINE",
      justifyContent: "start",
    },
  ];

  const Category = [
    { title: "Mangalsutras", img: img1 },
    { title: "Gold Coins", img: img2 },
    { title: "Earrings", img: img3 },
    { title: "Finger Rings ", img: img4 },
    { title: "Pendants", img: img5 },
    { title: "Chains", img: img6 },
    { title: "Bracelets ", img: img7 },
    { title: "Bangles ", img: img8 },
    { title: "Nose Pins ", img: img9 },
    { title: "Neckwear", img: img10 },
    { title: "Necklace Set", img: img11 },
    { title: "Pendant Sets", img: img12 },
  ];
  const shopByGender = [
    {
      title: "MEN",
      img: man,
    },
    {
      title: "WOMEN",
      img: woman,
    },
    {
      title: "KIDS",
      img: kid,
    },
  ];

  return (
    <>
      <HeroSection herodetails={herodetails} />
      <Welcome />
      <OurHistory />
      <ShopByCategory Category={Category} />
      <BestOffer />
      <ShopByGender shopByGender={shopByGender} />
      <Opportunities />
      <WhatWeDo />
      <TopSellers />
      <GetInTouch value={true} />
    </>
  );
}

export default Home;
