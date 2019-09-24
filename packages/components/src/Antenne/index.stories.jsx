import React from 'react';

import { Antenne } from '.';
import { Link } from './stories/components';

export default {
  component: Antenne,
  title: 'Components | Antenne',
};

const antenne = {
  headquarters: true,
  id: 1,
  mesures_in_progress: 230,
  mesures_max: 221,
  name: 'antenne name',
  preferences: ['Paris', 'New-york'],
};

export const AntenneStory = () => (
  <Antenne
    key={antenne.id}
    antenne={antenne}
    href="test"
    linkText="Voir l'antenne"
    Link={Link}
    sx={{ width: '300px' }}
  />
);
