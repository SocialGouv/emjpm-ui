import {jsx} from '@emotion/core';
import React, {Component, Fragment} from 'react';
import styled from '@emotion/styled';
import {
  Text,
  Text1,
  Text1Bold,
  Text1S,
  Text1M,
  Text1L,
  Text2,
  Text2Bold,
  Text2S,
  Text2M,
  Text2L,
  Text3,
  Text3Bold,
  Text3S,
  Text3M,
  Text3L,
} from '.';

export default {
  title: 'Design System|Text',
  component: Text,
};

export const TextStory = () => (
  <Fragment>
    <h2>basic text element</h2>
    <p>fontSize: 14px</p>
    <p>fontWeight: 500</p>
    <p>color: #333333</p>
    {/* start copy */}
    <Text>
      Le MJPM a le devoir d’informer la personne, cette information doit être adaptée au degré de compréhension de la
      personne protégée.
    </Text>
    {/* end copy */}
  </Fragment>
);

export const Text1Story = () => (
  <Text1>
    Le MJPM a pour mission d’assister et de contrôler ou de représenter les personnes qui en raison d’une altération de
    leurs facultés, ne sont plus capables de défendre seules leurs intérêts.
  </Text1>
);

export const Text1MStory = () => (
  <Text1M>
    Le MJPM a le devoir d’informer la personne, cette information doit être adaptée au degré de compréhension de la
    personne protégée.
  </Text1M>
);

export const Text1LStory = () => (
  <Text1L>
    Le MJPM a le devoir d’informer la personne, cette information doit être adaptée au degré de compréhension de la
    personne protégée.
  </Text1L>
);

export const Text1BoldStory = () => (
  <Text1Bold>
    Le MJPM a le devoir d’informer la personne, cette information doit être adaptée au degré de compréhension de la
    personne protégée.
  </Text1Bold>
);

export const Text2SStory = () => (
  <Text2S>
    Le MJPM a le devoir d’informer la personne, cette information doit être adaptée au degré de compréhension de la
    personne protégée.
  </Text2S>
);

export const Text2Story = () => (
  <Text2>
    Le MJPM a le devoir d’informer la personne, cette information doit être adaptée au degré de compréhension de la
    personne protégée. export const HeadingStory1 = () =>{' '}
  </Text2>
);

export const Text2MStory = () => (
  <Text2M>
    Le MJPM a le devoir d’informer la personne, cette information doit être adaptée au degré de compréhension de la
    personne protégée.
  </Text2M>
);

export const Text2LStory = () => (
  <Text2L>
    Le MJPM a le devoir d’informer la personne, cette information doit être adaptée au degré de compréhension de la
    personne protégée.
  </Text2L>
);

export const Text2BoldStory = () => (
  <Text2Bold>
    Le MJPM a le devoir d’informer la personne, cette information doit être adaptée au degré de compréhension de la
    personne protégée.
  </Text2Bold>
);

export const Text3SStory = () => (
  <Text3S>
    Le MJPM a le devoir d’informer la personne, cette information doit être adaptée au degré de compréhension de la
    personne protégée.
  </Text3S>
);

export const Text3Story = () => (
  <Text3>
    Le MJPM a le devoir d’informer la personne, cette information doit être adaptée au degré de compréhension de la
    personne protégée.
  </Text3>
);

export const Text3MStory = () => (
  <Text3M>
    Le MJPM a le devoir d’informer la personne, cette information doit être adaptée au degré de compréhension de la
    personne protégée.
  </Text3M>
);

export const Text3LStory = () => (
  <Text3L>
    Le MJPM a le devoir d’informer la personne, cette information doit être adaptée au degré de compréhension de la
    personne protégée.
  </Text3L>
);

export const Text3BoldStory = () => (
  <Text3Bold>
    Le MJPM a le devoir d’informer la personne, cette information doit être adaptée au degré de compréhension de la
    personne protégée.
  </Text3Bold>
);
