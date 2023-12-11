'use client'
//1. import area
import { ThemeProvider } from "@emotion/react";
import { Avatar, Box, Button, Checkbox, Container, Grid, Link, TextField, Typography, createTheme } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

//2. defination area
const tm = createTheme();

function Home() {
  //2.1 hooks area
  const [ message, setMessage ] = useState("");

  //2.2 defination area
  const handleSubmit = () => {
    setMessage("Form Suucessfully Submited");
    console.log(message);
  }

  // 2.3 return Statements
  return (
    <ThemeProvider theme={tm}>
      <Container component="main" maxWidth="sm" sx={{ bgcolor:"#a7ffeb", p: 3, border:"2px solid",     borderColor:"#000000", borderRadius: 3 }}>
        <Box sx={{ mt:2, display:"flex", flexDirection:"column", alignItems:"center" }}>
          <Avatar sx={{ bgcolor:"#d500f9" }}><LockOutlinedIcon /> </Avatar>
          <Typography component="h1" variant="h5" marginTop="1" color="#d500f9" >Sign Up Form</Typography>
        </Box>

        <Box component="form" onSubmit={ handleSubmit } >

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="First Name" autoComplete="First Name" name="fname" id="fname"  margin="normal" autoFocus required />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField margin="normal" fullWidth name="lname" autoComplete="Last Name" label="Last Name" id="fname" required />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField name="email" label="Enter Email Address" id="email" autoComplete="email" margin="normal" fullWidth required />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField label="Enter Password" type="password" id="password" name="password" autoComplete="password" margin="normal" fullWidth required/>
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel control={ <Checkbox value="allowExtraEmails" color="secondary" /> }
                 label="I want to receive inspiration, marketing promotions and updates via email."
               />
            </Grid>

            <Button type="submit" variant="contained" fullWidth sx={{ mt:3, bgcolor:"#d500f9" }} >
               Sign Up
            </Button>
             
            <Grid container justifyContent="center" sx={{ mt:2, mb:6 }} >
              <Grid item >
                <Link href="/" variant="body" underline="hover" sx={{ color:"#d500f9" }}> Already have an account? Sign in </Link>
              </Grid>
            </Grid>

          </Grid>
        </Box>
        <Typography component="span" display="flex" flexDirection="row" justifyContent="center">
          {'Copyright ©'} 
          <Link href="/" color="#d500f9" variant="span" sx={{ mr:1, ml:1 }} > Your Website </Link>
           2023.
        </Typography>
      </Container>
    </ThemeProvider>
  )
}

//3. export area 
export default Home;