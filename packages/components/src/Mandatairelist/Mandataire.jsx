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
  labelStyle,
  MandatairelistStyle,
  subtitleStyle,
  titleStyle,
} from './style';

const Mandataire = (props) => {
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
  } = props;
  return (
    <Card sx={cardStyle} width="100%">
      <Box sx={decorationStyle(type)} />
      <Flex sx={MandatairelistStyle} {...props}>
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
          <Text sx={descriptionStyle}>{dispoMax}</Text>
        </Flex>
        <Flex sx={columnStyle(false, false)}>
          <Text sx={labelStyle}>Capacité actuelle</Text>
          <Text sx={descriptionStyle(currentAvailability > 0)}>{currentAvailability}</Text>
        </Flex>
        <Flex width="200px" sx={columnStyle(true, true)}>
          <Text sx={labelStyle}>Email</Text>
          <Text sx={descriptionStyle}>{email}</Text>
        </Flex>
        <Flex width="100px" sx={columnStyle(true, true)}>
          <Text sx={labelStyle}>Téléphone</Text>
          <Text sx={descriptionStyle}>{telephone}</Text>
        </Flex>
        {hasCV && (
          <Box sx={columnStyle(true, true)} width="101px">
            {cvLink && (
              <a href={cvLink} rel="noopener noreferrer" target="_blank">
                <Button variant="outline">Voir le cv</Button>
              </a>
            )}
          </Box>
        )}
        <Flex alignItems="center">
          <Box sx={availabilityIndicatorStyle(currentAvailability > 0)} />
        </Flex>
      </Flex>
    </Card>
  );
};

Mandataire.defaultProps = {
  hasCV: false,
};

Mandataire.propTypes = {
  currentAvailability: PropTypes.number.isRequired,
  cvLink: PropTypes.string.isRequired,
  dispoMax: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  hasCV: PropTypes.bool,
  id: PropTypes.string.isRequired,
  isAvailable: PropTypes.bool.isRequired,
  nom: PropTypes.string.isRequired,
  prenom: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  ville: PropTypes.string.isRequired,
};

export { Mandataire };
