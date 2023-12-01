import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  styled,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import DrawerItem from './DrawerItem';
import { Link } from 'react-router-dom';
import TranslationButton from '../../components/TranslationButton';
import { useLanguage } from '../../LanguageContext';
import { useLocation } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

//rotas
const itemListDeutsch = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'MDSxNRW',
    to: '/info',
  },
  {
    text: 'Über uns',
    to: '/about',
  },
  {
    text: 'Kontakt',
    to: '/contact',
  },
];
const itemListEnglisch = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'MDSxNRW',
    to: '/info',
  },
  {
    text: 'About',
    to: '/about',
  },
  {
    text: 'Contact',
    to: '/contact',
  },
];

const Navbar = () => {
  const { isDeutsch } = useLanguage();
  const location = useLocation();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 800);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const appBarRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
      setIsMobileView(window.innerWidth <= 800);
    };

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      if (!isMobile && !isMobileView && appBarRef.current) {
        const transformValue = isScrollingDown ? 'translateY(-100%)' : 'translateY(0)';
        appBarRef.current.style.transform = transformValue;
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile, isMobileView, prevScrollPos]);

  return (
    <>
      <AppBar
        component='nav'
        position='sticky'
        ref={appBarRef}
        sx={{
          //background: 'rgba(255, 255, 0, 1)',
          background: '#fff',
          opacity: '0.9',
          transition: 'transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
          maxWidth: '2000px',
          overflow: 'hidden',
          margin: '0 auto',
          top: '0',
          left: '0',
          right: '0',
          zIndex: '1000',
        }}
        elevation={0}
        style={{ boxShadow: '0 0 0 0' }}
      >
        <StyledToolbar>
          {isMobileView ? (
            <img
              src='logos/MDSxNRW_Bildlogo.svg'
              alt='MDSxNRW_Mobile_Logo'
              style={{
                width: '10%',
              }}
            />
          ) : (
            <img
              src='logos/MDSxNRW_Logo.svg'
              alt='MDSxNRW_PC_Logo'
              style={{
                width: '12%',
              }}
            />
          )}
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <DrawerItem />
          </Box>
          <ListMenu>
            {isDeutsch
              ? itemListDeutsch.map((item) => {
                  const { text } = item;
                  return (
                    <ListItem key={text}>
                      <ListItemButton
                        component={Link}
                        to={item.to}
                        sx={{
                          color: '#000',
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                          textDecoration:
                            (text === 'Connector Onboarding' && location.pathname === '/reiter') ||
                            (text === 'Home' && location.pathname === '/') ||
                            (text === 'MDSxNRW' && location.pathname === '/info') ||
                            (text === 'Über uns' && location.pathname === '/about') ||
                            (text === 'Kontakt' && location.pathname === '/contact')
                              ? 'underline'
                              : '',
                        }}
                      >
                        <ListItemText
                          primary={text}
                          sx={
                            text === 'Über uns' || text === 'Connector Onboarding'
                              ? { whiteSpace: 'nowrap' }
                              : {}
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })
              : itemListEnglisch.map((item) => {
                  const { text } = item;
                  return (
                    <ListItem key={text}>
                      <ListItemButton
                        component={Link}
                        to={item.to}
                        sx={{
                          color: '#000',
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                          textDecoration:
                            (text === 'Connector Onboarding' && location.pathname === '/reiter') ||
                            (text === 'Home' && location.pathname === '/') ||
                            (text === 'MDSxNRW' && location.pathname === '/info') ||
                            (text === 'About' && location.pathname === '/about') ||
                            (text === 'Contact' && location.pathname === '/contact')
                              ? 'underline'
                              : '',
                        }}
                      >
                        <ListItemText
                          primary={text}
                          sx={text === 'Connector Onboarding' ? { whiteSpace: 'nowrap' } : {}}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
          </ListMenu>
          {isMobile ? '' : <TranslationButton />}
        </StyledToolbar>
      </AppBar>
      {/* {location.pathname === '/app' || location.pathname === '/reiter' ? <Footer /> : ''} */}
    </>
  );
};

export default Navbar;
