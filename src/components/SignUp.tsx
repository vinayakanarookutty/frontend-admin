import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { Title } from "./Title";
import ocean from '../assets/ocean.jpg'


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const styles = {
    input: {
      color: 'white', // set the color to red
    },
  };
  

  return (
  <Box sx={{backgroundImage:`url(${ocean})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",maxHeight:"100%",paddingBottom:"10%"}}>
      <Title/>
    <Grid container  sx={{justifyContent:"center",alignItems:"center",   display: "flex",
         
            flexDirection: "inherit",
            marginTop:"8%",
          marginLeft:"35%",
            backgroundColor:"rgba(255, 255, 255, 0.5)",
            height:"50vh",
            width:"50vh",
            marginBottom:"10%",
            borderRadius:"30px"}} style={{ height: "50%",width:"30%" }}>
     
      <Grid item xs={8} sm={3} md={8}>
        {/* <Paper elevation={2} style={{ padding: "50px" }}> */}
          <Typography style={{fontWeight:"500",marginTop:"15%",paddingBottom:"5%"}} variant="h5" align="center" gutterBottom>
           ADMIN LOGIN
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <TextField
                size="small"
                  label="Username"
                  variant="outlined"
                  InputProps={{ style: styles.input }}
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                size="small"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              
            {/* </Grid>
            <Grid container direction="column" sx={{paddingTop:"5%"}} spacing={3}>
              <Grid item>
                <TextField
                sx={{color:"white"}}
                size="small"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                size="small"
                  label="Phone no"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                size="small"
                  label="Address"
                  multiline
                  rows={3}
                  variant="outlined"
                  fullWidth
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid> */}
              
              <Grid sx={{marginBottom:"20%"}} item>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        {/* </Paper> */}
      </Grid>
    </Grid>
    </Box>
  );
};

export default SignUp;