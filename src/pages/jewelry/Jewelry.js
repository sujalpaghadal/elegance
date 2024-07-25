import React from 'react'
import Section1 from '../../components/jewelry/Section1'
import Section3 from '../../components/jewelry/Section3'
import JewelrySection2 from '../../components/jewelry/JewelrySection2'
import Cocktail from "../../components/global/Cocktail";
import men1 from "../../assets/image/jewelry/goldenjewelry1.png";
import men2 from "../../assets/image/jewelry/silverjewelry2.png";
import men3 from "../../assets/image/jewelry/steeljewelry3.png";
import men4 from "../../assets/image/jewelry/fashionjewelry4.png";
import HeroSection from "../../components/global/HeroSection";
import heroImage from "../../assets/image/HeroSection/Group671-min.png";
import recheroImage from "../../assets/image/HeroSection/Group694.png";
import heroImage2 from "../../assets/image/HeroSection/Group57.png";
import recheroImage2 from "../../assets/image/HeroSection/Group695.png";
import heroImage3 from "../../assets/image/HeroSection/Group58.png";
import recheroImage3 from "../../assets/image/HeroSection/Group696.png";

export default function Jewelry() {
  const data1 = [
    {
      picture: men1,
      proTitle: "GOLD JEWELRY",
      proDetails: "LOREM IPSUM DOLOR SIT AMET",
      button: "VIEW COLLECTONS",
    },
    {
      picture: men2,
      proTitle: "SILVER JEWELRY",
      proDetails: "LOREM IPSUM DOLOR SIT AMET",
      button: "VIEW COLLECTONS",
    },
    {
      picture: men3,
      proTitle: "STEEL JEWELRY",
      proDetails: "LOREM IPSUM DOLOR SIT AMET",
      button: "VIEW COLLECTONS",
    },
    {
      picture: men4,
      proTitle: "FASHION JEWELRY",
      proDetails: "LOREM IPSUM DOLOR SIT AMET",
      button: "VIEW COLLECTONS",
    }, {
      picture: men4,
      proTitle: "FASHION JEWELRY",
      proDetails: "LOREM IPSUM DOLOR SIT AMET",
      button: "VIEW COLLECTONS",
    }, {
      picture: men4,
      proTitle: "FASHION JEWELRY",
      proDetails: "LOREM IPSUM DOLOR SIT AMET",
      button: "VIEW COLLECTONS",
    },
  ]
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
    <div>
      <HeroSection herodetails={herodetails}/>
      {/*<Section1/>*/}
      <Cocktail data={data1} title={"OUR JEWELRY"}
                des={"LOREM IPSUM DOLOR SIT AMET CONSE CTETUR ADIPISICING ELIT"}/>
      <JewelrySection2/>
      <Section3/>
    </div>
  )
}


