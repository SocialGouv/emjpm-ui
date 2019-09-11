import PropTypes from 'prop-types';
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
    href: '/mesure',
    id: 1,
    numeroRg: '651654654',
    status: 'eteinte',
    type: 'Tutelle aux biens et à la personne',
    ville: 'PARIS',
  },
  {
    age: 24,
    civilite: 'F',
    dateOuverture: '2019-01-10',
    href: '/mesure',
    id: 2,
    numeroRg: '651654654',
    status: 'Mesure en attente',
    type: 'Curatelle renforcée aux biens et à la personne',
    ville: 'PARIS',
  },
  {
    age: 24,
    civilite: 'F',
    dateOuverture: '2019-01-10',
    href: '/mesure',
    id: 3,
    numeroRg: '651654654',
    status: 'Mesure en cours',
    type: 'Tutelle',
    ville: 'PARIS',
  },
];

const Link = (props) => {
  const { href, children } = props;
  return <a href={href}>{children}</a>;
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export const MesureListStory = () => (
  <BoxWrapper mt="5">
    <MesureList LinkComponent={(props) => <Link {...props} />} validate={(id) => console.log(id)} mesures={datas} />
  </BoxWrapper>
);
