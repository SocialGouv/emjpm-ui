import { action } from '@storybook/addon-actions';
import React from 'react';
import { Box } from 'rebass';

import { MesureListItem } from '.';

export default {
  component: MesureListItem,
  title: 'Components | MesureListItem',
};

const dataProgress = {
  age: '1957',
  antenneId: null,
  cabinet: null,
  civilite: 'H',
  codePostal: '06000',
  dateOuverture: '2019-06-13',
  dateOuvertureFormated: '13/06/2019',
  href: '/services/mesure/59185/',
  id: 59185,
  isUrgent: false,
  judgmentDate: 'non reseigné',
  latitude: 43.712,
  longitude: 7.23827,
  numeroDossier: 'AMBLPIE',
  numeroRg: '19/00519',
  residence: 'A Domicile',
  status: 'Mesure en cours',
  tiId: null,
  tribunal: 'Tribunal non reseigné',
  type: 'Sauvegarde de justice',
  ville: 'NICE',
};

const dataWaiting = {
  age: '1957',
  antenneId: null,
  cabinet: null,
  civilite: 'H',
  codePostal: '06000',
  dateOuverture: '2019-06-13',
  dateOuvertureFormated: '13/06/2019',
  href: '/services/mesure/59185/',
  id: 59185,
  isUrgent: false,
  judgmentDate: 'non reseigné',
  latitude: 43.712,
  longitude: 7.23827,
  numeroDossier: 'AMBLPIE',
  numeroRg: '19/00519',
  residence: 'A Domicile',
  status: 'Mesure en attente',
  tiId: null,
  tribunal: 'Tribunal non reseigné',
  type: 'Sauvegarde de justice',
  ville: 'NICE',
};

const dataWaitingUrgent = {
  age: '1957',
  antenneId: null,
  cabinet: null,
  civilite: 'H',
  codePostal: '06000',
  dateOuverture: '2019-06-13',
  dateOuvertureFormated: '13/06/2019',
  href: '/services/mesure/59185/',
  id: 59185,
  isUrgent: true,
  judgmentDate: '13/06/2019',
  latitude: 43.712,
  longitude: 7.23827,
  numeroDossier: 'AMBLPIE',
  numeroRg: '19/00519',
  residence: 'A Domicile',
  status: 'Mesure en attente',
  tiId: null,
  tribunal: 'Tribunal non reseigné',
  type: 'Sauvegarde de justice',
  ville: 'NICE',
};

const dataClose = {
  age: '1957',
  antenneId: null,
  cabinet: null,
  civilite: 'H',
  codePostal: '06000',
  dateOuverture: '2019-06-13',
  dateOuvertureFormated: '13/06/2019',
  href: '/services/mesure/59185/',
  id: 59185,
  isUrgent: false,
  judgmentDate: 'non reseigné',
  latitude: 43.712,
  longitude: 7.23827,
  numeroDossier: 'AMBLPIE',
  numeroRg: '19/00519',
  residence: 'A Domicile',
  status: 'Eteindre mesure',
  tiId: null,
  tribunal: 'Tribunal non reseigné',
  type: 'Sauvegarde de justice',
  ville: 'NICE',
};

const dataMagistratUrgent = {
  age: '1957',
  antenneId: null,
  cabinet: null,
  civilite: 'H',
  codePostal: '06000',
  dateOuverture: '2019-06-13',
  dateOuvertureFormated: '13/06/2019',
  href: '/services/mesure/59185/',
  id: 59185,
  isUrgent: true,
  judgmentDate: '13/06/2019',
  latitude: 43.712,
  longitude: 7.23827,
  numeroDossier: 'AMBLPIE',
  numeroRg: '19/00519',
  residence: 'A Domicile',
  status: 'Mesure en attente',
  tiId: null,
  tribunal: 'Tribunal non reseigné',
  type: 'Sauvegarde de justice',
  ville: 'NICE',
};

const dataMagistrat = {
  age: '1957',
  antenneId: null,
  cabinet: null,
  civilite: 'H',
  codePostal: '06000',
  dateOuverture: '2019-06-13',
  dateOuvertureFormated: '13/06/2019',
  href: '/services/mesure/59185/',
  id: 59185,
  isUrgent: false,
  judgmentDate: null,
  latitude: 43.712,
  longitude: 7.23827,
  numeroDossier: 'AMBLPIE',
  numeroRg: '19/00519',
  residence: 'A Domicile',
  status: 'Mesure en attente',
  tiId: null,
  tribunal: 'Tribunal non reseigné',
  type: 'Sauvegarde de justice',
  ville: 'NICE',
};

export const MesureListItemStoryProgress = () => (
  <Box p="4" width="1140px">
    <MesureListItem onClick={action('button-click')} mesure={dataProgress} />
  </Box>
);

export const MesureListItemStoryWaiting = () => (
  <Box p="4" width="1140px">
    <MesureListItem onClick={action('button-click')} mesure={dataWaiting} />
  </Box>
);

export const MesureListItemStoryWaitingUrgent = () => (
  <Box p="4" width="1140px">
    <MesureListItem onClick={action('button-click')} mesure={dataWaitingUrgent} />
  </Box>
);

export const MesureListItemStoryClose = () => (
  <Box p="4" width="1140px">
    <MesureListItem onClick={action('button-click')} mesure={dataClose} />
  </Box>
);

export const MesureListItemMagistratStoryUrgent = () => (
  <Box p="4" width="1140px">
    <MesureListItem onClick={action('button-click')} isMagistrat mesure={dataMagistratUrgent} />
  </Box>
);

export const MesureListItemMagistratStory = () => (
  <Box p="4" width="1140px">
    <MesureListItem onClick={action('button-click')} isMagistrat mesure={dataMagistrat} />
  </Box>
);
