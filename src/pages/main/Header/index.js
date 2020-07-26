import React from "react";

import ArrowDropDownButton from '../../../assets/icon_arrow_down.svg';

import CheckIcon from '@material-ui/icons/Check';

import {
  Container,
  HeaderContainer,
  Content,
  TitleHeader,
  DescriptionHeader,
  DescriptionContent,
  DescriptionView,
  BoxContainer
} from './styles'

const Header = () => {
  return (
      <>
      <Container>
        <HeaderContainer>
          <Content>
            <TitleHeader>Hospedagem de Sites</TitleHeader>
            <DescriptionHeader>
              <p>
                Tenha uma hospedagem de sites estável e
                evite perder visitantes diariamente
              </p>
            </DescriptionHeader>

            <DescriptionContent>
              <DescriptionView>
                <CheckIcon />
                <span>
                  99,9% de disponibilidade: seu site sempre no ar
                </span>
              </DescriptionView>

              <DescriptionView>
                <CheckIcon  />
                <span>Suporte 24h, todos os dias</span>
              </DescriptionView>

              <DescriptionView>
                <CheckIcon  />
                <span>Painel de Controle cPanel</span>
              </DescriptionView>

            </DescriptionContent>

          </Content>
        </HeaderContainer>

        <BoxContainer>
          <svg viewBox="0 0 500 50" preserveAspectRatio="none">
            <path d="M0.00,00.00 C250.00,20 250.00,20 500.00,00.00 L500.00,0.00 L0.00,0.00 Z"></path>
          </svg>
          <a href="/" title="Go to Plans" alt="Go to Plans">
            <img src={ArrowDropDownButton} alt="ButtomArrowDown" />
          </a>
        </BoxContainer>
      </Container>


    </>

  );
};

export default Header;
