import styled from '@emotion/styled';
import { useOnClickOutside } from '@socialgouv/emjpm-ui-core';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { Box, Flex, Text } from 'rebass';
import { ChevronDown } from 'styled-icons/evil';
import { UserCircle } from 'styled-icons/fa-regular';

import { Logo } from '../../../core/src/Logo';

const BlueUserCircle = styled(UserCircle)`
  color: #006be6;
`;

const Header = (props) => {
  const { DropDownMenu, username, dropDownLinks, Link, disconnect } = props;
  const ref = useRef();
  const [state, setState] = useState(false);
  useOnClickOutside(ref, () => setState(false));

  function toggle(event) {
    event.stopPropagation();
    setState(!state);
  }

  return (
    <Flex alignItems="center" flexWrap="wrap" justifyContent="space-between">
      <Box p={1}>
        <Logo hasTitle />
      </Box>
      <Box ref={ref} p={1} sx={{ position: 'relative' }}>
        <Flex onClick={toggle} sx={{ cursor: 'pointer' }} alignItems="center">
          <Box height="25px">
            <BlueUserCircle size={25} />
          </Box>
          <Box>
            <Text color="black" fontWeight="600" ml={1}>
              {username}
            </Text>
          </Box>
          <Box height="25px">
            <ChevronDown size={25} />
          </Box>
        </Flex>
        {state && <DropDownMenu disconnect={disconnect} Link={Link} dropDownLinks={dropDownLinks} />}
      </Box>
    </Flex>
  );
};

Header.propTypes = {
  DropDownMenu: PropTypes.elementType.isRequired,
  Link: PropTypes.elementType.isRequired,
  disconnect: PropTypes.func.isRequired,
  dropDownLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  username: PropTypes.string.isRequired,
};

export { Header };
