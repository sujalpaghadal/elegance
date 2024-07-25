import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import { Autoplay } from "swiper/modules";
import star from "../../assets/image/HeroSection/Group46.png";

function HeroSection({ herodetails }) {
  return (
    <Box className="herosection">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {herodetails?.map((detail, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: "relative",
                backgroundImage: {
                  xs: `url(${detail.resimage})`,
                  md: `url(${detail.image})`,
                },
                backgroundSize: "cover",
                height: "100vh",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: detail.justifyContent,
                alignItems: { md: "center", xs: "end" },
              }}
              py={{ xs: 8, md: 0 }}
            >
              <Container>
                <Box
                  display={"flex"}
                  justifyContent={{ md: detail.justifyContent, xs: "center" }}
                >
                  <Box
                    sx={{
                      maxWidth: { xs: "100%", sm: "330px" },
                      p: { xs: 2, sm: 0 },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "40px", sm: "50px", md: "70px" },
                        color: "gold",
                        fontWeight: "600",
                        textAlign: { xs: "center", sm: "right" },
                      }}
                    >
                      {detail.mainTitle}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "20px", sm: "25px", md: "31px" },
                        fontWeight: "400",
                        textAlign: { xs: "center", sm: "right" },
                      }}
                    >
                      {detail.subTitle}
                    </Typography>
                  </Box>
                </Box>
              </Container>
              <Box
                position={"absolute"}
                bottom={"-2.5%"}
                left={"50%"}
                sx={{
                  transform: "translateX(-50%)",
                }}
              >
                <Box sx={{ width: "88px" }}>
                  <img src={star} alt="star" />
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default HeroSection;
