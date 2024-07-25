import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import vector from '../../assets/image/global/Vector.png'
import img1 from '../../assets/image/jewelry/goldenjewelry1.png'
import img2 from '../../assets/image/jewelry/silverjewelry2.png'
import img3 from '../../assets/image/jewelry/steeljewelry3.png'
import img4 from '../../assets/image/jewelry/fashionjewelry4.png'
import stars from '../../assets/image/global/stars.png';



function Section1() {
const data = [
  {
    picture:img1,
    proTitle:"GOLD JEWELRY",
    proDetails:"LOREM IPSUM DOLOR SIT AMET",
    button:"VIEW COLLECTONS",
  },
  {
    picture:img2,
    proTitle:"SILVER JEWELRY",
    proDetails:"LOREM IPSUM DOLOR SIT AMET",
    button:"VIEW COLLECTONS",
  },
  {
    picture:img3,
    proTitle:"STEEL JEWELRY",
    proDetails:"LOREM IPSUM DOLOR SIT AMET",
    button:"VIEW COLLECTONS",
  },
  {
    picture:img4,
    proTitle:"FASHION JEWELRY",
    proDetails:"LOREM IPSUM DOLOR SIT AMET",
    button:"VIEW COLLECTONS",
  },
]

  return (
    <div>
      <Box sx={{marginTop:"100px"}}>
        <Container maxWidth={"lg"}>
          <Grid>
            <Box sx={{textAlign:"center"}}>
                <Typography variant='h5' sx={{color:"gold", fontWeight:"600", marginBottom:"6px"}}>OUR JEWELRY</Typography>
                <Typography><img src={vector} alt="" style={{width:"15%"}} />
                </Typography>
                <Typography sx={{fontSize:"12px", marginTop:"10px"}}>LOREM IPSUM DOLOR SIT AMET CONSE</Typography>
                <Typography  sx={{fontSize:"12px"}}>CTETUR ADIPISICING ELIT</Typography>

            </Box>
            <Grid container item xs={12} sx={{display:"flex", marginTop:"40px", marginBottom:"10px"}} spacing={3}>
              { 
                data.map((item) => {
                  return(
                    <Grid item  lg={3} md={4} sm={6} xs={12}>
                    <Box sx={{"& :hover":{
                      backgroundColor:"cream",
                      "& .proname":{
                        color:"darkGray",
                      },
                      "& .prodetail":{
                        color:"darkGray"
                      },
                      "& .btn":{
                        backgroundColor:"darkGray",
                        color:"cream",
                    },"& .starimg ":{
                      backgroundColor:"transparent",
                    }}}}>
                      <img src={item.picture} alt="" style={{border:"2px solid #ECD4BA", borderRadius:"0px 50% 0 0", aspectRatio:"1/1", width:{md:"20%"}}}/>
                      <Box sx={{textAlign:"center", marginTop:"-8px",border:"2px solid #ECD4BA"}}>
                      <Box className='starimg' sx={{textAlign:"center", transform:"translateY(-114%)","& :hover" :{
                        backgroundColor:"transparent"
                      }}}><img src={stars} alt="" style={{width:"15%"}}/></Box>
                        <Typography className='proname' sx={{color:"gold", fontWeight:"700", fontSize:"16px", paddingTop:"10px"}}>{item.proTitle}</Typography>
                        <Typography className='prodetail' sx={{ fontSize:"12px", marginTop:"6px"}}>{item.proDetails}</Typography>
                        <Button className='btn' sx={{fontSize:"10px", my:"8px", backgroundColor:"cream", color:"darkGray", borderRadius:"20px", padding:"9px 14px"}}>{item.button}</Button>
                      </Box>
                     
                    </Box>
                  </Grid>
                
                  )
                })
              }

            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default Section1
