import React, { memo, useCallback, useMemo } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useDialog } from './dialog';
import { CreateUser } from '../features/user/components/CreateUser';

export const Layout = memo(() => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { pathname } = useLocation();
  const { open } = useDialog();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const titleHeader = useMemo(() => {
    let title = '';

    switch (pathname) {
      case '/user':
        title = 'Profile';
        break;
      default:
        title = 'Main';
        break;
    }

    return title;
  }, [pathname]);

  const handleCreateUser = useCallback(
    () =>
      open({
        content: ({ onClose, StyledContent, StyledActions }) => (
          <CreateUser onClose={onClose} StyledContent={StyledContent} StyledActions={StyledActions} />
        ),
      }),
    [open],
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {titleHeader}
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/user">Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleCreateUser}>Create user</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <Outlet />
    </Box>
  );
});
