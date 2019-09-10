import React from 'react';

import { BoxWrapper } from '../../../core/src/Grid';
import { Mandatairelist } from '.';

export default {
  component: Mandatairelist,
  title: 'Components | Mandatairelist',
};

const datas = [
  {
    currentAvailability: 50,
    cvLink: 'http://google.fr',
    dispoMax: 150,
    email: 'sarah@connor.cdom',
    id: 123,
    isAvailable: true,
    isWoman: true,
    nom: 'Sarahzzzzsrtzrrg',
    prenom: 'Connor',
    telephone: '0683961487',
    type: 'individuel',
    ville: 'Paris',
  },
  {
    currentAvailability: -50,
    cvLink: 'http://google.fr',
    dispoMax: 150,
    email: 'johnhezfzfzefzfnry@skynet.com',
    id: 123,
    isAvailable: true,
    isWoman: false,
    nom: 'John',
    prenom: 'henry',
    telephone: '0683961487zfzefzef',
    type: 'préposé',
    ville: 'Lions sur mer eeeeeeeeee',
  },
  {
    currentAvailability: -50,
    cvLink: 'http://google.fr',
    dispoMax: 150,
    email: 'johnhezfzfzefzfnry@skynet.com',
    id: 123,
    isAvailable: true,
    isWoman: false,
    nom: 'John',
    prenom: 'henry',
    telephone: '0683961487zfzefzef',
    type: 'service',
    ville: 'Lions sur mer eeeeeeeeee',
  },
];

export const MandatairelistStory = () => (
  <BoxWrapper mt="5">
    <Mandatairelist mandataires={datas} />
  </BoxWrapper>
);
