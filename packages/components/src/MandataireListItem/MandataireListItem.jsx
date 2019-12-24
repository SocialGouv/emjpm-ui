import { Button, Card, Text } from '@socialgouv/emjpm-ui-core';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Box, Flex } from 'rebass';
import { BuildingHouse } from 'styled-icons/boxicons-solid';
import { Female, Male } from 'styled-icons/fa-solid';

import {
  availabilityIndicatorStyle,
  cardStyle,
  columnStyle,
  decorationStyle,
  descriptionStyle,
  dispoDescriptionStyle,
  labelStyle,
  MandatairelistStyle,
  subtitleStyle,
  titleStyle,
} from './style';

const MandataireListItem = (props) => {
  const {
    gestionnaire: {
      currentAvailability,
      cvLink,
      dispoMax,
      email,
      genre,
      hasCV,
      telephone,
      isAvailable,
      nom,
      prenom,
      ville,
      isMagistrat,
      isMagistratMap,
      etablissement,
      mesuresInProgress,
      mesuresAwaiting,
      type,
    },
    onClick,
  } = props;
  return (
    <Fragment>
      <Card sx={cardStyle} width="100%">
        <Box sx={decorationStyle(type)} />
        <Flex
          onClick={() => {
            onClick(props);
          }}
          sx={MandatairelistStyle}
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
                {type === 'service' ? (
                  <Fragment>{etablissement}</Fragment>
                ) : (
                  <Fragment>
                    {nom} {prenom}
                  </Fragment>
                )}
              </Text>
              <Text sx={subtitleStyle}>{type}</Text>
            </Box>
          </Flex>
          <Flex width="100px" sx={columnStyle(true, true)}>
            <Text sx={labelStyle}>Ville</Text>
            <Text sx={descriptionStyle}>{ville}</Text>
          </Flex>

          {!isMagistrat && (
            <Fragment>
              {!isMagistratMap && (
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

          {!isMagistratMap && (
            <Fragment>
              <Flex sx={columnStyle(false, false)}>
                <Text sx={labelStyle}>En attente</Text>
                <Text sx={descriptionStyle}>{mesuresAwaiting}</Text>
              </Flex>
              <Flex sx={columnStyle(false, false)}>
                <Text sx={labelStyle}>Disponibilité</Text>
                <Text sx={dispoDescriptionStyle(currentAvailability > 0)}>
                  {currentAvailability === undefined ? 'NC' : currentAvailability}
                </Text>
              </Flex>
              <Flex sx={columnStyle(false, false)}>
                <Text sx={labelStyle}>En cours / souhaitée</Text>
                <Text sx={dispoDescriptionStyle(currentAvailability > 0)}>
                  {mesuresInProgress === 0 && dispoMax === 0 ? 'NC' : mesuresInProgress}/
                  {mesuresInProgress === 0 && dispoMax === 0 ? 'NC' : dispoMax}
                </Text>
              </Flex>
            </Fragment>
          )}
          <Flex alignItems="center">
            <Box sx={availabilityIndicatorStyle(currentAvailability > 0)} />
          </Flex>
        </Flex>
      </Card>
    </Fragment>
  );
};

MandataireListItem.defaultProps = {
  onClick: null,
};

MandataireListItem.propTypes = {
  gestionnaire: PropTypes.shape({
    currentAvailability: PropTypes.number.isRequired,
    cvLink: PropTypes.string.isRequired,
    dispoMax: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    etablissement: PropTypes.string,
    genre: PropTypes.string.isRequired,
    hasCV: PropTypes.bool,
    isAvailable: PropTypes.bool.isRequired,
    isMagistrat: PropTypes.bool,
    isMagistratMap: PropTypes.bool,
    mesuresAwaiting: PropTypes.number,
    mesuresInProgress: PropTypes.number.isRequired,
    nom: PropTypes.string.isRequired,
    onItemClick: PropTypes.func,
    prenom: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    ville: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

export { MandataireListItem };
