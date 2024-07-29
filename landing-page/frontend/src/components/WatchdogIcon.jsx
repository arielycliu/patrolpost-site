import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import logo from '../assets/logo.png';

export default function WatchdogIcon() {
  return (
    <SvgIcon sx={{ height: 70, width: 70 }}>
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <image href={logo} width="70" height="70" />
      </svg>
    </SvgIcon>
  );
}
