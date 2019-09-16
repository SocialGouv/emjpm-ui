import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { Mesure } from './Mesure';

const MesureList = (props) => {
  const {
    mesures,
    onPanelOpen,
    AcceptComponent,
    CloseComponent,
    EditComponent,
    ReactivateComponent,
    RemoveComponent,
    isMandataire,
  } = props;
  return (
    <Fragment>
      {mesures.map((item) => {
        return (
          <Mesure
            isMandataire={isMandataire}
            EditComponent={EditComponent}
            RemoveComponent={RemoveComponent}
            AcceptComponent={AcceptComponent}
            CloseComponent={CloseComponent}
            ReactivateComponent={ReactivateComponent}
            onPanelOpen={onPanelOpen}
            key={item.id}
            {...item}
          />
        );
      })}
    </Fragment>
  );
};

MesureList.defaultProps = {
  AcceptComponent: null,
  CloseComponent: null,
  EditComponent: null,
  ReactivateComponent: null,
  RemoveComponent: null,
  isMandataire: false,
  onPanelOpen: null,
};

MesureList.propTypes = {
  AcceptComponent: PropTypes.elementType,
  CloseComponent: PropTypes.elementType,
  EditComponent: PropTypes.elementType,
  ReactivateComponent: PropTypes.elementType,
  RemoveComponent: PropTypes.elementType,
  isMandataire: PropTypes.bool,
  mesures: PropTypes.arrayOf(
    PropTypes.shape({
      age: PropTypes.string.isRequired,
      civilite: PropTypes.string.isRequired,
      dateOuverture: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      numeroRg: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      ville: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onPanelOpen: PropTypes.func,
};

export { MesureList };
