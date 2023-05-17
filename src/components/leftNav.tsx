import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskIcon from '@mui/icons-material/Task';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import { Divider } from "@mui/material";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/taskList" style={{ textDecoration: "none" }}>
        Tasks
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/taskCategory" style={{ textDecoration: "none" }}>
        Task Category
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link to="/createQuestion" style={{ textDecoration: "none" }}>
        Invoices
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Workflows" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="/clientTable" style={{ textDecoration: "none" }}>
        Client
      </Link>
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <Box>

    <ListSubheader component="div" inset>
      Confiurations
    </ListSubheader>
    <ListItemButton>
   
      <Accordion sx={{ width: "100%" }} elevation={0} square>
        <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
        <TaskIcon sx = {{marginRight:"20px"}} />

          Task
        </AccordionSummary>
        <AccordionDetails>
          <Link to="/taskStatusList" className="link">
            {" "}
            <p onClick={(e) => e.stopPropagation()}>Status</p>
          </Link>
          <Divider />
          <p onClick={(e) => e.stopPropagation()}>Category</p>
        </AccordionDetails>
      </Accordion>
    </ListItemButton>
    <ListItemButton>
      <Accordion sx={{ width: "100%" }} elevation={0} square>
        <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
          <PersonIcon sx = {{marginRight:"20px"}} />
          User
        </AccordionSummary>
        <AccordionDetails>
          <Link to="/userRoles" className="link">
            <p onClick={(e) => e.stopPropagation()}>Roles</p>
          </Link>
          <Divider />
          <Link to="/userDesignationList" className="link">
            {" "}
            <p onClick={(e) => e.stopPropagation()}>Designations</p>
          </Link>
        </AccordionDetails>
      </Accordion>
    </ListItemButton>
    </Box>
  </React.Fragment>
);