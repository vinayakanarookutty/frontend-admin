import React from 'react'
import axios from 'axios';
import Switch from "@mui/material/Switch";
import { Box,Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
export default function Review() {

  const [review,setReview]=React.useState([{}])
      axios.get('http://localhost:8080/api/v1/users').then(response => {
        setReview(response.data)
      console.log('Reviews', response.data);
      })
      const row=review.map((data:any,index:any)=>{
        return {id:index,
            name:data.name,
            email:data.email,
            review:data.review,
            rating:data.rating,
            isActive:data.isActive
        }
    
      }).filter((data: any) => data.review !== undefined)
      
  
     const[isActive,setIsActive]=React.useState()
  
      const columns: GridColDef[] = [
        // { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'name',
          headerName: 'Name',
          width: 150,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 150,
          editable: true,
        },
        {
          field: 'review',
          headerName: 'Review',
          width: 110,
          editable: true,
        },
        {
            field: 'rating',
            headerName: 'Rating',
            type: 'number',
            width: 110,
            editable: true,
          },
          {
            field: 'isActive',
            headerName: 'Approve Comments',
            type: 'boolean',
            width: 180,
            editable: true,
            renderCell: (params: any): any => {
              return (
                <>
                  
                  <Switch checked={params.row.isActive}  onChange={() => {
                    setIsActive(params.row.isActive)
                    Approve({ name: params.row.name,email:params.row.email,review:params.row.review,rating:params.row.rating })
                    isActive ? (setIsActive(false)):(setIsActive(true))
                    }} />
                  {/* {changingState && stateChangeId === params.row.id && <CircularProgress size={30} />} */}
      
                </>
              );
            },
          },
  
      ];
  
  
      async function Approve(params:any) {
        const {name,email,review,rating}=params
        if(isActive)
        {
          const reviewObj:any={
            email:email,
            review:review,
            rating:rating,
            isActive:true
          }
          console.log(reviewObj)
          axios.patch('http://localhost:8080/api/v1/users/review',reviewObj).then(response => {
            console.log('Review uproved:', response.data);
          })
          .catch(error => {
            console.error('Error updating user:', error);
          });
      
  
        }
        else
        {
          const reviewObj:any={
            email:email,
            review:review,
            rating:rating,
            isActive:false
          }
          console.log(reviewObj)
          axios.patch('http://localhost:8080/api/v1/users/review',reviewObj).then(response => {
            console.log('Review uproved:', response.data);
          })
          .catch(error => {
            console.error('Error updating user:', error);
          });
      
  
        }
        
        
      }

  return (
    // <div>Review</div>
<<<<<<< HEAD
    <Box overflow="hidden" sx={{ height: 250, width: '100%',marginLeft:"14%",paddingRight:"14%" }}>
                <Typography fontWeight={600}  sx={{fontSize:"30px",alignContent:"center",paddingBottom:"10%",paddingLeft:"50%"}}>Reviews</Typography>
=======
    <Box sx={{display:"flex",flexDirection:"column"}}>
        <Typography sx={{fontSize:"15px",paddingBottom:"10%",paddingLeft:"40%"}}>Reviews</Typography>
       <Box sx={{ height: 350, width: 850,marginLeft:"20%",marginBottom:"20%" }}>
              
>>>>>>> 881fdfef950f123763e86cf39f965d04311b6a87
        <DataGrid
            rows={row}
         columns={columns}
      
          pageSize={5}
        />
        </Box>

    </Box>
   
  )
}
