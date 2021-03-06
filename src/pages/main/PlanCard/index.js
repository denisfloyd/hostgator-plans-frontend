import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useDataPlans } from '../../../hooks/plans.context';

import {
  Container,
  CardHeader,
  SeparatorLine,
  CardPrices,
  PriceContainer,
  PriceByMonthContainer,
  ButtonContainer,
  TextYearFree,
  IconInfoContainer,
  DiscountContainer,
  DiscountText,
  CardInfo,
  PlanText
} from './styles';

export const PlanCard = props => {
  const { plan, image } = props;

  const { paymentPeriod } = useDataPlans();

  // useMemo calculator
  const priceFormatted = useMemo(() => {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(plan.cycle[paymentPeriod].priceOrder);
  }, [paymentPeriod, plan.cycle]);

  // useMemo calculator Total
  const priceFormattedWithDiscount = useMemo(() => {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(
      plan.cycle[paymentPeriod].priceOrder -
      (plan.cycle[paymentPeriod].priceOrder * 40) / 100
    );
  }, [paymentPeriod, plan.cycle]);

  // useMemo calculator Total by month
  const priceFormattedWithDiscountByMonth = useMemo(() => {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(
      (plan.cycle[paymentPeriod].priceOrder -
      (plan.cycle[paymentPeriod].priceOrder * 40) / 100) /
      plan.cycle[paymentPeriod].months
    );
  }, [paymentPeriod, plan.cycle]);

  // useMemo calculator Total discount
  const discountValue = useMemo(() => {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(
      (plan.cycle[paymentPeriod].priceOrder * 40) / 100
    );
  }, [paymentPeriod, plan.cycle]);

  return (
    <Container highlighted={plan.name === 'Plano M'}>
      <CardHeader>
        <img src={image} alt={`card_header_img_${plan.name}`} />
        <p>{plan.name}</p>
      </CardHeader>

      <SeparatorLine />

      <CardPrices>
        <PriceContainer>
          <span>
            { priceFormatted }
          </span>
          &nbsp;
          { priceFormattedWithDiscount }
        </PriceContainer>

        <PriceByMonthContainer>
          R$
          <span>
            { priceFormattedWithDiscountByMonth }
          </span>
          /m??s*
        </PriceByMonthContainer>

        <Link to={`/?a=add&pid=${plan.id}&billingcycle=${paymentPeriod}&promocode=PROMOHG40`} >
          <ButtonContainer
            isSelected={plan.name === 'Plano M'}
            // onClick={() => {
            //   window.location.href = `/?a=add&pid=${plan.id}&billingcycle=${paymentPeriod}&promocode=PROMOHG40`;
            // }}
          >
            Contrate Agora
          </ButtonContainer>
        </Link>

        <TextYearFree>
          1 ano de Dom??nio Gr??tis&nbsp;
          <IconInfoContainer />
        </TextYearFree>

        <DiscountContainer>
          <DiscountText>
            economize{' '}
            { discountValue }{' '}
          </DiscountText>
          <span>40% OFF</span>
        </DiscountContainer>
      </CardPrices>

      <SeparatorLine />

      <CardInfo>
        <PlanText>
          <span>{plan.name === 'Plano P' ? 'Para 1 site' : 'Sites Ilimitados'}</span>
        </PlanText>

        <PlanText>
          <span>
            <b>{plan.name === 'Plano Turbo' ? '150' : '100'} GB</b> de Armazenamento
          </span>
        </PlanText>

        <PlanText>
          <span>
            Contas de E-mail <b>Ilimitadas</b>
          </span>
        </PlanText>

        <PlanText>
          <span>
            Criador de Sites{' '}
            <b>
              <u>Gr??tis</u>
            </b>
          </span>
        </PlanText>

        <PlanText>
          <span>
            Certificado SSL <strong>Gr??tis</strong> (HTTPS)
          </span>
        </PlanText>
      </CardInfo>

    </Container>
  );
};

export default PlanCard;
