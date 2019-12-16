import styled from '@emotion/styled';
import { Card, Text } from '@socialgouv/emjpm-ui-core';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Box, Flex } from 'rebass';
import { Female, Male } from 'styled-icons/fa-solid';

import {
  cardStyle,
  columnStyle,
  decorationStyle,
  descriptionStyle,
  labelStyle,
  mesureListItemStyle,
  subtitleStyle,
  titleStyle,
} from './style';

const GrayMale = styled(Male)`
  color: '#333333';
`;

const GrayFemale = styled(Female)`
  color: '#333333';
`;

const currentYear = new Date().getFullYear();

const MesureListItem = (props) => {
  const {
    mesure: { age, cabinet, civilite, dateOuvertureFormated, numeroDossier, numeroRg, status, tribunal, type, ville },
    onItemClick,
  } = props;

  return (
    <Fragment>
      <Card sx={cardStyle} width="100%" onClick={() => onItemClick(props)}>
        <Box sx={decorationStyle(status)} />
        <Flex sx={mesureListItemStyle}>
          <Box width="270px">
            <Text sx={titleStyle}>{numeroRg || 'RG-XXXXXX'}</Text>
            <Text sx={subtitleStyle}>{type || 'type de mesure non reseigné'}</Text>
            <Text sx={subtitleStyle} mt="3px">
              {tribunal || 'Non renseigné'} {cabinet}
            </Text>
          </Box>
          <Flex width="100px">
            <Box alignSelf="center" pt="4px" mr="1">
              {civilite && <Fragment>{civilite === 'F' ? <GrayFemale size="24" /> : <GrayMale size="24" />}</Fragment>}
            </Box>
            <Box>
              <Text sx={labelStyle}>Age</Text>
              <Text sx={descriptionStyle}>{currentYear - age || 'nc'}</Text>
            </Box>
          </Flex>
          <Flex width="120px" sx={columnStyle(true, true)}>
            <Text sx={labelStyle}>Dossier</Text>
            <Text sx={descriptionStyle}>{numeroDossier || 'numeroDossier non reseigné'}</Text>
          </Flex>
          <Flex width="150px" sx={columnStyle(true, true)}>
            <Text sx={labelStyle}>Commune</Text>
            <Text sx={descriptionStyle}>{ville || 'ville non reseigné'}</Text>
          </Flex>
          <Flex width="120px" textAlign="left" sx={columnStyle(false, false)}>
            <Text sx={labelStyle}>Decision du</Text>
            <Text sx={descriptionStyle}>{dateOuvertureFormated || 'non reseigné'}</Text>
          </Flex>
        </Flex>
      </Card>
    </Fragment>
  );
};

MesureListItem.propTypes = {
  mesure: PropTypes.arrayOf(
    PropTypes.shape({
      age: PropTypes.string.isRequired,
      antenneId: PropTypes.number,
      cabinet: PropTypes.string,
      civilite: PropTypes.string.isRequired,
      codePostal: PropTypes.string.isRequired,
      dateOuverture: PropTypes.string.isRequired,
      dateOuvertureFormated: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isMagistrat: PropTypes.bool,
      isUrgent: PropTypes.bool,
      judgmentDate: PropTypes.string,
      numeroDossier: PropTypes.string,
      numeroRg: PropTypes.string.isRequired,
      onPanelOpen: PropTypes.func,
      residence: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      tiId: PropTypes.number,
      tribunal: PropTypes.string,
      type: PropTypes.string.isRequired,
      ville: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export { MesureListItem };
