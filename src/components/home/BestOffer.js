import { Box, Container, Grid } from "@mui/material";
import React from "react";
import offer from "../../assets/image/Home/offer.png";
import left from "../../assets/image/global/Asset1@3x2.png";

function BestOffer() {
  return (
    <>
      <Box position={"relative"}>
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={9}>
            <Box my={{ md: 5 }}>
              <Box>
                <img src={offer} alt={offer} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          position={"absolute"}
          top={"-36%"}
          width={"722px"}
          zIndex={"-1"}
          left={"0%"}
          sx={{ width: { lg: "722px", md: "522px" } }}
        >
          <img src={left} alt={left} />
        </Box>
        <Box
          position={"absolute"}
          top={{ lg: "30%", md: "24%" }}
          zIndex={"-1"}
          sx={{
            transform: "rotate(180deg)",
            width: { lg: "722px", md: "522px" },
          }}
          right={"0%"}
        >
          <img src={left} alt={left} />
        </Box>
      </Box>
    </>
  );
}

export default BestOffer;
