import React, { Component } from 'react';
import styled from 'styled-components';
import image from './assets/pressure.jpg';

import {
  Card,
  CardContent,
  Typography
} from '@material-ui/core';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
`;

const CardContainer = styled.div`
  margin: 10px;
`;

const CardContentStyled = styled(CardContent)`
  && {
    padding: 0;
  }
`;

const ImageContainer = styled.div`
  height: 200px;
`;

const Image = styled.div`
  height: 100%;
  background-image: url('${image}');
  background-size: cover;
  background-position: center;
`;

const DetailsContainer = styled.div`
  padding: 10px;
`;

const Title = styled(Typography)`
  && {
    font-size: 24px;
    padding-bottom: 8px;
    font-weight: 900;
  }
`;

const Text = styled(Typography)`
  && {
    font-size: 20px;
    line-height: 120%;
  }
`;
class App extends Component {
  render() {
    return (
      <Wrapper>
        <CardContainer>
          <Card>
            <CardContentStyled>
              <ImageContainer>
                <Image />
              </ImageContainer>
              <DetailsContainer>
                <Title component='div'>Do a Lightning Talk</Title>
                <Text>Schalk pressured me into this!!!</Text>
              </DetailsContainer>
            </CardContentStyled>
          </Card>
        </CardContainer>
        <CardContainer>
          <Card>
            <CardContentStyled>
              <ImageContainer>
                <Image />
              </ImageContainer>
              <DetailsContainer>
                <Title component='div'>Do a Lightning Talk</Title>
                <Text>Schalk pressured me into this!!!</Text>
              </DetailsContainer>
            </CardContentStyled>
          </Card>
        </CardContainer>
        <CardContainer>
          <Card>
            <CardContentStyled>
              <ImageContainer>
                <Image />
              </ImageContainer>
              <DetailsContainer>
                <Title component='div'>Do a Lightning Talk</Title>
                <Text>Schalk pressured me into this!!!</Text>
              </DetailsContainer>
            </CardContentStyled>
          </Card>
        </CardContainer>
      </Wrapper>
    );
  }
}

export default App;
