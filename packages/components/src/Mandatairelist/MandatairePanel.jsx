import PropTypes from 'prop-types';
import React from 'react';

import { PANEL_TYPE } from './constants/type';

const MandatairePanel = (props) => {
  const { currentPanelType, currentMesure, ChooseComponent } = props;
  switch (currentPanelType) {
    case PANEL_TYPE.CHOOSE: {
      return <ChooseComponent currentMesure={currentMesure} />;
    }
    default: {
      return null;
    }
  }
};

MandatairePanel.defaultProps = {
  ChooseComponent: null,
  currentMesure: null,
  currentPanelType: null,
};

MandatairePanel.propTypes = {
  ChooseComponent: PropTypes.elementType,
  currentMesure: PropTypes.number,
  currentPanelType: PropTypes.string,
};

export { MandatairePanel };
