import styled from '@emotion/styled';
import { Button, Card, Text } from '@socialgouv/emjpm-ui-core';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Box, Flex } from 'rebass';
import { Female, Male } from 'styled-icons/fa-solid';
import { Warning } from 'styled-icons/material';

import { MESURE_TYPE } from './constants/type';
import {
  cardStyle,
  columnStyle,
  decorationStyle,
  descriptionStyle,
  labelStyle,
  mesureListItemStyle,
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

const currentYear = new Date().getFullYear();

const MesureListItem = (props) => {
  const {
    mesure: {
      age,
      cabinet,
      civilite,
      dateOuvertureFormated,
      isUrgent,
      judgmentDate,
      numeroDossier,
      numeroRg,
      residence,
      status,
      tribunal,
      type,
      ville,
    },
    buttonText,
    isMagistrat,
    onItemClick,
  } = props;

  let currentStatus;
  if (status === 'Eteindre mesure') {
    currentStatus = 'Mesure éteinte';
  } else {
    currentStatus = status;
  }

  return (
    <Fragment>
      <Card sx={cardStyle} width="100%" onClick={() => onItemClick(props)}>
        <Box sx={decorationStyle(status)} />
        <Flex sx={mesureListItemStyle}>
          <Box width="270px">
            <Text sx={titleStyle}>
              {numeroRg || 'RG-XXXXXX'}
              <Text sx={statusStyle(status)}>{currentStatus || 'non reseigné'}</Text>
            </Text>
            <Text sx={subtitleStyle}>{type || 'type de mesure non reseigné'}</Text>
            {!isMagistrat && (
              <Text mt="4px" sx={subtitleStyle}>
                {tribunal || 'Tribunal non renseigné'} {cabinet}
              </Text>
            )}
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

          <Flex width="160px" sx={columnStyle(true, true)}>
            <Text sx={labelStyle}>Commune</Text>
            <Text sx={descriptionStyle}>{ville || 'ville non reseigné'}</Text>
          </Flex>

          <Flex width="150px" sx={columnStyle(true, true)}>
            <Text sx={labelStyle}>Type de résidence</Text>
            <Text sx={descriptionStyle}>{residence || 'Résidence non reseigné'}</Text>
          </Flex>

          {status === MESURE_TYPE.WAITING && (
            <Fragment>
              <Flex width="120px" textAlign="left" sx={columnStyle(false, false)}>
                <Text sx={labelStyle}>Date prév. juge.</Text>
                <Text sx={descriptionStyle}>{judgmentDate || 'non reseigné'}</Text>
              </Flex>
              <Flex width="130px">
                <Box alignSelf="center" pt="4px" mr="1">
                  <Fragment>
                    {isUrgent && (
                      <Flex alignItems="center">
                        <Warning size="24" />
                        <Text ml="1" sx={descriptionStyle}>
                          Urgent
                        </Text>
                      </Flex>
                    )}
                  </Fragment>
                </Box>
              </Flex>
            </Fragment>
          )}

          {status !== MESURE_TYPE.WAITING && (
            <Flex width="250px" textAlign="left" sx={columnStyle(false, false)}>
              <Text sx={labelStyle}>Decision du</Text>
              <Text sx={descriptionStyle}>{dateOuvertureFormated || 'non reseigné'}</Text>
            </Flex>
          )}

          <Flex sx={{ justifyContent: 'flex-end', position: 'absolute', right: '20px' }}>
            <Button
              sx={{
                fontSize: 1,
                fontWeight: '600',
                minWidth: '150px',
                opacity: 0,
                outline: 'none',
                transition: '150ms ease-in-out all',
              }}
            >
              {buttonText}
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Fragment>
  );
};

MesureListItem.defaultProps = {
  buttonText: 'Sélectionner',
  isMagistrat: false,
};

MesureListItem.propTypes = {
  buttonText: PropTypes.string,
  isMagistrat: PropTypes.bool,
  mesure: PropTypes.arrayOf(
    PropTypes.shape({
      age: PropTypes.string,
      cabinet: PropTypes.string,
      civilite: PropTypes.string,
      codePostal: PropTypes.string,
      currentStatus: PropTypes.string,
      dateOuvertureFormated: PropTypes.string,
      id: PropTypes.number,
      isUrgent: PropTypes.bool,
      judgmentDate: PropTypes.string,
      numeroDossier: PropTypes.string,
      numeroRg: PropTypes.string,
      residence: PropTypes.string,
      status: PropTypes.string,
      tiId: PropTypes.number,
      tribunal: PropTypes.string,
      type: PropTypes.string,
      ville: PropTypes.string,
    }),
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export { MesureListItem };
