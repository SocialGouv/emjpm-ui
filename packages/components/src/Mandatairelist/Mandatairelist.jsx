import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { Mandataire } from './Mandataire';

const Mandatairelist = (props) => {
  const { mandataires, isMagistrat, isMagistratMap, ChooseComponent } = props;
  return (
    <Fragment>
      {mandataires.map((mandataire) => {
        return (
          <Mandataire
            ChooseComponent={ChooseComponent}
            isMagistratMap={isMagistratMap}
            isMagistrat={isMagistrat}
            key={mandataire.id}
            {...mandataire}
          />
        );
      })}
    </Fragment>
  );
};

Mandatairelist.defaultProps = {
  ChooseComponent: null,
  isMagistrat: false,
  isMagistratMap: false,
};

Mandatairelist.propTypes = {
  ChooseComponent: PropTypes.elementType,
  isMagistrat: PropTypes.bool,
  isMagistratMap: PropTypes.bool,
  mandataires: PropTypes.arrayOf(
    PropTypes.shape({
      adresse: PropTypes.string.isRequired,
      codePostal: PropTypes.string.isRequired,
      currentAvailability: PropTypes.number.isRequired,
      cvLink: PropTypes.string.isRequired,
      dispoMax: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      etablissement: PropTypes.string,
      genre: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      isAvailable: PropTypes.bool.isRequired,
      mesuresAwaiting: PropTypes.number,
      nom: PropTypes.string.isRequired,
      prenom: PropTypes.string.isRequired,
      telephone: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      ville: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export { Mandatairelist };
