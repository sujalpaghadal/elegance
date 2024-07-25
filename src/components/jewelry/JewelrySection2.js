import { Box, Container, Typography, Grid } from "@mui/material";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import FavoriteIcon from "@mui/icons-material/Favorite";
import vector from "../../assets/image/global/Vector.png";
import neckless1 from "../../assets/image/jewelry/neckless1.png";
import neckless2 from "../../assets/image/jewelry/neckless2.png";
import neckless3 from "../../assets/image/jewelry/neckless3.png";
import ring1 from "../../assets/image/jewelry/ring1.png";
import bracelate1 from "../../assets/image/jewelry/braclet1.png";
import bracelate2 from "../../assets/image/jewelry/braclet2.png";
import ring2 from "../../assets/image/jewelry/ring2.png";
import earring1 from "../../assets/image/jewelry/earring1.png";
export default function JewelrySection2() {
  const sellers = [
    {
      sellimg1: neckless1,
      Tittle1: "LOREM ISPUM",
      Tittle2: "OREM ISPUM DOLLER SIT AMET",
      like: (
        <FavoriteIcon
          className="like"
          sx={{ color: "white", textAlign: "center", paddingTop: "5px" }}
        />
      ),
      righticon: (
        <EastIcon
          className="righticon"
          sx={{ display: "flex", fontSize: "14px", color: "#ECD4BA" }}
        />
      ),
    },
    {
      sellimg1: neckless2,
      Tittle1: "LOREM ISPUM",
      Tittle2: "OREM ISPUM DOLLER SIT AMET",
      like: (
        <FavoriteIcon
          className="like"
          sx={{ color: "white", textAlign: "center", paddingTop: "5px" }}
        />
      ),
      righticon: (
        <EastIcon
          className="righticon"
          sx={{ display: "flex", fontSize: "14px", color: "#ECD4BA" }}
        />
      ),
    },
    {
      sellimg1: neckless3,
      Tittle1: "LOREM ISPUM",
      Tittle2: "OREM ISPUM DOLLER SIT AMET",
      like: (
        <FavoriteIcon
          className="like"
          sx={{ color: "white", textAlign: "center", paddingTop: "5px" }}
        />
      ),
      righticon: (
        <EastIcon
          className="righticon"
          sx={{ display: "flex", fontSize: "14px", color: "#ECD4BA" }}
        />
      ),
    },
    {
      sellimg1: ring1,
      Tittle1: "LOREM ISPUM",
      Tittle2: "OREM ISPUM DOLLER SIT AMET",
      like: (
        <FavoriteIcon
          className="like"
          sx={{ color: "white", textAlign: "center", paddingTop: "5px" }}
        />
      ),
      righticon: (
        <EastIcon
          className="righticon"
          sx={{ display: "flex", fontSize: "14px", color: "#ECD4BA" }}
        />
      ),
    },
    {
      sellimg1: bracelate1,
      Tittle1: "LOREM ISPUM",
      Tittle2: "OREM ISPUM DOLLER SIT AMET",
      like: (
        <FavoriteIcon
          className="like"
          sx={{ color: "white", textAlign: "center", paddingTop: "5px" }}
        />
      ),
      righticon: (
        <EastIcon
          className="righticon"
          sx={{ display: "flex", fontSize: "14px", color: "#ECD4BA" }}
        />
      ),
    },
    {
      sellimg1: bracelate2,
      Tittle1: "LOREM ISPUM",
      Tittle2: "OREM ISPUM DOLLER SIT AMET",
      like: (
        <FavoriteIcon
          className="like"
          sx={{ color: "white", textAlign: "center", paddingTop: "5px" }}
        />
      ),
      righticon: (
        <EastIcon
          className="righticon"
          sx={{ display: "flex", fontSize: "14px", color: "#ECD4BA" }}
        />
      ),
    },
    {
      sellimg1: ring2,
      Tittle1: "LOREM ISPUM",
      Tittle2: "OREM ISPUM DOLLER SIT AMET",
      like: (
        <FavoriteIcon
          className="like"
          sx={{ color: "white", textAlign: "center", paddingTop: "5px" }}
        />
      ),
      righticon: (
        <EastIcon
          className="righticon"
          sx={{ display: "flex", fontSize: "14px", color: "#ECD4BA" }}
        />
      ),
    },
    {
      sellimg1: earring1,
      Tittle1: "LOREM ISPUM",
      Tittle2: "OREM ISPUM DOLLER SIT AMET",
      like: (
        <FavoriteIcon
          className="like"
          sx={{ color: "white", textAlign: "center", paddingTop: "5px" }}
        />
      ),
      righticon: (
        <EastIcon
          className="righticon"
          sx={{ display: "flex", fontSize: "14px", color: "#ECD4BA" }}
        />
      ),
    },
  ];

  return (
    <div>
      <Box sx={{ marginTop: "100px" }}>
        <Container maxWidth={"lg"}>
          <Grid>
            <Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "600", color: "gold" }}
                >
                  TOP SELLERS
                </Typography>
                <Typography>
                  <img
                    src={vector}
                    alt=""
                    style={{ width: "15%"}}
                  />
                </Typography>
                <Typography sx={{ fontSize: "12px", paddingTop: "10px" }}>
                  LOVE THE MOST TO BOUGHT5 THE MOST
                </Typography>
              </Box>

              <Box>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  {sellers.map((item) => {
                    return (
                      <Grid item xs={12} lg={3} md={4} sm={6}>
                        <Box
                          sx={{
                            position: "relative",
                            marginTop: "25px",
                            "&:hover": {
                              "& .imgback": {
                                backgroundColor: "#e9d2b8",
                              },

                              "& .detail1": {
                                color: "#000",
                              },
                              "& .detail2": {
                                color: "#000",
                              },
                              "& .detail3": {
                                color: "#000",
                              },
                              "& .like": {
                                color: "#000",
                              },
                              "& .righticon": {
                                color: "#000",
                              },
                            },
                          }}
                        >
                          <img
                            src={item.sellimg1}
                            alt=""
                            style={{
                              borderRadius: "0px 50% 0px 0px ",
                              aspectRatio:"1/1",
                              border: "solid 2px #ECD4BA",
                            }}
                          />
                          <Typography
                            className="imgback"
                            sx={{
                              padding: "10px 10px",
                              border: "solid 2px #ECD4BA ",
                              marginTop: "-7px",
                            }}
                          >
                            <Typography
                              className="detail1"
                              sx={{
                                color: "#ECD4BA",
                                fontSize: "12px",
                                fontWeight: "600",
                              }}
                            >
                              {item.Tittle1}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              {" "}
                              <Typography
                                className="detail2"
                                sx={{ fontSize: "10px", color: "white" }}
                              >
                                {item.Tittle2}
                              </Typography>
                              <Typography className="detail3">
                                {" "}
                                {item.righticon}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                position: "absolute",
                                top: "2%",
                                left: "3%",
                              }}
                            >
                              <Typography
                                sx={{
                                  height: "30px",
                                  width: "30px",
                                  borderRadius: "0px 0px 20px 0px",
                                  backgroundColor: "#ECD4BA",
                                }}
                              >
                                {item.like}
                              </Typography>
                            </Box>
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

