import React from "react"
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './style.scss'

const settings = ['Perfil', 'Conta', 'Configurações', 'Sair'];

export default function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
  <nav className="nav-container">
    <a className="nav-link" href="/Index">Rems - Reminder Alarms</a>

    <div className="nav-items">
        {/* <div className="nav-item">
          <a className="nav-link" href="/Index">Home</a>
        </div> */}
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir Configurações">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://www.github.com/brunofilho1.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '50px', ml: '50px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        {/* <div className="nav-item">
          <a className="nav-link" href="/Form">Razor Pages Form</a>
        </div>
        <div className="nav-item">
          <a className="nav-link" href="/ReactNotes">React Notes</a>
        </div> */}
    </div>
  </nav>
  )
}