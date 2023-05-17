// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import axios from 'axios';
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import { Title } from './Title';

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

// const drawerWidth = 240;
// const navItems = ['Dashboard', 'Review'];

// export default function DrawerAppBar(props: Props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//
  

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       {/* <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             FREE-HOLD
//           </Typography>
//           <Title/>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button key={item} sx={{ color: '#fff' }}>
//                 {item}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar> */}
//       <Box component="nav">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box  component="main" sx={{ width:"50%"}}>
//         <Toolbar />
//         <Box sx={{ height: 400, width: '100%',marginLeft:"40%" }}>
//             <Typography sx={{fontSize:"15px",alignContent:"center",paddingBottom:"5%",paddingLeft:"15%"}}>Reviews</Typography>
//       <DataGrid
//         rows={row}
//         columns={columns}
//         checkboxSelection
//         pageSize={5}
//       />
//     </Box>
//       </Box>
//     </Box>
//   );
// }


// import * as React from 'react';
// import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import axios from 'axios';
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import Button from "@mui/material/Button";
// import SettingsIcon from "@mui/icons-material/Settings";
// import Switch from "@mui/material/Switch";
// import Dashboard from './Dashboard';
// import Review from './Review';
// import Agent from './Agent';

// const drawerWidth = 240;

// const openedMixin = (theme: Theme): CSSObject => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme: Theme): CSSObject => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })<AppBarProps>(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );

// export default function MiniDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const [review,setReview]=React.useState([{}])
//     axios.get('http://localhost:8080/api/v1/users').then(response => {
//       setReview(response.data)
//   //   console.log('User updated:', response.data);
//     })
//     const row=review.map((data:any,index:any)=>{
//       return {id:index,
//           name:data.name,
//           email:data.email,
//           review:data.review,
//           rating:data.rating
//       }
  
//     }).filter((data: any) => data.review !== undefined)
    

//    const[isActive,setIsActive]=React.useState(false)

//     const columns: GridColDef[] = [
//       { field: 'id', headerName: 'ID', width: 90 },
//       {
//         field: 'name',
//         headerName: 'Name',
//         width: 150,
//         editable: true,
//       },
//       {
//         field: 'email',
//         headerName: 'Email',
//         width: 150,
//         editable: true,
//       },
//       {
//         field: 'review',
//         headerName: 'Review',
//         width: 110,
//         editable: true,
//       },
//       {
//           field: 'rating',
//           headerName: 'Rating',
//           type: 'number',
//           width: 110,
//           editable: true,
//         },
//         {
//           field: 'isActive',
//           headerName: 'Approve Comments',
//           type: 'boolean',
//           width: 180,
//           editable: true,
//           renderCell: (params: any): any => {
//             return (
//               <>
//                 <Button>
//                   <SettingsIcon />
//                 </Button>
//                 <Switch name="activate"  onChange={() => {
//                   Approve({ name: params.row.name,email:params.row.email,review:params.row.review,rating:params.row.rating })
//                   isActive ? (setIsActive(false)) :(setIsActive(true))
//                   }} />
//                 {/* {changingState && stateChangeId === params.row.id && <CircularProgress size={30} />} */}
    
//               </>
//             );
//           },
//         },

//     ];


    // async function Approve(params:any) {
    //   const {name,email,review,rating}=params
    //   if(isActive)
    //   {
    //     const reviewObj:any={
    //       email:email,
    //       review:review,
    //       rating:rating,
    //       isActive:true
    //     }
    //     console.log(reviewObj)
    //     axios.patch('http://localhost:8080/api/v1/users/review',reviewObj).then(response => {
    //       console.log('Review uproved:', response.data);
    //     })
    //     .catch(error => {
    //       console.error('Error updating user:', error);
    //     });
    

//       }
//       else
//       {
//         const reviewObj:any={
//           email:email,
//           review:review,
//           rating:rating,
//           isActive:false
//         }
//         console.log(reviewObj)
//         axios.patch('http://localhost:8080/api/v1/users/review',reviewObj).then(response => {
//           console.log('Review uproved:', response.data);
//         })
//         .catch(error => {
//           console.error('Error updating user:', error);
//         });
    

//       }
      
      
      
      
//     }
//     const [menudata,setMenudata]=React.useState("home")

   
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: 'none' }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Free-Hold
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
 
//             <ListItem  disablePadding sx={{ display: 'block' }} onChange={()=>{setMenudata("home")}}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? 'initial' : 'center',
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : 'auto',
//                     justifyContent: 'center',
//                   }}
//                 >
//                    <MailIcon />
//                 </ListItemIcon>
//                 <ListItemText primary='Dashboard'  />
//               </ListItemButton>
//             </ListItem>
//             <ListItem  disablePadding sx={{ display: 'block' }}  onChange={()=>{setMenudata("Review")}}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? 'initial' : 'center',
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : 'auto',
//                     justifyContent: 'center',
//                   }}
//                 >
//                    <MailIcon />
//                 </ListItemIcon>
//                 <ListItemText primary=' Review'  />
//               </ListItemButton>
//             </ListItem>
//             <ListItem  disablePadding sx={{ display: 'block' }}  onChange={()=>{setMenudata("Agent")}} >
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? 'initial' : 'center',
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : 'auto',
//                     justifyContent: 'center',
//                   }}
//                 >
//                    <MailIcon />
//                 </ListItemIcon>
//                 <ListItemText primary='Agent'  />
//               </ListItemButton>
//             </ListItem>
    
//         </List>
//         <Divider />
       
//       </Drawer>
     
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         {/* <DrawerHeader />
//         <Box  component="main" sx={{ width:"55%"}}>
//         <Toolbar />
//          <Box sx={{ height: 250, width: '100%',marginLeft:"40%" }}>
//              <Typography sx={{fontSize:"15px",alignContent:"center",paddingBottom:"10%",paddingLeft:"40%"}}>Reviews</Typography>
//        <DataGrid
//         rows={row}
//         columns={columns}
  
//         pageSize={5}
//       />
//     </Box>
//       </Box> */}

//       {menudata =="home" &&<Dashboard/> }
//       {menudata =="Review" &&<Review/> }
//       {menudata =="Agent" &&<Agent/> }
       
//       </Box>
//     </Box>
//   );
// }

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Dashboard from './Dashboard';
import Review from './Review';
import Agent from './Agent';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [menu,setMenu]=React.useState("Home")

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            FREE HOLD
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <MailIcon />
                </ListItemIcon>
                <ListItemText onClick={()=>{setMenu("Home")}} primary={"Home"} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <MailIcon />
                </ListItemIcon>
                <ListItemText onClick={()=>{setMenu("Agent")}} primary={"Agent"} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <MailIcon />
                </ListItemIcon>
                <ListItemText  onClick={()=>{setMenu("Review")}} primary={"Review"} />
              </ListItemButton>
            </ListItem>
    
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Box>
        {menu =="Home" &&<Dashboard/> }
        {menu =="Agent" &&<Agent/> }
        {menu =="Review" &&<Review/> }

        </Box>
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </Main>
    </Box>
  );
}