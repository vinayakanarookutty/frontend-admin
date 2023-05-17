import React from 'react'
import aa from "../assets/aa.jpg"
import ab from "../assets/ab.jpg"
import bb from "../assets/bb.jpg"
import cc from "../assets/cc.jpg"
import dd from "../assets/dd.jpg"
import ee from "../assets/ee.jpg"
import ff from "../assets/ff.jpg"
import gg from "../assets/gg.jpg"
import hh from "../assets/hh.jpg"
import pp from "../assets/pp.jpg"
import { Box } from '@mui/material'
import axios from 'axios';
import PropertyCard from './PropertyCard'
import { Typography } from '@mui/material'

function Dashboard() {

      const [properties,setProperties]=React.useState([])
    axios.get('http://localhost:8080/api/v1/properties').then(response => {
      setProperties(response.data)
    console.log('Properties', response.data);
    })
   
    

  return (
  
<Box>
<Typography fontSize={25} fontWeight={700} color="#111420">
     Dashboard
     </Typography>
     <Box
                mt="20px"
                minWidth="100%"
                height="380"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                   overflow:"hidden",
                   backgroundColor:"white"
                }}
            >
     <Box 
     id="slider"
     width="1269px"
     height="380px"
     borderRadius="0 8px 8px 0"
     sx={{backgroundColor:"#FCFCFC",animationDirection:"left",overflowy:"hidden"}}
     >
      
      
     <figure>

      <img src={aa}
      
     
      
      style={{ width:"633px", paddingLeft:"4px",paddingTop:"3px"}}
      
      alt="adam image"
      />
       <img src={ab}
      style={{ width:"633px", paddingLeft:"4px",paddingTop:"3px"}}
        alt="adam image"
      />
       <img src={bb}
      style={{ width:"634px", paddingLeft:"4px",paddingTop:"3px"}}
        alt="adam image"
      />
       <img src={cc}
      style={{ width:"635px", paddingLeft:"4px",paddingTop:"3px"}}
        alt="adam image"
      />
       <img src={dd}
      style={{ width:"634px", paddingLeft:"4px",paddingTop:"3px"}}
        alt="adam image"
      />
       <img src={ee}
      style={{ width:"635px", paddingLeft:"4px",paddingTop:"3px"}}
        alt="adam image"
      />
       <img src={hh}
      style={{ width:"634px", paddingLeft:"4px",paddingTop:"3px"}}
        alt="adam image"
      />
       
      <img src={ff}
      style={{ width:"634px", paddingLeft:"4px",paddingTop:"3px"}}
        alt="adam image"
      />
       <img src={gg}
      style={{ width:"635px", paddingLeft:"4px",paddingTop:"3px"}}
        alt="adam image"
        
      />
      <img src={pp}
      style={{ width:"633px", paddingLeft:"4px",paddingTop:"3px"}}
        alt="adam image"
      />
      
    
      
      </figure>
      
      
     </Box>
     </Box>
{/* <div>Dashboard</div> */}
<Box
     flex={1}
     borderRadius="15px"
     padding="20px"
     bgcolor="#fcfcfc"
     display="flex"
     flexDirection="column"
     minWidth="100%"
     mt="25px"
     >
      
      <Typography fontSize="18px"ml={1.3} fontWeight={600} color="#11142d">
        Latest Properties
        

      </Typography>
      <Box mt={2} ml={0} sx={{display:"flex",flexWrap:"wrap",gap:6}}>
        {properties?.map((property:any)=>(

          <PropertyCard
          key={property._id}
          id={property._id}
          title={property.title}
          location={property.location}
          price={property.price}
          photo={property.photo}
          />

        ))}


      </Box>

     </Box>

</Box>
   


  )
}

export default Dashboard