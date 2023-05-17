import React from 'react'
import axios from 'axios';
import AgentCard from './AgentCard';
import {Typography,Box,Stack, display} from '@pankod/refine-mui'
function Agent() {
    const [agent,setAgent]=React.useState([])
    axios.get('http://localhost:8080/api/v1/users').then(response => {
      setAgent(response.data)
    console.log('Agent', response.data);
    })
   
  return (
     <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142d">
                Agents List
            </Typography>

            <Box
                mt="20px"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    backgroundColor: "#fcfcfc",
                }}
            >
                {agent.map((agent:any) => (
                    <AgentCard
                        key={agent._id}
                        id={agent._id}
                        name={agent.name}
                        email={agent.email}
                        avatar={agent.avatar}
                        noOfProperties={agent.allProperties.length}
                    />
                ))}
            </Box>
        </Box>
  )
}

export default Agent