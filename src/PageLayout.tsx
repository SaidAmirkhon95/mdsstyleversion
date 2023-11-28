import React, { ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Impressum from 'pages/InputForm/Impressum';
import PrivacyText from 'pages/InputForm/PrivacyText';
import Kontakt from 'pages/InputForm/Kontakt';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{ backgroundColor: 'black' }}
      maxWidth='2000px'
      overflow='hidden'
      marginBottom='0px'
      height='150px'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Typography variant='body2' color='white' align='center' fontSize='20px'>
        {'Copyright © '}
        <Link color='inherit' target='_blank' href='https://www.isst.fraunhofer.de/'>
          Fraunhofer ISST
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'} <br />
        <Typography
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '20px',
            gap: '8rem',
            fontSize: '18px',
            '@media (max-width: 600px)': {
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
            },
          }}
        >
          <Impressum />
          <PrivacyText />
          <Kontakt />
        </Typography>
      </Typography>
    </Grid>
  );
};

export default PageLayout;
