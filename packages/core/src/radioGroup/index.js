import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Box, Flex} from 'rebass';

import {Radio} from '../radio';

export const RadioGroup = (props) => {
  const {options, onChange, defaultValue} = props;
  const [currentRadio, toogleRadio] = useState(null);

  useEffect(() => {
    toogleRadio(defaultValue);
  }, []);

  return (
    <Box onChange={onChange(currentRadio)} width="100%">
      <Flex flexWrap="wrap">
        {options.map((option) => {
          return (
            <Box key={option.value} width={[1]} mb={1}>
              <Radio
                onChange={() => toogleRadio(option.value)}
                id={option.value}
                label={option.label}
                checked={option.checked || option.value === currentRadio}
                name={option.name}
              />
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

RadioGroup.defaultProps = {
  defaultValue: 'null',
};
