import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import patrolPostLogo from '../assets/patrolpost-logo.png';

export default function PatrolPostLogo() {
  return (
    <SvgIcon sx={{ height: 25, width: 105 }}>
      <svg width="100" height="25" viewBox="0 0 100 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <image href={patrolPostLogo} width="100" height="25" />
      </svg>
    </SvgIcon>
  );
}
