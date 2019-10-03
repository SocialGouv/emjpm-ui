import React from 'react';

import { BoxWrapper } from '../../../core/src/Grid';
import { Mandatairelist } from '.';
import { MandataireContextProvider } from './context';
import { ChooseComponent } from './stories/components';

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
    genre: 'H',
    id: 123,
    isAvailable: true,
    mesuresAwaiting: '2',
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
    genre: 'H',
    id: 1234,
    isAvailable: true,
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
    etablissement: 'henry',
    genre: 'H',
    id: 12345,
    isAvailable: true,
    mesuresAwaiting: '20',
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

export const MandataireMagristratlistStory = () => (
  <MandataireContextProvider>
    <BoxWrapper mt="5">
      <Mandatairelist ChooseComponent={ChooseComponent} isMagistrat mandataires={datas} />
    </BoxWrapper>
  </MandataireContextProvider>
);
