import MenuIcon from '@mui/icons-material/Menu';
import StoreIcon from '@mui/icons-material/Store';
import { Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const drawerWidth = 240;
const navItems = ['Home', 'Books'];




function DrawerAppBar(props) {
  const token = localStorage.getItem('token');
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <StoreIcon></StoreIcon>
      <Typography variant="h6" sx={{ my: 2 }}>
        Silent Library
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link href={`/${item}`}>{item}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {token ? 
            (<Button href="/signout" sx={{ color: 'white', position:'absolute', right: '0', }}>Sign Out</Button>) 
            :
            <Button href="/signin" sx={{ color: 'white', position:'absolute', right: '0', }}>
                SIGN IN/SIGN UP
              </Button>
              }
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <StoreIcon></StoreIcon>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0, display: { xs: 'none', sm: 'block' } }}
          >
            Silent Library
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>

            {navItems.map((item) => (
              <Button key={item} href={`/${item}`} sx={{ color: 'white' }}>
                {item}
              </Button>
            ))}
            {token ? 
            (<Button href="/signout" sx={{ color: 'white', position:'absolute', right: '0', }}>Sign Out</Button>) 
            :
            <Button href="/signin" sx={{ color: 'white', position:'absolute', right: '0', }}>
                SIGN IN/SIGN UP
              </Button>
              }
           

            <Divider />

          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

    </Box>
  );
}


export default DrawerAppBar;
