import React from "react";
import Button from '@mui/material/Button';
import Free from "../assets/Free.png";
import { Link } from "../../node_modules/react-router-dom/dist/index";
export const Title: React.FC = () => {
 

  return (
  
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
       
         
     
          <img src={Free} alt="Refine" width="140px" />
   
      </Link>
    </Button>
  );
};
