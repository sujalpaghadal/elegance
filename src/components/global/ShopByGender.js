import React from "react";
import { Box, Container, Grid } from "@mui/material";
import underLine from "../../assets/image/contactUs/underline.png";
import EastIcon from "@mui/icons-material/East";

function ShopByGender({ shopByGender }) {
  return (
    <>
      <Box>
        <Container>
          <Box
            sx={{
              fontSize: "42px",
              fontWeight: 700,
              textAlign: "center",
              color: "gold",
              letterSpacing: 2,
            }}
          >
            Shop by gender
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "250px" }}>
              <img
                src={underLine}
                alt="underLine"
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
          <Box
            className={"desc"}
            sx={{ textAlign: "center", fontSize: "18px", mt: 1 }}
          >
            First-class jewelry for first-class Men, Women & Children.
          </Box>

          <Grid
            container
            py={{ md: 10, xs: 2 }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {shopByGender.map((item) => (
              <Grid
                xs={12}
                sm={6}
                md={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box sx={{ mt: { xs: 8, md: 0 } }}>
                  <Box
                    sx={{
                      borderTopRightRadius: 120,
                      overflow: "hidden",
                      outline: "4px solid #ECD4BA",
                      position: "relative",
                      width: { lg: "300px", xs: "250px" },
                      height: { lg: "300px", xs: "250px" },
                      cursor: "pointer",
                      "&:hover": {
                        ".hover": {
                          background: "linear-gradient(#ECD4BA, #98897C)",
                          color: "#3D3D3D",
                          fontWeight: 600,
                        },
                        ".errow": {
                          color: "#3D3D3D !important",
                        },
                      },
                    }}
                  >
                    <img src={item.img} alt="man" />
                    <Box
                      className="hover"
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        background: "#00000085",
                        padding: 2,
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>{item.title}</Box>
                      <Box>
                        <EastIcon sx={{ color: "gold" }} className={"errow"} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ShopByGender;
