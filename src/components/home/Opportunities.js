import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import underLine from "../../assets/image/global/Vector.png";
import wel1 from "../../assets/image/Home/Rectangle87.png";
import wel2 from "../../assets/image/Home/d71f074f8311a28a9053913a9553f093.png";
import design from "../../assets/image/global/wec1.png";

function Opportunities() {
  return (
    <>
      <Box>
        <Container maxWidth="lg">
          <Box my={{ md: 10, xs: 1 }}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                py={{ md: 0, xs: 5 }}
                display={"flex"}
                justifyContent={{ md: "block", xs: "center" }}
                px={{ md: 0, xs: 2 }}
              >
                <Box>
                  <Box
                    sx={{
                      fontSize: { md: "42px", sm: "36px", xs: "30px" },
                      fontWeight: 700,
                      color: "gold",
                      letterSpacing: 2,
                    }}
                  >
                    OPPORTUNITIES
                  </Box>
                  <Box my={1}>
                    <Box sx={{ width: "190px" }}>
                      <img
                        src={underLine}
                        alt="underLine"
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Box sx={{ maxWidth: "400px" }}>
                      <Typography sx={{ fontSize: "24px", fontWeight: "400" }}>
                        LOREM IPSUM DOLOR SIT AMET CONSE CTETUR ADIPISICING ELIT
                      </Typography>
                    </Box>
                    <Box sx={{ maxWidth: "370px" }}>
                      <Typography
                        sx={{ fontSize: "14px", fontWeight: "400" }}
                        my={2}
                      >
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris n aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate. Aenean
                        nonummy hendrerit mauris.
                      </Typography>
                      {/* <Typography
                        sx={{ fontSize: "14px", fontWeight: "400" }}
                        my={2}
                      >
                        Sit amet conse ctetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate
                      </Typography> */}
                    </Box>
                  </Box>
                  <Box maxWidth={"170px"} my={2}>
                    <Box width={"100%"}>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          background:
                            "linear-gradient(to bottom, #ECD4BA, #98897C)",
                          padding: "13px 0",
                          borderRadius: 50,
                          color: "darkGray",
                          fontSize: 20,
                          fontWeight: 700,
                          transition: "background 0.3s ease",
                          "&:hover": {
                            background:
                              "linear-gradient(to bottom, #98897C, #ECD4BA)",
                            color: "white",
                          },
                        }}
                        fullWidth
                      >
                        Read More
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} py={{ md: 0, xs: 5 }}>
                <Box pb={18}>
                  <Box
                    position={"relative"}
                    height={{ md: "301px", sm: "271px", xs: "200px" }}
                    width={"100%"}
                  >
                    <Box
                      position={"absolute"}
                      height={"100%"}
                      sx={{
                        top: { md: "0%", sm: "0%", xs: "0%" },
                        left: { md: "10%", sm: "20%", xs: "10%" },
                        transform: "",
                      }}
                    >
                      <Typography
                        component={"img"}
                        src={wel2}
                        alt="welcome1"
                        sx={{
                          borderRadius: {
                            md: "0px 180px 0px 0px",
                            xs: "0px 100px 0px 0px",
                          },
                          border: "4px solid #ECD4BA",
                        }}
                      />
                    </Box>
                    <Box
                      position={"absolute"}
                      height={"100%"}
                      sx={{
                        top: { md: "26%", sm: "26%", xs: "66%" },
                        right: { md: "9%", sm: "20%", xs: "10%" },
                      }}
                    >
                      <Typography
                        component={"img"}
                        src={wel1}
                        alt="welcome1"
                        sx={{
                          borderRadius: {
                            md: "0px 180px 0px 0px",
                            xs: "0px 100px 0px 0px",
                          },
                          border: "4px solid #ECD4BA",
                        }}
                      />
                    </Box>
                    <Box
                      display={{ md: "block", xs: "none" }}
                      position={"absolute"}
                      height={"100%"}
                      sx={{
                        top: "40%",
                        zIndex: "-1",
                        right: "9%",
                        transform: "rotate(360deg)",
                      }}
                    >
                      <img src={design} alt="welcome1" />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Opportunities;
