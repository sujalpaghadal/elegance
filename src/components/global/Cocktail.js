import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import underLine from "../../assets/image/contactUs/underline.png";
import women1 from "../../assets/image/style/women-1.png"
import women2 from "../../assets/image/style/women-2.png"
import women3 from "../../assets/image/style/women-3.png"
import women4 from "../../assets/image/style/women-4.png"

function Cocktail(props) {
    const data = [
        {
            picture:women1,
            proTitle:"GOLD JEWELRY",
            proDetails:"LOREM IPSUM DOLOR SIT AMET",
            button:"VIEW COLLECTONS",
        },
        {
            picture:women2,
            proTitle:"SILVER JEWELRY",
            proDetails:"LOREM IPSUM DOLOR SIT AMET",
            button:"VIEW COLLECTONS",
        },
        {
            picture:women3,
            proTitle:"STEEL JEWELRY",
            proDetails:"LOREM IPSUM DOLOR SIT AMET",
            button:"VIEW COLLECTONS",
        },
        {
            picture:women4,
            proTitle:"FASHION JEWELRY",
            proDetails:"LOREM IPSUM DOLOR SIT AMET",
            button:"VIEW COLLECTONS",
        },
    ]
    return (
        <>
            <div>
                <Box sx={{marginTop:"100px"}}>
                    <Container >
                        <Box sx={{fontSize: "42px", fontWeight: 700, textAlign: "center", color: "gold", letterSpacing: 2}}>WOMEN'S STYLE</Box>
                        <Box sx={{display: "flex", justifyContent: 'center'}}>
                            <Box sx={{width: "250px"}}>
                                <img src={underLine} alt="underLine" style={{objectFit: "contain"}}/>
                            </Box>
                        </Box>
                        <Box className={"desc"} sx={{textAlign: "center", fontSize: "18px", mt: 1}}>
                            Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis
                            natoque penatibus et dis parturient montes, nascetur ridiculus mus. Nulla dui.
                        </Box>


                            <Grid container sx={{ marginTop:"40px", marginBottom:"30px",justifyContent:"center"}} spacing={3}>
                                {
                                    data.map((item) => {
                                        return(
                                            <Grid item   lg={3} md={6} sm={6} xs={12} display={"flex"} justifyContent={"center"}>
                                                <Box sx={{cursor:"pointer","& :hover":{
                                                        backgroundColor:"cream",
                                                        "& .proname":{
                                                            color:"dark",
                                                        },
                                                        "& .prodetail":{
                                                            color:"dark"
                                                        },  "& .back":{
                                                            background:'linear-gradient(#ECD4BA, #98897C)'
                                                        },
                                                        "& .btn":{
                                                            background:"#3D3D3D !important",
                                                            color:"#ECD4BA !important",
                                                        },"& .starimg ":{
                                                            backgroundColor:"transparent",
                                                        }},width:"280px"}}>


                                                    <Box sx={{textAlign:"center",border:"4px solid #ECD4BA",borderTopRightRadius:100,overflow:"hidden" }}>
                                                   <Box sx={{height:"250px"}}>
                                                       <img src={item.picture} alt="" style={{ aspectRatio:"1/1",borderBottom:"4px solid #ECD4BA"}}/>
                                                   </Box>

                                                       <Box className={"back"} >
                                                           <Typography className='proname' sx={{color:"gold", fontWeight:"700", fontSize: {lg:"20px",md:"18px"}, paddingTop:"20px"}}>{item.proTitle}</Typography>
                                                           <Typography className='prodetail desc' sx={{ fontSize:"14px", marginTop:"4px"}}>{item.proDetails}</Typography>
                                                           <Button className={"btn"} type="submit" variant="contained" sx={{
                                                               background: 'linear-gradient(#ECD4BA, #98897C)',
                                                               padding: "8px 10px",
                                                               borderRadius: 5,
                                                               color: "dark",
                                                               my:2,
                                                               fontSize: 12,
                                                               fontWeight: 700,
                                                           }} >
                                                               {item.button}
                                                           </Button>
                                                       </Box>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>

                    </Container>
                </Box>
            </div>
        </>
    );
}

export default Cocktail;