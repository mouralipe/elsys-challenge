import React from 'react';

import { Container } from './styles';

interface CharacterData {
  info: {
    images: string[];
    name: string;
    status: string;
    affiliation: string;
    occupation: string;
    quirk: string;
  }
}

export function Card({ info }: CharacterData) {
  return (
    <Container>
      <div>
        <img src={info.images[0] || info.images[1]} alt={info.name}/>
      </div>

      <section>
        <h1>{info.name}</h1>
         <h2>{info.status}</h2>

         <div>
           Affiliation
           <span>{info.affiliation}</span>
         </div>
         <div>
           Occupation
           <span>{info.occupation}</span>
         </div>

         <section>
           Quirk
           <span>{info.quirk}</span>
         </section>
      </section>
    </Container>
  );
}
