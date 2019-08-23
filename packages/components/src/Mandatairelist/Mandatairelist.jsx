import { Button } from '@socialgouv/emjpm-ui-core/src/Button';
import { Card } from '@socialgouv/emjpm-ui-core/src/Card';
import { Text } from '@socialgouv/emjpm-ui-core/src/Type';
import PropTypes from 'prop-types';
import React from 'react';
import { Box, Flex } from 'rebass';
import { Female, Male } from 'styled-icons/fa-solid';

import { MandatairelistStyle } from './style';

const columnStyle = {
  flexDirection: 'column',
};

const titleStyle = {
  color: 'black',
  fontFamily: 'heading',
  fontSize: '15px',
  fontWeight: '600',
  my: '5px',
};

const statusStyle = {
  color: 'yellow',
  display: 'inline',
  fontSize: '12px',
};

const subtitleStyle = {
  color: 'mediumGray',
  fontFamily: 'body',
  fontSize: '12px',
  fontWeight: '600',
};

const labelStyle = {
  color: 'mediumGray',
  fontFamily: 'body',
  fontSize: '11px',
  fontWeight: '600',
  mb: '5px',
  mt: '7px',
};

const descriptionStyle = {
  color: 'black',
  fontFamily: 'heading',
  fontSize: '13px',
  fontWeight: '600',
};

const decorationStyle = {
  bg: 'yellow',
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '3px',
};

const cardStyle = {
  overflow: 'hidden',
  pl: '16px',
  position: 'relative',
};

const Mandatairelist = (props) => {
  const { isWoman } = props;
  return (
    <Card sx={cardStyle} width="100%">
      <Box sx={decorationStyle} />
      <Flex sx={MandatairelistStyle} {...props}>
        <Flex sx={{ color: 'black', width: '32px' }} alignItems="center" justifyContent="center">
          <Box>{isWoman ? <Female size="32" /> : <Male size="32" />}</Box>
        </Flex>
        <Flex sx={columnStyle}>
          <Text sx={titleStyle}>
            Jeanne Lerry <Text sx={statusStyle}>disponible</Text>
          </Text>
          <Text sx={subtitleStyle}>Individuel</Text>
        </Flex>
        <Flex sx={columnStyle}>
          <Text sx={labelStyle}>Ville</Text>
          <Text sx={descriptionStyle}>Lyon</Text>
        </Flex>
        <Flex sx={columnStyle}>
          <Text sx={labelStyle}>Distance</Text>
          <Text sx={descriptionStyle}>12 km</Text>
        </Flex>
        <Flex sx={columnStyle}>
          <Text sx={labelStyle}>Dispo</Text>
          <Text sx={descriptionStyle}>15</Text>
        </Flex>
        <Flex sx={columnStyle}>
          <Text sx={labelStyle}>Email</Text>
          <Text sx={descriptionStyle}>johnhenry@gmail.com</Text>
        </Flex>
        <Flex sx={columnStyle}>
          <Text sx={labelStyle}>Téléphone</Text>
          <Text sx={descriptionStyle}>0683968574</Text>
        </Flex>
        <Box>
          <Button variant="outline">Voir le cv</Button>
        </Box>
      </Flex>
    </Card>
  );
};

Mandatairelist.propTypes = {
  isWoman: PropTypes.bool,
};

Mandatairelist.defaultProps = {
  isWoman: false,
};

export { Mandatairelist };
