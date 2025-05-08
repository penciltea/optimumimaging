import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar, Toolbar, Box, Link, Stack, IconButton, Drawer, List, ListItem, ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '/images/optimum-horiz.png';

const navLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' }
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="static" color="secondary" sx={{
        py: 1,
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.primary.main
      }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link
              component={RouterLink}
              to="/"
              sx={{ display: 'inline-block', maxWidth: { xs: '10rem', sm: '12rem', md: '15rem' } }}
            >
              <img
                src={logo}
                alt="Optimum Imaging MRI"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </Link>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box sx={{ width: 250, p: 2 }}>
                  <IconButton onClick={() => setDrawerOpen(false)} sx={{ mb: 2 }}>
                    <CloseIcon />
                  </IconButton>
                  <List>
                    {navLinks.map((link) => (
                      <ListItem
                        key={link.to}
                        component={RouterLink}
                        to={link.to}
                        onClick={() => setDrawerOpen(false)}
                        sx={{
                            '&:visited': {
                              color: 'inherit',
                            }
                        }}
                      >
                        <ListItemText primary={link.label} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Stack direction="row" spacing={3}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  component={RouterLink}
                  to={link.to}
                  color="inherit"
                  variant="h6"
                  underline="hover"
                  sx={{
                    '&:visited': {
                      color: 'inherit',
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
