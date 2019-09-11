import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { Mesure } from './Mesure';

const MesureList = (props) => {
  const { mesures, validate, Link } = props;
  return (
    <Fragment>
      {mesures.map((item) => {
        return <Mesure Link={Link} validate={validate} key={item.id} {...item} />;
      })}
    </Fragment>
  );
};

MesureList.propTypes = {
  Link: PropTypes.func.isRequired,
  mesures: PropTypes.arrayOf(
    PropTypes.shape({
      age: PropTypes.number.isRequired,
      civilite: PropTypes.string.isRequired,
      dateOuverture: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      numeroRg: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      ville: PropTypes.string.isRequired,
    }),
  ).isRequired,
  validate: PropTypes.func.isRequired,
};

export { MesureList };
