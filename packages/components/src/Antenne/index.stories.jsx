import React from 'react';

import { Antenne } from '.';
import { Link } from './stories/components';

export default {
  component: Antenne,
  title: 'Components | Antenne',
};

const antenne = {
  id: 1,
  mesures_in_progress: 200,
  mesures_max: 200,
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
