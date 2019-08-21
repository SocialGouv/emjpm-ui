import React from 'react';
import { Box, Flex } from 'rebass';

import { Button } from '../../../core/src/Button';
import { Card } from '../../../core/src/Card';
import { Text } from '../../../core/src/Type';
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
  return (
    <Card sx={cardStyle} width="100%">
      <Box sx={decorationStyle} />
      <Flex sx={MandatairelistStyle} {...props}>
        <Box>
          <Flex sx={columnStyle}>
            <Text sx={titleStyle}>
              Jeanne Lerry <Text sx={statusStyle}>disponible</Text>
            </Text>
            <Text sx={subtitleStyle}>Individuel</Text>
          </Flex>
        </Box>
        <Box>
          <Flex sx={columnStyle}>
            <Text sx={labelStyle}>Commune</Text>
            <Text sx={descriptionStyle}>Arras</Text>
          </Flex>
        </Box>
        <Box>
          <Flex sx={columnStyle}>
            <Text sx={labelStyle}>Commune</Text>
            <Text sx={descriptionStyle}>Arras</Text>
          </Flex>
        </Box>
        <Box>
          <Flex sx={columnStyle}>
            <Text sx={labelStyle}>Commune</Text>
            <Text sx={descriptionStyle}>Arras</Text>
          </Flex>
        </Box>
        <Box>
          <Flex sx={columnStyle}>
            <Text sx={labelStyle}>Commune</Text>
            <Text sx={descriptionStyle}>Arras</Text>
          </Flex>
        </Box>
        <Box>
          <Flex sx={columnStyle}>
            <Text sx={labelStyle}>Commune</Text>
            <Text sx={descriptionStyle}>Arras</Text>
          </Flex>
        </Box>
        <Box>
          <Button variant="outline">Voir le cv</Button>
        </Box>
      </Flex>
    </Card>
  );
};

export { Mandatairelist };
