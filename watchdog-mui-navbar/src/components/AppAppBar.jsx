import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from '../ToggleColorMode';
import logo from '../assets/logo.png';
import { styled } from '@mui/material/styles';
import './AppAppBar.css'

const logoStyle = {
    width: '35px',
    height: 'auto',
    cursor: 'pointer',
    marginLeft: '20px',
    marginRight: '10px'
};

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    '&:hover': {
      borderRadius: '99px',
    },
  }));

function AppAppBar({ mode, toggleColorMode }) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            });
            setOpen(false);
        }
    };

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            flexShrink: 0,
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                ml: '-18px',
                                px: 0
                            }}
                        >
                            <img
                                src={logo}
                                style={logoStyle}
                                alt="logo of watchdog"
                            />
                            <Typography variant="navlogo" color="text.primary">
                                WatchDog
                            </Typography>
                            <Box sx={(theme) => ({
                                display: { xs: 'none', md: 'flex' },
                                marginLeft: '2rem',
                                paddingX: '1rem',
                                borderRadius: '999px',
                                bgcolor:
                                    theme.palette.mode === 'light'
                                        ? 'rgba(255, 255, 255, 0.4)'
                                        : 'rgba(0, 0, 0, 0.4)',
                                backdropFilter: 'blur(24px)',
                                maxHeight: 40,
                                border: '1px solid',
                                borderColor: 'divider',
                                boxShadow:
                                    theme.palette.mode === 'light'
                                        ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                        : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                            })}>
                                <CustomMenuItem
                                    onClick={() => scrollToSection('hardware')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="nav" color="text.primary">
                                        Hardware
                                    </Typography>
                                </CustomMenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection('software')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="nav" color="text.primary">
                                        Software
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection('usecases')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="nav" color="text.primary">
                                        Use Cases
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection('features')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="nav" color="text.primary">
                                        Features
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection('contact')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="nav" color="text.primary">
                                        Contact
                                    </Typography>
                                </MenuItem>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 0.5,
                                alignItems: 'center',
                            }}
                        >
                            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} 
                                sx={{
                                    borderRadius: '9px'
                                }}
                            />
                            <Button
                                color="primary"
                                variant="contained"
                                size="big"
                                component="a"
                                href=""
                                target="_blank"
                                sx={{
                                    borderRadius: '99px',
                                    fontFamily: 'Readex Pro Variable',
                                    textTransform: 'none'
                                }}
                            >
                                Book a demo
                            </Button>
                        </Box>
                        <Box sx={{ display: { sm: '', md: 'none' } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: '30px', p: '4px' }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: '60dvw',
                                        p: 2,
                                        backgroundColor: 'background.paper',
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'end',
                                            flexGrow: 1,
                                        }}
                                    >
                                        <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                                    </Box>
                                    <MenuItem onClick={() => scrollToSection('hardware')}>
                                        Hardware
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('software')}>
                                        Software
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('usecases')}>
                                        Use Cases
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('features')}>
                                        Features
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('contact')}>
                                        Contact
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            component="a"
                                            href="/material-ui/getting-started/templates/sign-up/"
                                            target="_blank"
                                            sx={{ width: '100%' }}
                                        >
                                            Sign up
                                        </Button>
                                    </MenuItem>
                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="outlined"
                                            component="a"
                                            href="/material-ui/getting-started/templates/sign-in/"
                                            target="_blank"
                                            sx={{ width: '100%' }}
                                        >
                                            Sign in
                                        </Button>
                                    </MenuItem>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

AppAppBar.propTypes = {
    mode: PropTypes.oneOf(['dark', 'light']).isRequired,
    toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;