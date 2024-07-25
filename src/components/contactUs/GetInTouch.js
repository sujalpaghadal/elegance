import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Container, Grid, TextField, Button } from "@mui/material";
import underLine from "../../assets/image/contactUs/underline.png";
import card1 from "../../assets/image/contactUs/Group.png";
import card2 from "../../assets/image/contactUs/vector.png";
import card3 from "../../assets/image/contactUs/Vector-1.png";

const textFieldStyles = (error) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: 5,
        backgroundColor: '#252525',
        color: 'white',
        '&:hover fieldset': {
            borderColor: 'gold',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'gold',
        },
    },
    '& .MuiInputLabel-root': {
        color: 'white',
        '&.Mui-focused': {
            color: 'gold',
        },
    },
    '& .MuiFormHelperText-root': {
        color: error ? 'red' : 'white',
    },
});
const cardData = [
    {
        r1:"+91 00025 00023",
        r2:"+91 80096 65201",
        img:card1
    },{
        r1:"8901 MARMORA ROAD,",
        r2:"GLASGOW, D04 89GR.",
        img:card2
    },{
        r1:"jewelry@gmail.com",
        r2:"inquiry@gamil.com",
        img:card3
    }
]

export default function GetInTouch(props) {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        mobileNumber: Yup.string().required('Mobile Number is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        subject: Yup.string().required('Subject is required'),
        message: Yup.string().required('Message is required'),
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            mobileNumber: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <Box py={15}>
            <Container>
                <Box sx={{fontSize: "42px", fontWeight: 700, textAlign: "center", color: "gold", letterSpacing: 2}}>Get
                    in touch</Box>
                <Box sx={{display: "flex", justifyContent: 'center'}}>
                    <Box sx={{width: "200px"}}>
                        <img src={underLine} alt="underLine" style={{objectFit: "contain"}}/>
                    </Box>
                </Box>
                <Box className={"desc"} sx={{textAlign: "center", fontSize: "18px", mt: 1}}>
                    We are always available to guide you at your convenience.
                </Box>
                <Grid container my={8}>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Box sx={{display: 'flex', gap: 2}}>
                                        <TextField
                                            name="firstName"
                                            label="First Name"
                                            fullWidth
                                            variant="outlined"
                                            value={formik.values.firstName}
                                            onChange={formik.handleChange}
                                            error={formik.touched.firstName && !!formik.errors.firstName}
                                            helperText={formik.touched.firstName && formik.errors.firstName}
                                            sx={textFieldStyles(formik.touched.firstName && formik.errors.firstName)}
                                        />
                                        <TextField
                                            name="lastName"
                                            label="Last Name"
                                            fullWidth
                                            variant="outlined"
                                            value={formik.values.lastName}
                                            onChange={formik.handleChange}
                                            error={formik.touched.lastName && !!formik.errors.lastName}

                                            helperText={formik.touched.lastName && formik.errors.lastName}
                                            sx={textFieldStyles(formik.touched.lastName && formik.errors.lastName)}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="mobileNumber"
                                        label="Mobile Number"
                                        fullWidth
                                        variant="outlined"
                                        value={formik.values.mobileNumber}
                                        onChange={formik.handleChange}
                                        error={formik.touched.mobileNumber && !!formik.errors.mobileNumber}
                                        helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
                                        sx={textFieldStyles(formik.touched.mobileNumber && formik.errors.mobileNumber)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="email"
                                        label="Email"
                                        fullWidth
                                        variant="outlined"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && !!formik.errors.email}

                                        helperText={formik.touched.email && formik.errors.email}
                                        sx={textFieldStyles(formik.touched.email && formik.errors.email)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="subject"
                                        label="Subject"
                                        fullWidth
                                        variant="outlined"
                                        value={formik.values.subject}
                                        onChange={formik.handleChange}
                                        error={formik.touched.subject && !!formik.errors.subject}
                                        helperText={formik.touched.subject && formik.errors.subject}
                                        sx={textFieldStyles(formik.touched.subject && formik.errors.subject)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="message"
                                        label="Message"
                                        fullWidth
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        error={formik.touched.message && !!formik.errors.message}

                                        helperText={formik.touched.message && formik.errors.message}
                                        sx={textFieldStyles(formik.touched.message && formik.errors.message)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" sx={{
                                        background: 'linear-gradient(#ECD4BA, #98897C)',
                                        padding: "15px 0",
                                        borderRadius: 5,
                                        color: "dark",
                                        fontSize: 18,
                                        fontWeight: 700,
                                    }} fullWidth>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6} mt={{xs:5,md:"unset"}}>
                        <Box sx={{borderRadius: 5, overflow: "hidden", marginLeft: {md:3},height:"480px"}}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.485662310964!2d72.88694027587596!3d21.212581681438326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6c653d90c978a55f%3A0x5b466180ab933d3d!2sJBS%20Technology!5e0!3m2!1sen!2sin!4v1721800343623!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{border: 0}}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </Box>
                    </Grid>
                </Grid>


                <Grid container mt={{md:15,xs:0}}>
                    {
                        cardData.map((data) => (
                            <Grid xs={12} sm={6} md={4} mt={{xs:9}}>
                              <Box sx={{ bgcolor:"#111111", position:"relative", padding:5 ,mx:2, borderRadius:5,transition:'.3s' ,cursor:"pointer","&:hover":{
                              transform:'translateY(10px)'}
                              }}>
                                  <Box sx={{display: "flex", justifyContent: "center"}}>
                                      <Box sx={{mt: 8}}>
                                          <Box>{data.r1}</Box>
                                          <Box sx={{mt: 1}}>{data.r2}</Box>
                                      </Box>
                                      <Box sx={{
                                          position: "absolute",
                                          top: "-20%",
                                          left: "50%",
                                          height: "95px",
                                          width: "95px",
                                          background: 'linear-gradient(#ECD4BA, #98897C)',
                                          transform: 'translateX(-50%)',
                                          borderTopRightRadius: 40,
                                          overflow:"hidden",
                                          display:"flex",
                                          justifyContent:"center",alignItems:"center"
                                      }}><img src={data.img} style={{objectFit:"contain",height:"40px",width:"40px"}} alt="card1" /></Box>

                                  </Box>
                              </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    );
}
