import { Button, Card, Text } from '@socialgouv/emjpm-ui-core';
import PropTypes from 'prop-types';
import React from 'react';
import { Box, Flex } from 'rebass';
import { Female, Male } from 'styled-icons/fa-solid';

import {
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
  const { mandataire } = props;
  return (
    <Card sx={cardStyle} width="100%">
      <Box sx={decorationStyle} />
      <Flex sx={MandatairelistStyle} {...props}>
        <Flex>
          <Box alignSelf="center" my="1px" mr="1">
            {mandataire.isWoman ? <Female size="24" /> : <Male size="24" />}
          </Box>
          <Box>
            <Text sx={titleStyle}>
              {mandataire.nom} {mandataire.prenom}
            </Text>
            <Text sx={subtitleStyle}>Individuel</Text>
          </Box>
        </Flex>
        <Flex sx={columnStyle(true, true)}>
          <Text sx={labelStyle}>Ville</Text>
          <Text sx={descriptionStyle}>{mandataire.ville}</Text>
        </Flex>
        <Flex sx={columnStyle(false, false)}>
          <Text sx={labelStyle}>Disponibilité max</Text>
          <Text sx={descriptionStyle}>{mandataire.dispo_max}</Text>
        </Flex>
        <Flex sx={columnStyle(false, false)}>
          <Text sx={labelStyle}>Capacité actuelle</Text>
          <Text sx={descriptionStyle(mandataire.currentAvailability > 0)}>{mandataire.currentAvailability}</Text>
        </Flex>
        <Flex width="150px" sx={columnStyle(true, true)}>
          <Text sx={labelStyle}>Email</Text>
          <Text sx={descriptionStyle}>{mandataire.email}</Text>
        </Flex>
        <Flex sx={columnStyle(true, true)}>
          <Text sx={labelStyle}>Téléphone</Text>
          <Text sx={descriptionStyle}>{mandataire.telephone_portable}</Text>
        </Flex>
        <Box sx={columnStyle(true, true)} width="101px">
          {mandataire.cvLink && (
            <a href={mandataire.cvLink} rel="noopener noreferrer" target="_blank">
              <Button variant="outline">Voir le cv</Button>
            </a>
          )}
        </Box>
      </Flex>
    </Card>
  );
};

Mandataire.propTypes = {
  mandataire: PropTypes.shape({
    currentAvailability: PropTypes.number.isRequired,
    cvLink: PropTypes.string.isRequired,
    dispo_max: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isAvailable: PropTypes.bool.isRequired,
    isWoman: PropTypes.bool,
    nom: PropTypes.string.isRequired,
    prenom: PropTypes.string.isRequired,
    telephone_portable: PropTypes.string.isRequired,
    ville: PropTypes.string.isRequired,
  }).isRequired,
};

export { Mandataire };
