import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import underLine from "../../assets/image/global/Vector.png";
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

function ShopByCategory() {
  return (
    <>
      <Box>
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
              Shop by gender
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
          <Box>
            <Grid container>
              <Grid item md={2}>
                <Box>
                  <Typography
                    component={"img"}
                    src={img1}
                    alt="imgag1"
                    sx={{
                      borderRadius: {
                        md: "0px 100px 0px 0px",
                        xs: "0px 100px 0px 0px",
                      },
                      border: "4px solid #ECD4BA",
                    }}
                  />
                  <Box></Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ShopByCategory;
