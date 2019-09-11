import React from 'react';

import { BoxWrapper } from '../../../core/src/Grid';
import { MesureList } from '.';

export default {
  component: MesureList,
  title: 'Components | MesureList',
};

const datas = [
  {
    age: 24,
    civilite: 'F',
    dateOuverture: '2019-01-10',
    numeroRg: '651654654',
    status: 'eteinte',
    type: 'Tutelle aux biens et à la personne',
    ville: 'PARIS',
  },
  {
    age: 24,
    civilite: 'F',
    dateOuverture: '2019-01-10',
    numeroRg: '651654654',
    status: 'Mesure en attente',
    type: 'Curatelle renforcée aux biens et à la personne',
    ville: 'PARIS',
  },
  {
    age: 24,
    civilite: 'F',
    dateOuverture: '2019-01-10',
    numeroRg: '651654654',
    status: 'Mesure en cours',
    type: 'Tutelle',
    ville: 'PARIS',
  },
];

export const MesureListStory = () => (
  <BoxWrapper mt="5">
    <MesureList mesures={datas} />
  </BoxWrapper>
);
