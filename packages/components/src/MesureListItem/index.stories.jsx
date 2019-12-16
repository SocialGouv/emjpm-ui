import { action } from '@storybook/addon-actions';
import React from 'react';

import { MesureListItem } from '.';

export default {
  component: MesureListItem,
  title: 'Components | MesureListItem',
};

const data = {
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

export const MesureListItemStory = () => <MesureListItem onItemClick={action('button-click')} mesure={data} />;
