import React from 'react';
import classes from './PeriodSelector.module.scss';

import icon_radio_off from '../../assets/imgs/icon_radio_off.svg'
import icon_radio_on from '../../assets/imgs/icon_radio_on.svg'

const PeriodSelector = () => {
  //const {  } = useDataPlans();

   
  return (
    <RadioGroupWrapper>
      <SelectPeriod>Quero pagar a cada:</SelectPeriod>
      <StyledRadioGroup
        aria-label="Selecione um período para pagamento!"
        name="selectedPeriod"
        value={context.paymentPeriod}
        onChange={e => context.setPaymentPeriod(e.target.value)}
        row
        style={{}}
      >
        {context.paymentOptions.map(option => (
          <StyledFormControlLabel
            key={`key_${option.value}`}
            value={option.value}
            control={<Radio />}
            label={option.label}
            style={{}}
            active={context.paymentPeriod === option.value}
          />
        ))}
      </StyledRadioGroup>
    </RadioGroupWrapper>
  )
}

export default PeriodSelector;
