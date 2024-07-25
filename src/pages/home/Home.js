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
import ShopByCategory from "../../components/home/ShopByCategory";

export default function Home() {
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

  return (
    <>
      <HeroSection herodetails={herodetails} />
      <Welcome />
      <OurHistory />
      {/* <ShopByCategory /> */}
      <Opportunities />
      <WhatWeDo />
    </>
  );
}


