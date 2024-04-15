import * as React from 'react';
import { Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import StoreIcon from '@mui/icons-material/Store';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import auth from '../helpers/auth.js';

const drawerWidth = 240;
const navItems = [
  { title: 'Home', link: 'home' },
  { title: 'Books', link: 'books' },
  { title: 'About Us', link: 'aboutus' },
  { title: 'Contact Us', link: 'contact' },
  { title: 'My Borrowings', link: 'borrowings' }
];

const adminDropdownItems = [
  { title: "Books", link: 'admin/books' },
  { title: "Authors", link: 'admin/authors' },
  { title: "Users", link: 'admin/users' },
  { title: "Borrowings", link: 'admin/borrowings' }
];

function AdminDrawerAppBar(props) {
  const token = localStorage.getItem('token');
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleAdminMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAdminMenuClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    setIsLoggedIn(auth.isAuthenticated());
  }, [isLoggedIn]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <StoreIcon />
      <Typography variant="h6" sx={{ my: 2 }}>
        Silent Library
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, o) => (
          <ListItem key={o} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link href={`/${item.link}`}>{item.title}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleAdminMenuOpen} sx={{ textAlign: 'center' }}>
            Admin
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      {token ? (
        <Button href="/signout" sx={{ color: 'white', position: 'absolute', bottom: '20px', width: '100%' }}>Sign Out</Button>
      ) : (
        <Button href="/signin" sx={{ color: 'white', position: 'absolute', bottom: '20px', width: '100%' }}>
          SIGN IN/SIGN UP
        </Button>
      )}
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
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
          <StoreIcon />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0, display: { xs: 'none', sm: 'block' } }}
          >
            Silent Library
          </Typography>
          {isLoggedIn && (
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {navItems.map((item, i) => (
                <Button key={`link-${item.link}-${i}`} href={`/${item.link}`} sx={{ color: 'white' }}>
                  {item.title}
                </Button>
              ))}
              <Button aria-controls="admin-menu" aria-haspopup="true" onClick={handleAdminMenuOpen} sx={{ color: 'white', ml: 2 }}>
                Admin
              </Button>
              <Menu
                id="admin-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleAdminMenuClose}
              >
                {adminDropdownItems.map((item, index) => (
                  <MenuItem key={index} onClick={handleAdminMenuClose}>
                    <Link href={`/${item.link}`}>{item.title}</Link>
                  </MenuItem>
                ))}
              </Menu>
              <Divider />
              {token ? 
            (<Button href="/signout" sx={{ color: 'white', position:'absolute', right: '0', }}>Sign Out</Button>) 
            :
            <Button href="/signin" sx={{ color: 'white', position:'absolute', right: '0', }}>
                SIGN IN/SIGN UP
              </Button>
              }
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
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

export default AdminDrawerAppBar;
