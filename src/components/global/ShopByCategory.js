import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import underLine from "../../assets/image/global/Vector.png";
import EastIcon from "@mui/icons-material/East";

function ShopByCategory({ Category }) {
  return (
    <>
      <Box mb={15}>
        <Container maxWidth="lg">
          <Box textAlign={"center"}>
            <Box
              sx={{
                fontSize: "42px",
                fontWeight: 700,
                textAlign: "center",
                color: "gold",
                letterSpacing: 2,
              }}
            >
              Shop By Category{" "}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }} my={2.5}>
              <Box sx={{ width: "250px" }}>
                <img
                  src={underLine}
                  alt="underLine"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Box> 
            <Box display={"flex"} justifyContent={"center"}>
              <Box sx={{ maxWidth: "450px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "400" }}>
                  Browse through your favorite categories. We've got them all!
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box my={{ md: 7, xs: 3.5 }}>
            <Grid
              container
              spacing={5}
              display={"flex"}
              justifyContent={"center"}
            >
              {Category?.map((e, index) => (
                <Grid item md={2} key={index}>
                  <Box>
                    <Box
                      sx={{
                        borderTopRightRadius: 80,
                        overflow: "hidden",
                        height: "186px",
                        outline: "4px solid #ECD4BA",
                        position: "relative",
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
                      <img src={e.img} alt="man" />
                      <Box
                        className="hover"
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          background: "#00000085",
                          padding: 1,
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <Typography sx={{ fontSize: "18px" }}>
                            {e.title}
                          </Typography>
                        </Box>
                        <Box>
                          <EastIcon
                            sx={{ color: "gold" }}
                            className={"errow"}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ShopByCategory;
