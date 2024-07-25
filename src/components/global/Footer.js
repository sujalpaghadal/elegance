import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Link,
  TextField,
  Button,
  Grid,
  Container,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import { useFormik } from "formik";
import * as Yup from "yup";

function Footer() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form values:", values);
      resetForm(); // Reset the form after submission
    },
  });

  const textFieldStyles = (error) => ({
    "& .MuiOutlinedInput-root": {
      borderRadius: 50,
      backgroundColor: "#252525",
      color: "white",
      "&:hover fieldset": {
        borderColor: "gold",
      },
      "&.Mui-focused fieldset": {
        borderColor: "gold",
      },
    },
    "& .MuiInputLabel-root": {
      color: "white",
      "&.Mui-focused": {
        color: "gold",
      },
    },
    "& .MuiFormHelperText-root": {
      color: error ? "red" : "white",
    },
  });

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        padding: { md: "100px 0px 0px 0px", xs: "60px 0px 0px 0px" },
        color: "#fff",
        borderTop: "2px solid #ECD4BA",
      }}
    >
      <Container maxWidth="xl" sx={{ padding: "0px 40px" }}>
        <Grid
          container
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Grid item sm={12} md={4} textAlign={{ xs: "center", md: "left" }}>
            <Box>
              <Typography
                mb={2}
                variant="h6"
                sx={{ fontSize: "30px", fontWeight: "500", color: "gold" }}
              >
                Jewelry
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "12px", maxWidth: { md: "350px", xs: "none" } }}
              >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris n aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate. Aenean nonummy hendrerit mauris.
              </Typography>
              <Box sx={{ mt: 2.5 }}>
                <IconButton
                  sx={{
                    color: "gold",
                    p: 0,
                    marginRight: "5px",
                    fontSize: "22px",
                  }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  sx={{
                    color: "gold",
                    p: 0,
                    fontSize: "22px",
                    marginRight: "5px",
                  }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  sx={{
                    color: "gold",
                    p: 0,
                    fontSize: "22px",
                    marginRight: "5px",
                  }}
                >
                  <XIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "gold",
                    p: 0,
                    fontSize: "22px",
                    marginRight: "5px",
                  }}
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  sx={{
                    color: "gold",
                    p: 0,
                    fontSize: "22px",
                    marginRight: "5px",
                  }}
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            md={4}
            mt={{ md: 0, xs: 4 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ fontSize: "22px", fontWeight: "600", color: "gold" }}
              >
                Contact Us
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent={{ xs: "center", md: "start" }}
                mt={{ md: 2, xs: 0.5 }}
              >
                <Email
                  sx={{
                    mr: 1,
                    color: "gold",
                    p: 0,
                    fontSize: "22px",
                    marginRight: "5px",
                  }}
                />
                <Link
                  href="mailto:jewelry@gmail.com"
                  color="inherit"
                  sx={{ fontSize: "14px" }}
                >
                  jewelry@gmail.com
                </Link>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent={{ xs: "center", md: "start" }}
                mt={{ md: 2, xs: 0.5 }}
              >
                <Phone
                  sx={{
                    mr: 1,
                    color: "gold",
                    p: 0,
                    fontSize: "22px",
                    marginRight: "5px",
                  }}
                />
                <Typography sx={{ fontSize: "14px" }}>
                  +91 26523 00020 / +91 00031 00012
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mt={{ md: 2, xs: 0.5 }}>
                <LocationOn
                  sx={{
                    mr: 1,
                    color: "gold",
                    p: 0,
                    fontSize: "22px",
                    marginRight: "5px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "13px",
                    maxWidth: { md: "300px", xs: "none" },
                  }}
                >
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            md={4}
            mt={{ md: 0, xs: 4 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: "22px", fontWeight: "600", color: "gold" }}
            >
              SIGN UP FOR SHOP UPDATE
            </Typography>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{
                mt: { md: 2, xs: 0 },
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", sm: "flex-start" },
                maxWidth: { xs: "none", md: "300px" },
                p: { md: "0px 0px", sm: "0px 30px ", xs: "0px 0px" },
              }}
            >
              <Box width={"100%"} my={2}>
                <TextField
                  name="email"
                  label="Your Email..."
                  fullWidth
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && !!formik.errors.email}
                  helperText={formik.touched.email && formik.errors.email}
                  sx={textFieldStyles(
                    formik.touched.email && formik.errors.email
                  )}
                />
              </Box>
              <Box width={"100%"}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    background: "linear-gradient(to bottom, #ECD4BA, #98897C)",
                    padding: "9px 0",
                    borderRadius: 50,
                    color: "white",
                    fontSize: 18,
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
                  SUBSCRIBE
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" py={7}>
          <Typography variant="body2" sx={{ fontSize: "14px" }}>
            Copyright © 2024 Jewelry Pvt. Ltd. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
