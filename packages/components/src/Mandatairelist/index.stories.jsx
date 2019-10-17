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
    adresse: 'test',
    codePostal: '75017',
    currentAvailability: 50,
    cvLink: 'http://google.fr',
    dispoMax: 150,
    email: 'sarah@connor.cdom',
    genre: 'H',
    id: '123',
    isAvailable: true,
    mesuresAwaiting: 2,
    mesuresInProgress: 2,
    nom: 'Sarahzzzzsrtzrrg',
    prenom: 'Connor',
    telephone: '0683961487',
    type: 'individuel',
    ville: 'Paris',
  },
  {
    adresse: 'test',
    codePostal: '75017',
    currentAvailability: -50,
    cvLink: 'http://google.fr',
    dispoMax: 150,
    email: 'johnhezfzfzefzfnry@skynet.com',
    genre: 'H',
    id: '1234',
    isAvailable: true,
    mesuresAwaiting: 20,
    mesuresInProgress: 2,
    nom: 'John',
    prenom: 'henry',
    telephone: '0683961487zfzefzef',
    type: 'préposé',
    ville: 'Lions sur mer eeeeeeeeee',
  },
  {
    adresse: 'test',
    codePostal: '75017',
    currentAvailability: -50,
    cvLink: 'http://google.fr',
    dispoMax: 150,
    email: 'johnhezfzfzefzfnry@skynet.com',
    etablissement: 'henry',
    genre: 'H',
    id: '12345',
    isAvailable: true,
    mesuresAwaiting: 20,
    mesuresInProgress: 2,
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

export const MandataireMagristratMaplistStory = () => (
  <MandataireContextProvider>
    <BoxWrapper mt="5">
      <Mandatairelist
        selectCurrentMandataire={(id) => console.log(id)}
        ChooseComponent={ChooseComponent}
        isMagistratMap
        mandataires={datas}
      />
    </BoxWrapper>
  </MandataireContextProvider>
);
