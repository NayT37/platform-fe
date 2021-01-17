import React from 'react';
// Components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {Heading} from '../../atoms/Heading/Heading';
import {LearningStatus} from '../../molecules/LearningStatus/LearningStatus';
// Resources
import './Home.scss';
import lrngIcon from '../../../utils/img/english.png';
import bannerBG from '../../../utils/img/banner-bg.png';
import bannerImg from '../../../utils/img/banner-img.png';

export const Home = () => {
  const learningData = {icon: lrngIcon, subject: 'English'};

  return (
    <div className="page home">
      <Container>
        <div className="home__header">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={8} lg={10} className="home__header__row">
              <Heading headLevel={1} className="h3 home__title">
                Dashboard
              </Heading>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <LearningStatus {...learningData} />
            </Grid>
            <Grid item xs={12}>
              <div className="home__header__banner" style={{backgroundImage: `url(${bannerBG})`}}>
                  <img className="home__header__banner__fig" src={bannerImg} alt="" />
                <div className="home__header__banner__content">
                    <Heading className="home__header__banner__content__title">Welcome back, Clarence</Heading>
                    <p className="home__header__banner__content__sub-title">Ta-da! You're up to date. 🥳</p>
  
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};
