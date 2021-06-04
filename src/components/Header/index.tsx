import React from 'react';

import { Container } from './styles';

import logo from '../../assets/my-hero-logo.png';
import ExitIcon from '../../assets/ic_exit.svg';


export const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <section>
          <img src={logo} alt="usuário" />
        </section>

        <button>
          SAIR
          <img src={ExitIcon} alt="Sair" />
        </button>
      </div>

      <img src={logo} alt="logo" />
    </Container>
  );
}
