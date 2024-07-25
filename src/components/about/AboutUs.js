import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import vector from "../../assets/image/about/Vector.png";
import backImg from "../../assets/image/about/back.png";
import I2 from "../../assets/image/about/i2.png";
import I3 from "../../assets/image/about/i3.png";
import I4 from "../../assets/image/about/i4.png";
import I5 from "../../assets/image/about/i5.png";
import I6 from "../../assets/image/about/i6.png";
import I7 from "../../assets/image/about/i7.png";
import I8 from "../../assets/image/about/i8.png";

function AboutUs() {
  return (
    <>
      <Box>
        <Container>
          <Box sx={{ margin: { lg: "120px 0", md: "100px 0", xs: "50px 0" } }}>
            <Box
              sx={{
                fontSize: { lg: "46px", md: "40px", sm: "35px", xs: "35px" },
                fontWeight: 700,
                color: "#ECD4BA",
                marginBottom: { lg: "20px", md: "15px", xs: "10px" },
              }}
            >
              ABOUT US
            </Box>
            <Box
              sx={{
                height: "13px",
                width: { lg: "227px", md: "200px", xs: "172px" },
              }}
            >
              <img src={vector} height={""} />
            </Box>
            <Box
              sx={{
                fontSize: { lg: "28px", md: "24px", xs: "20px" },
                color: "#fff",
                marginTop: { lg: "25px", md: "20px", xs: "15px" },
                fontWeight: 700,
              }}
            >
              BRAND STORY
            </Box>
            <Box sx={{ marginTop: { lg: "70px", md: "50px", xs: "35px" } }}>
              <Box sx={{ marginBottom: "50px" }}>
                <Box
                  sx={{
                    color: "#ECD4BA",
                    fontSize: { lg: "24px", md: "20px", xs: "18px" },
                    fontWeight: 700,
                    marginBottom: { lg: "15px", xs: "10px" },
                  }}
                >
                  AENEAN AUCTOR URNA
                </Box>
                <Box
                  sx={{
                    color: "#fff",
                    fontFamily: "Tajawal, sans-serif",
                    lineHeight: { md: "30px", xs: "20px" },
                    fontSize: { md: "20px", xs: "16px" },
                  }}
                >
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud eLorem ipsum dolor sit
                  amet conse ctetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </Box>
              </Box>
              <Box sx={{ marginBottom: "50px" }}>
                <Box
                  sx={{
                    color: "#ECD4BA",
                    fontSize: { lg: "24px", md: "20px", xs: "18px" },
                    fontWeight: 700,
                    marginBottom: { lg: "15px", xs: "10px" },
                  }}
                >
                  AENEAN AUCTOR URNA
                </Box>
                <Box
                  sx={{
                    color: "#fff",
                    fontFamily: "Tajawal, sans-serif",
                    lineHeight: { md: "30px", xs: "20px" },
                    fontSize: { md: "20px", xs: "16px" },
                  }}
                >
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud eLorem ipsum dolor sit
                  amet conse ctetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </Box>
              </Box>
              <Box sx={{ marginBottom: "50px" }}>
                <Box
                  sx={{
                    color: "#ECD4BA",
                    fontSize: { lg: "24px", md: "20px", xs: "18px" },
                    fontWeight: 700,
                    marginBottom: { lg: "15px", xs: "10px" },
                  }}
                >
                  AENEAN AUCTOR URNA
                </Box>
                <Box
                  sx={{
                    color: "#fff",
                    fontFamily: "Tajawal, sans-serif",
                    lineHeight: { md: "30px", xs: "20px" },
                    fontSize: { md: "20px", xs: "16px" },
                  }}
                >
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud eLorem ipsum dolor sit
                  amet conse ctetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </Box>
              </Box>
              <Box sx={{ marginBottom: "50px" }}>
                <Box
                  sx={{
                    color: "#ECD4BA",
                    fontSize: { lg: "24px", md: "20px", xs: "18px" },
                    fontWeight: 700,
                    marginBottom: { lg: "15px", xs: "10px" },
                  }}
                >
                  AENEAN AUCTOR URNA
                </Box>
                <Box
                  sx={{
                    color: "#fff",
                    fontFamily: "Tajawal, sans-serif",
                    lineHeight: { md: "30px", xs: "20px" },
                    fontSize: { md: "20px", xs: "16px" },
                  }}
                >
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud eLorem ipsum dolor sit
                  amet conse ctetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </Box>
              </Box>
            </Box>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  backgroundImage: `url(${backImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: {
                    lg: "410px",
                    md: "350px",
                    sm: "300px",
                    xs: "200px",
                  },
                  width: { lg: "70%", md: "80%", sm: "90%", xs: "100%" },
                  transform: `rotate(${355}deg)`,
                  marginTop: { md: "20px", xs: "5px" },
                  position: "absolute",
                  top: "0",
                  left: { lg: "240px", md: "200px", sm: "15px" },
                }}
              ></Box>
            </Box>
            <Grid
              container
              spacing={2}
              columns={12}
              sx={{ color: "#fff", marginTop: { md: "150px", xs: "50px" } }}
            >
              <Grid
                item
                md={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  sx={{
                    height: { lg: "550px", sm: "450px", xs: "250px" },
                    width: { lg: "550px", sm: "450px", xs: "250px" },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: "100%",
                      width: "100%",
                      marginRight: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        height: {
                          lg: "280px",
                          md: "200px",
                          sm: "220px",
                          xs: "150px",
                        },
                        width: {
                          lg: "280px",
                          md: "200px",
                          sm: "220px",
                          xs: "150px",
                        },
                        position: "absolute",
                        top: { lg: "0", md: "0", sm: "0", xs: "0" },
                        right: { lg: "94px", md: "50px", sm: "49px", xs: "0" },
                      }}
                    >
                      <img src={I3} />
                    </Box>
                    <Box
                      sx={{
                        height: {
                          lg: "280px",
                          md: "200px",
                          sm: "220px",
                          xs: "150px",
                        },
                        width: {
                          lg: "280px",
                          md: "200px",
                          sm: "220px",
                          xs: "150px",
                        },
                        position: "absolute",
                        top: { lg: "80px", md: "44px", sm: "40px", xs: "28px" },
                        left: { lg: "0", md: "83px", sm: "51px", xs: "0" },
                      }}
                    >
                      <img src={I2} />
                    </Box>
                    <Box
                      sx={{
                        height: {
                          lg: "280px",
                          md: "200px",
                          sm: "220px",
                          xs: "150px",
                        },
                        width: {
                          lg: "280px",
                          md: "200px",
                          sm: "220px",
                          xs: "150px",
                        },
                        position: "absolute",
                        top: {
                          lg: "259px",
                          md: "160px",
                          sm: "175px",
                          xs: "112px",
                        },
                        left: {
                          lg: "100px",
                          md: "172px",
                          sm: "155px",
                          xs: "70px",
                        },
                      }}
                    >
                      <img src={I4} />
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
                sx={{ textAlign: { md: "end", xs: "center" } }}
              >
                <Box>
                  <Box
                    sx={{
                      fontSize: {
                        lg: "46px",
                        md: "40px",
                        sm: "35px",
                        xs: "35px",
                      },
                      fontWeight: 700,
                      color: "#ECD4BA",
                      marginBottom: { lg: "20px", md: "15px", xs: "10px" },
                    }}
                  >
                    OPPORTUNITIES
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { md: "end", xs: "center" },
                    }}
                  >
                    <Box
                      sx={{
                        height: "13px",
                        width: { lg: "227px", md: "200px", xs: "172px" },
                      }}
                    >
                      <img src={vector} />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      fontSize: {
                        lg: "24px",
                        md: "22px",
                        sm: "20px",
                        xs: "18px",
                      },
                      marginTop: { lg: "20px", md: "15px", xs: "10px" },
                    }}
                  >
                    DOLOR SIT AMET CONSE <br />
                    CTETUR ADIPISICING ELIT
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { md: "end", xs: "center" },
                    }}
                  >
                    <Box
                      sx={{
                        lineHeight: 1.7,
                        marginTop: "30px",
                        fontFamily: "Tajawal,sans-serif",
                        width: "400px",
                        fontSize: { sm: "16px", xs: "14px" },
                      }}
                    >
                      Dolor sit amet conse ctetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate.
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { md: "end", xs: "center" },
                    }}
                  >
                    <Box
                      sx={{
                        lineHeight: 1.7,
                        marginTop: "30px",
                        fontFamily: "Tajawal,sans-serif",
                        width: "400px",
                        fontSize: { sm: "16px", xs: "14px" },
                      }}
                    >
                      Dolor sit amet conse ctetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate.
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      background:
                        "linear-gradient(180deg, #ECD4BA 30%, #98897C 90%)",
                      marginTop: "10px",
                      color: "#444444",
                      display: "inline-block",
                      fontSize: { md: "18px", xs: "12px" },
                      fontWeight: 700,
                      borderRadius: "110px",
                      padding: { md: "10px 40px", xs: "5px  20px" },
                    }}
                  >
                    READ MORE
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box
              sx={{
                marginTop: { xs: "0", sm: "40px", md: "50px" },
                backgroundImage: `url(${I5})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: { xs: "200px", sm: "300px", md: "410px" },
                backgroundPosition: "center",
                width: "100%",
              }}
            ></Box>
            <Box
              sx={{
                textAlign: "center",
                marginTop: { md: "80px", xs: "20px" },
                color: "#fff",
              }}
            >
              <Box
                sx={{
                  fontSize: { lg: "46px", md: "40px", sm: "35px", xs: "35px" },
                  fontWeight: 700,
                  color: "#ECD4BA",
                  marginBottom: { lg: "20px", md: "15px", xs: "10px" },
                }}
              >
                WHO WE ARE
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{
                    height: "13px",
                    width: { lg: "227px", md: "200px", xs: "172px" },
                  }}
                >
                  <img src={vector} />
                </Box>
              </Box>
              <Box
                sx={{
                  fontSize: { lg: "24px", md: "22px", sm: "18px", xs: "15px" },
                  marginTop: { lg: "20px", md: "15px", xs: "10px" },
                }}
              >
                LOREM IPSUM DOLOR SIT AMET CONSE <br />
                CTETUR ADIPISICING ELIT
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{
                    lineHeight: 1.7,
                    marginTop: "30px",
                    fontFamily: "Tajawal,sans-serif",
                    width: "850px",
                    fontSize: { sm: "16px", xs: "14px" },
                  }}
                >
                  Dolor sit amet conse ctetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate.
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                marginTop: { md: "80px", xs: "20px" },
                color: "#fff",
              }}
            >
              <Box
                sx={{
                  fontSize: { lg: "46px", md: "40px", sm: "35px", xs: "35px" },
                  fontWeight: 700,
                  color: "#ECD4BA",
                  marginBottom: { lg: "20px", md: "15px", xs: "10px" },
                }}
              >
                THE BEST OF PROFESSIONALS
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{
                    height: "13px",
                    width: { lg: "227px", md: "200px", xs: "172px" },
                  }}
                >
                  <img src={vector} />
                </Box>
              </Box>
              <Box
                sx={{
                  fontSize: { lg: "24px", md: "22px", sm: "18px", xs: "15px" },
                  marginTop: { lg: "20px", md: "15px", xs: "10px" },
                }}
              >
                LOREM IPSUM DOLOR SIT AMET CONSE <br />
                CTETUR ADIPISICING ELIT
              </Box>
            </Box>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 6 }}
              sx={{ color: "#fff", marginTop: { md: "100px", xs: "50px" } }}
            >
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                sx={{ textAlign: "center" }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box sx={{ height: "360px", width: "100%" }}>
                    <img src={I6} alt="" />
                  </Box>
                </Box>
                <Box sx={{ fontSize: "20px" }}>LOREM IPSUM DOLOR</Box>
                <Box sx={{ fontSize: "14px", marginTop: "20px" }}>
                  Dolor sit amet conse ctetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam.
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                sx={{ textAlign: "center" }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box sx={{ height: "360px", width: "100%" }}>
                    <img src={I7} alt="" />
                  </Box>
                </Box>
                <Box sx={{ fontSize: "20px" }}>LOREM IPSUM DOLOR</Box>
                <Box sx={{ fontSize: "14px", marginTop: "20px" }}>
                  Dolor sit amet conse ctetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam.
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                sx={{ textAlign: "center" }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box sx={{ height: "360px", width: "100%" }}>
                    <img src={I8} alt="" />
                  </Box>
                </Box>
                <Box sx={{ fontSize: "20px" }}>LOREM IPSUM DOLOR</Box>
                <Box sx={{ fontSize: "14px", marginTop: "20px" }}>
                  Dolor sit amet conse ctetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam.
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default AboutUs;
