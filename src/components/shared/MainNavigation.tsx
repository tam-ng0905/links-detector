import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

function MainNavigation(): React.ReactElement {
  return (
    <ul>
      <li>
        <NavLink to={`${ROUTES.detector.path}?debug=true`}>Debug</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.debug.path}>Debug</NavLink>
      </li>
    </ul>
  );
}

export default MainNavigation;
