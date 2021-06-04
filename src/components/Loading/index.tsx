import React from 'react';
import Lottie from 'react-lottie';
import spinner from '../../assets/loading.json';

import { Container } from './styles';

export function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spinner
  }

  return (
    <Container>
      <Lottie 
        options={defaultOptions}
        height={130}
        width={130}
      />
    </Container>
  )
}