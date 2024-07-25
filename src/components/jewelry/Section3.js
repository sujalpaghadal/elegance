
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import vector from '../../assets/image/global/Vector.png'
import EastIcon from '@mui/icons-material/East';
import img1 from '../../assets/image/jewelry/mangalsutra1.jpeg'
import img2 from '../../assets/image/jewelry/goldcoin2.png'
import img3 from '../../assets/image/jewelry/earring3.png'
import img4 from '../../assets/image/jewelry/fingerring4.png'
import img5 from '../../assets/image/jewelry/pendant5.png'
import img6 from '../../assets/image/jewelry/chain6.png'
import img7 from '../../assets/image/jewelry/brc7.png'
import img8 from '../../assets/image/jewelry/bangles8.png'
import img9 from '../../assets/image/jewelry/nosering9.png'
import img10 from '../../assets/image/jewelry/nacklace10.png'
import img11 from '../../assets/image/jewelry/nacklace11.png'
import img12 from '../../assets/image/jewelry/nacklace12.png'

import React from 'react'
import underLine from "../../assets/image/contactUs/underline.png";

function Section3() {
    const proCategory = [
        {
            image:img1,
            proTitle:"MANGALSUTRAS"
        },
        {
            image:img2,
            proTitle:"GOLD COINS"
        },
        {
            image:img3,
            proTitle:"EARRINGS"
        },
        {
            image:img4,
            proTitle:"FINGER RINGS"
        },
        {
            image:img5,
            proTitle:"PENDANTS"
        },
        {
            image:img6,
            proTitle:"CHAINS"
        },
        {
            image:img7,
            proTitle:"BRACELETS"
        },
        {
            image:img8,
            proTitle:"BANGLES"
        },
        {
            image:img9,
            proTitle:"NOSE PINS"
        },
        {
            image:img10,
            proTitle:"NECKWEAR"
        },
        {
            image:img11,
            proTitle:"NECKLACE SET"
        },
        {
            image:img12,
            proTitle:"PENDANT SETS"
        },
    ]
  return (
    <div>
      <Box sx={{marginTop:"80px"}}>

          <Container>
              <Box sx={{fontSize: "42px", fontWeight: 700, textAlign: "center", color: "gold", letterSpacing: 2}}>Shop
                  by gender</Box>
              <Box sx={{display: "flex", justifyContent: 'center'}}>
                  <Box sx={{width: "250px"}}>
                      <img src={underLine} alt="underLine" style={{objectFit: "contain"}}/>
                  </Box>
              </Box>
              <Box className={"desc"} sx={{textAlign: "center", fontSize: "18px", mt: 1}}>
                  First-class jewelry for first-class Men, Women & Children.
              </Box>

              <Grid container py={{md:10,xs:2}} justifyContent={"center"} alignItems={"center"} >
                  {proCategory.map((item) => (
                      <Grid xs={6} sm={4} lg={2} sx={{display:"flex",justifyContent:"center",}}>
                          <Box sx={{mt:{xs:8,md:0},mb:5}}>
                              <Box sx={{
                                  borderTopRightRadius: 80,
                                  overflow: "hidden",
                                  outline: "4px solid #ECD4BA",
                                  position: "relative",
                                  width: {lg:"180px",xs:"180px"},
                                  height: {lg:"180px",xs:"180px"},
                                  textWrap:"nowrap",
                                  cursor:"pointer",
                                  "&:hover":{
                                      ".hover":{
                                          background:"linear-gradient(#ECD4BA, #98897C)",
                                          color:"#3D3D3D",
                                          fontWeight:600
                                      },
                                      ".errow":{
                                          color:"#3D3D3D !important"
                                      }
                                  }
                              }}>
                                  <img src={item.image} alt="man"/>
                                  <Box className="hover" sx={{
                                      position: "absolute",
                                      bottom: 0,
                                      background: "#00000085",
                                      padding: 2,
                                      width: "100%",
                                      display:"flex",
                                      justifyContent:"space-between",
                                      alignItems:"center",
                                  }}>
                                      <Box className={"desc"}>
                                          {item.proTitle}
                                      </Box>
                                      <Box >
                                          <EastIcon sx={{color:"gold"}} className={"errow"}/>
                                      </Box>
                                  </Box>
                              </Box>
                          </Box>
                      </Grid>
                  ))}
              </Grid>
          </Container>
      </Box>
    </div>
  )
}

export default Section3
