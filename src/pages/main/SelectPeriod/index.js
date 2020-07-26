import React from 'react';
import { Radio } from '@material-ui/core';

import { useDataPlans } from '../../../hooks/plans.context';

import {
  Container,
  SelectPeriodTitle,
  ContentRadio,
  RadioButtonPanel
} from './styles';

const PeriodSelector = () => {
  const { paymentPeriod, setPaymentPeriod, paymentOptions } = useDataPlans();

  return (
    <Container>
      <SelectPeriodTitle>Quero pagar a cada:</SelectPeriodTitle>
      <ContentRadio
        aria-label="Selecione um período para pagamento!"
        name="selectedPeriod"
        value={paymentPeriod}
        onChange={e => setPaymentPeriod(e.target.value)}
        row
        style={{}}
      >
        {paymentOptions.map(option => (
          <RadioButtonPanel
            key={`option_${option.value}`}
            value={option.value}
            control={<Radio />}
            label={option.label}
            style={{}}
            active={paymentPeriod === option.value}
          />
        ))}
      </ContentRadio>
    </Container>
  )
}

export default PeriodSelector;
