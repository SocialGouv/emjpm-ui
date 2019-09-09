import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { Mandataire } from './Mandataire';

const Mandatairelist = (props) => {
  const { mandataires } = props;
  return (
    <Fragment>
      {mandataires.map((mandataire) => {
        return <Mandataire key={mandataire.id} mandataire={mandataire} />;
      })}
    </Fragment>
  );
};

Mandatairelist.propTypes = {
  mandataires: PropTypes.arrayOf(
    PropTypes.shape({
      currentAvailability: PropTypes.number.isRequired,
      cvLink: PropTypes.string.isRequired,
      dispo_max: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      isAvailable: PropTypes.bool.isRequired,
      nom: PropTypes.string.isRequired,
      prenom: PropTypes.string.isRequired,
      telephone_portable: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      ville: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export { Mandatairelist };
