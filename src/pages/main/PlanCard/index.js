import React from 'react';

import {
  Container,
  CardHeader,
  SeparatorLine
} from './styles';

export const PlanCard = props => {
  const { plan, image } = props;

  // useMemo calculator

  return (
    <Container highlighted={plan.name === 'Plano M'}>
      <CardHeader>
        <img src={image.img} alt={`card_header_img_${plan.name}`} />
        <p>{plan.name}</p>
      </CardHeader>

      <SeparatorLine />

      {/* <CardPriceSection product={product} /> */}

      <SeparatorLine />

      {/* <CardInfoSection product={product} /> */}
    </Container>
  );
};

export default PlanCard;
