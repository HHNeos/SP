import React, { Children } from 'react';

export default function THero({ children, thero}) {
  return(
      <header className={thero}>{children}</header>
  );
}

THero.defaultProps ={
    thero:"defaultHero"
};