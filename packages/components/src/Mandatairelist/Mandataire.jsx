import { Button, Card, Text } from '@socialgouv/emjpm-ui-core';
import PropTypes from 'prop-types';
import React, { Fragment, useContext } from 'react';
import { Box, Flex } from 'rebass';
import { BuildingHouse } from 'styled-icons/boxicons-solid';
import { Female, Male } from 'styled-icons/fa-solid';

import { PANEL_TYPE } from './constants/type';
import { MandataireContext } from './context';
import { MandatairePanel } from './MandatairePanel';
import {
  availabilityIndicatorStyle,
  cardStyle,
  columnStyle,
  decorationStyle,
  descriptionStyle,
  labelStyle,
  MandatairelistStyle,
  subtitleStyle,
  titleStyle,
} from './style';

const Mandataire = (props) => {
  const { currentMandataire, currentPanelType, setCurrentMandataire, setPanelType } = useContext(MandataireContext);
  const {
    currentAvailability,
    cvLink,
    dispoMax,
    email,
    genre,
    hasCV,
    isAvailable,
    nom,
    prenom,
    telephone,
    type,
    ville,
    tis,
    id,
    isMagistrat,
    ChooseComponent,
  } = props;
  return (
    <Fragment>
      <Card sx={cardStyle} width="100%">
        <Box sx={decorationStyle(type)} />
        <Flex
          onClick={() => {
            if (isMagistrat) {
              // Move me to dedicated function
              setCurrentMandataire(id);
              setPanelType(PANEL_TYPE.CHOOSE);
            }
          }}
          sx={MandatairelistStyle}
          {...props}
        >
          <Flex>
            <Box alignSelf="center" my="1px" mr="1">
              {type === 'service' ? (
                <BuildingHouse size="24" />
              ) : (
                <Fragment>{genre === 'F' ? <Female size="24" /> : <Male size="24" />}</Fragment>
              )}
              {isAvailable}
            </Box>
            <Box>
              <Text sx={titleStyle}>
                {nom} {prenom}
              </Text>
              <Text sx={subtitleStyle}>{type}</Text>
            </Box>
          </Flex>
          <Flex width="100px" sx={columnStyle(true, true)}>
            <Text sx={labelStyle}>Ville</Text>
            <Text sx={descriptionStyle}>{ville}</Text>
          </Flex>
          <Flex sx={columnStyle(false, false)}>
            <Text sx={labelStyle}>Disponibilité max</Text>
            <Text sx={descriptionStyle}>{currentAvailability === 0 && dispoMax === 0 ? 'NC' : dispoMax}</Text>
          </Flex>
          <Flex sx={columnStyle(false, false)}>
            <Text sx={labelStyle}>Capacité actuelle</Text>
            <Text sx={descriptionStyle(currentAvailability > 0)}>
              {currentAvailability === 0 && dispoMax === 0 ? 'NC' : currentAvailability}
            </Text>
          </Flex>
          {isMagistrat && (
            <Flex alignItems="center">
              <Box sx={availabilityIndicatorStyle(currentAvailability > 0)} />
            </Flex>
          )}
          {!isMagistrat && (
            <Fragment>
              <Flex width="200px" sx={columnStyle(true, true)}>
                <Text sx={labelStyle}>Email</Text>
                <Text sx={descriptionStyle}>{email}</Text>
              </Flex>
              <Flex width="100px" sx={columnStyle(true, true)}>
                <Text sx={labelStyle}>Téléphone</Text>
                <Text sx={descriptionStyle}>{telephone}</Text>
              </Flex>
            </Fragment>
          )}
          {hasCV && (
            <Box sx={columnStyle(true, true)} width="101px">
              {cvLink && (
                <a href={cvLink} rel="noopener noreferrer" target="_blank">
                  <Button variant="outline">Voir le cv</Button>
                </a>
              )}
            </Box>
          )}
          {isMagistrat && (
            <Box sx={columnStyle(true, true)} width="185px">
              <Button
                onClick={() => {
                  // Move me to dedicated function
                  setCurrentMandataire(id);
                  setPanelType(PANEL_TYPE.CHOOSE);
                }}
              >
                Choisir ce mandataire
              </Button>
            </Box>
          )}
          {!isMagistrat && (
            <Flex alignItems="center">
              <Box sx={availabilityIndicatorStyle(currentAvailability > 0)} />
            </Flex>
          )}
        </Flex>
      </Card>
      {currentMandataire === id && (
        <Card overflow="hidden" p="0" pt="1" m="1" mt="-20px">
          <MandatairePanel
            currentPanelType={currentPanelType}
            ChooseComponent={() => (
              <ChooseComponent
                currentAvailability={currentAvailability}
                dispoMax={dispoMax}
                email={email}
                genre={genre}
                hasCV={hasCV}
                isAvailable={isAvailable}
                nom={nom}
                prenom={prenom}
                telephone={telephone}
                type={type}
                ville={ville}
                tis={tis}
                isMagistrat={isMagistrat}
                currentMandataire={currentMandataire}
              />
            )}
            currentMandataire={currentMandataire}
          />
        </Card>
      )}
    </Fragment>
  );
};

Mandataire.defaultProps = {
  ChooseComponent: null,
  hasCV: false,
  isMagistrat: false,
  tis: [],
};

Mandataire.propTypes = {
  ChooseComponent: PropTypes.elementType,
  currentAvailability: PropTypes.number.isRequired,
  cvLink: PropTypes.string.isRequired,
  dispoMax: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  hasCV: PropTypes.bool,
  id: PropTypes.string.isRequired,
  isAvailable: PropTypes.bool.isRequired,
  isMagistrat: PropTypes.bool,
  nom: PropTypes.string.isRequired,
  prenom: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  tis: PropTypes.arrayOf(
    PropTypes.shape({
      etablissement: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
  type: PropTypes.string.isRequired,
  ville: PropTypes.string.isRequired,
};

export { Mandataire };
