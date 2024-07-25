import React from "react";
import ShopByGender from "../../components/global/ShopByGender";
import Cocktail from "../../components/global/Cocktail";
import HeroSection from "../../components/global/HeroSection";
import heroImage from "../../assets/image/HeroSection/Group671-min.png";
import recheroImage from "../../assets/image/HeroSection/Group694.png";
import heroImage2 from "../../assets/image/HeroSection/Group57.png";
import recheroImage2 from "../../assets/image/HeroSection/Group695.png";
import heroImage3 from "../../assets/image/HeroSection/Group58.png";
import recheroImage3 from "../../assets/image/HeroSection/Group696.png";
import women1 from "../../assets/image/style/women-1.png"
import women2 from "../../assets/image/style/women-2.png"
import women3 from "../../assets/image/style/women-3.png"
import women4 from "../../assets/image/style/women-4.png"
import men1 from "../../assets/image/style/man-1.png"
import men2 from "../../assets/image/style/man-2.png"
import men3 from "../../assets/image/style/man-3.png"
import men4 from "../../assets/image/style/man-4.png"
import coc1 from "../../assets/image/style/coctail-1.png"
import coc2 from "../../assets/image/style/coctail-2.png"
import coc3 from "../../assets/image/style/coctail-3.png"
import coc4 from "../../assets/image/style/coctail-4.png"

export default function Style(props) {
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
    const data = [
        {
            picture: women1,
            proTitle: "GOLD JEWELRY",
            proDetails: "LOREM IPSUM DOLOR SIT AMET",
            button: "VIEW COLLECTONS",
        },
        {
            picture: women2,
            proTitle: "SILVER JEWELRY",
            proDetails: "LOREM IPSUM DOLOR SIT AMET",
            button: "VIEW COLLECTONS",
        },
        {
            picture: women3,
            proTitle: "STEEL JEWELRY",
            proDetails: "LOREM IPSUM DOLOR SIT AMET",
            button: "VIEW COLLECTONS",
        },
        {
            picture: women4,
            proTitle: "FASHION JEWELRY",
            proDetails: "LOREM IPSUM DOLOR SIT AMET",
            button: "VIEW COLLECTONS",
        }, {
            picture: women4,
            proTitle: "FASHION JEWELRY",
            proDetails: "LOREM IPSUM DOLOR SIT AMET",
            button: "VIEW COLLECTONS",
        }, {
            picture: women4,
            proTitle: "FASHION JEWELRY",
            proDetails: "LOREM IPSUM DOLOR SIT AMET",
            button: "VIEW COLLECTONS",
        },
    ]
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
    const data2 = [
        {
            picture: coc1,
            proTitle: "GOLD JEWELRY",
            proDetails: "LOREM IPSUM DOLOR SIT AMET",
            button: "VIEW COLLECTONS",
        },
        {
            picture: coc2,
            proTitle: "SILVER JEWELRY",
            proDetails: "LOREM IPSUM DOLOR SIT AMET",
            button: "VIEW COLLECTONS",
        },
        {
            picture: coc3,
            proTitle: "STEEL JEWELRY",
            proDetails: "LOREM IPSUM DOLOR SIT AMET",
            button: "VIEW COLLECTONS",
        },
        {
            picture: coc4,
            proTitle: "FASHION JEWELRY",
            proDetails: "LOREM IPSUM DOLOR SIT AMET",
            button: "VIEW COLLECTONS",
        }, {
            picture: coc4,
            proTitle: "FASHION JEWELRY",
            proDetails: "LOREM IPSUM DOLOR SIT AMET",
            button: "VIEW COLLECTONS",
        }, {
            picture: coc4,
            proTitle: "FASHION JEWELRY",
            proDetails: "LOREM IPSUM DOLOR SIT AMET",
            button: "VIEW COLLECTONS",
        },
    ]
    return (
        <>
            <HeroSection herodetails={herodetails}/>
            <ShopByGender/>
            <Cocktail data={data} title={"WOMEN'S STYLE"}
                      des={"Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et dis parturient montes, nascetur ridiculus mus. Nulla dui."}/>

            <Cocktail data={data1} title={"MEN'S STYLE"}
                      des={"Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et dis parturient montes, nascetur ridiculus mus. Nulla dui."}/>
            <Cocktail data={data2} title={"COCKTAIL STYLE"}
                      des={"Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et dis parturient montes, nascetur ridiculus mus. Nulla dui."}/>
        </>
    );
}

