import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import { Title } from "./Title";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  const data={
    email:email,
    password:password
  }
  axios.post('http://localhost:8080/api/v1/admin',data).then(response => {
    localStorage.setItem("admin-name", JSON.stringify(response))
//   console.log('User updated:', response.data);
      navigate("/admin");
  })

  };

  return (
  
    <Grid container  sx={{justifyContent:"center",alignItems:"center",backgroundColor:"white"}} style={{ height: "70vh", }}>
       <Title/>
      <Grid item xs={5} sm={6} md={4}>
        <Box
        sx={{backgroundColor:"grey"}}
        >
          <Typography style={{fontWeight:"700"}} variant="h4" align="center" gutterBottom>
         Admin-Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <TextField
                size="small"
                  label="Username"
                  variant="outlined"
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
              <Grid item>
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
          </Box>
      </Grid>
    </Grid>
  );
};

export default Login;