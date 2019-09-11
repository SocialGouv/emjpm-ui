import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { Mesure } from './Mesure';

const MesureList = (props) => {
  const { mesures } = props;
  return (
    <Fragment>
      {mesures.map((item) => {
        return <Mesure key={item.id} {...item} />;
      })}
    </Fragment>
  );
};

MesureList.propTypes = {
  mesures: PropTypes.arrayOf(
    PropTypes.shape({
      age: PropTypes.string.isRequired,
      civilite: PropTypes.string.isRequired,
      dateOuverture: PropTypes.string.isRequired,
      numeroRg: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      ville: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export { MesureList };
