import styled from '@emotion/styled';
import { Button, Card, Text } from '@socialgouv/emjpm-ui-core';
import PropTypes from 'prop-types';
import React, { Fragment, useContext } from 'react';
import { Box, Flex } from 'rebass';
import { Female, Male } from 'styled-icons/fa-solid';

import { MESURE_TYPE, PANEL_TYPE } from './constants/type';
import { MesureContext } from './context';
import { MesurePanel } from './MesurePanel';
import {
  cardStyle,
  columnStyle,
  decorationStyle,
  descriptionStyle,
  labelStyle,
  MandatairelistStyle,
  statusStyle,
  subtitleStyle,
  titleStyle,
} from './style';

const GrayMale = styled(Male)`
  color: '#333333';
`;

const GrayFemale = styled(Female)`
  color: '#333333';
`;

const Mesure = (props) => {
  const { currentMesure, currentPanelType, setCurrentMesure, setPanelType } = useContext(MesureContext);

  const {
    type,
    ville,
    numeroRg,
    dateOuverture,
    age,
    civilite,
    status,
    id,
    onPanelOpen,
    EditComponent,
    RemoveComponent,
    AcceptComponent,
    CloseComponent,
    ReactivateComponent,
  } = props;

  return (
    <Fragment>
      <Card sx={cardStyle} width="100%">
        <Box sx={decorationStyle(status)} />
        <Flex sx={MandatairelistStyle}>
          <Box width="270px">
            <Text sx={titleStyle}>
              {numeroRg || 'RG-XXXXXX'}
              <Text sx={statusStyle(status)}>{status || 'non reseigné'}</Text>
            </Text>
            <Text sx={subtitleStyle}>{type || 'type de mesure non reseigné'}</Text>
          </Box>

          <Flex width="70px">
            <Box alignSelf="center" pt="4px" mr="1">
              {civilite && <Fragment>{civilite === 'F' ? <GrayFemale size="24" /> : <GrayMale size="24" />}</Fragment>}
            </Box>
            <Box>
              <Text sx={labelStyle}>Age</Text>
              <Text sx={descriptionStyle}>{age || 'nc'}</Text>
            </Box>
          </Flex>

          <Flex width="150px" sx={columnStyle(true, true)}>
            <Text sx={labelStyle}>Commune</Text>
            <Text sx={descriptionStyle}>{ville || 'ville non reseigné'}</Text>
          </Flex>

          <Flex width="80px" textAlign="left" sx={columnStyle(false, false)}>
            <Text sx={labelStyle}>Decision du</Text>
            <Text sx={descriptionStyle}>{dateOuverture || 'non reseigné'}</Text>
          </Flex>

          <Box mr="1" width="120px" sx={columnStyle(true, true)}>
            {(status === MESURE_TYPE.IN_PROGRESS || status === MESURE_TYPE.CLOSED) && (
              <Button
                width="120px"
                onClick={() => {
                  // Move me to dedicated function
                  setCurrentMesure(id);
                  if (status === MESURE_TYPE.CLOSED) setPanelType(PANEL_TYPE.REMOVE);
                  if (status === MESURE_TYPE.IN_PROGRESS) setPanelType(PANEL_TYPE.EDIT);
                  // Remove if useless
                  onPanelOpen(id);
                }}
                variant="outline"
              >
                {status === MESURE_TYPE.IN_PROGRESS && <Fragment>Modifier</Fragment>}
                {status === MESURE_TYPE.CLOSED && <Fragment>Supprimer</Fragment>}
              </Button>
            )}
          </Box>

          <Box sx={columnStyle(true, true)}>
            <Button
              width="180px"
              onClick={() => {
                // Move me to dedicated function
                setCurrentMesure(id);
                if (status === MESURE_TYPE.WAITING) setPanelType(PANEL_TYPE.ACCEPT);
                if (status === MESURE_TYPE.IN_PROGRESS) setPanelType(PANEL_TYPE.CLOSE);
                if (status === MESURE_TYPE.CLOSED) setPanelType(PANEL_TYPE.REACTIVATE);
                // Remove if useless
                onPanelOpen(id);
              }}
              variant="outline"
            >
              {status === MESURE_TYPE.WAITING && <Fragment>Accepter la mesure</Fragment>}
              {status === MESURE_TYPE.IN_PROGRESS && <Fragment>Fermer la mesure</Fragment>}
              {status === MESURE_TYPE.CLOSED && <Fragment>Reactiver la mesure</Fragment>}
            </Button>
          </Box>
        </Flex>
      </Card>
      {currentMesure === id && (
        <Card pt="5" m="1" mt="-22px">
          <MesurePanel
            currentPanelType={currentPanelType}
            EditComponent={EditComponent}
            RemoveComponent={RemoveComponent}
            AcceptComponent={AcceptComponent}
            CloseComponent={CloseComponent}
            ReactivateComponent={ReactivateComponent}
            currentMesure={currentMesure}
          />
        </Card>
      )}
    </Fragment>
  );
};

Mesure.propTypes = {
  AcceptComponent: PropTypes.elementType,
  CloseComponent: PropTypes.elementType,
  EditComponent: PropTypes.elementType,
  ReactivateComponent: PropTypes.elementType,
  RemoveComponent: PropTypes.elementType,
  age: PropTypes.string.isRequired,
  civilite: PropTypes.string.isRequired,
  dateOuverture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  numeroRg: PropTypes.string.isRequired,
  onPanelOpen: PropTypes.func,
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  ville: PropTypes.string.isRequired,
};

Mesure.defaultProps = {
  AcceptComponent: null,
  CloseComponent: null,
  EditComponent: null,
  ReactivateComponent: null,
  RemoveComponent: null,
  onPanelOpen: null,
};

export { Mesure };
