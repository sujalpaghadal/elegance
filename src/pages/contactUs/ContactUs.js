import React from 'react';
import GetInTouch from "../../components/contactUs/GetInTouch";
import HeroSection from "../../components/global/HeroSection";
import heroImage from "../../assets/image/HeroSection/Group671-min.png";
import recheroImage from "../../assets/image/HeroSection/Group694.png";
import heroImage2 from "../../assets/image/HeroSection/Group57.png";
import recheroImage2 from "../../assets/image/HeroSection/Group695.png";
import heroImage3 from "../../assets/image/HeroSection/Group58.png";
import recheroImage3 from "../../assets/image/HeroSection/Group696.png";

function ContactUs(props) {
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
            <GetInTouch />
        </>
    );
}

export default ContactUs;