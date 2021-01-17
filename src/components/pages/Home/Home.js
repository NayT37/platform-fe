import React from 'react';
// Components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {Heading} from '../../atoms/Heading/Heading';
import {LearningStatus} from '../../molecules/LearningStatus/LearningStatus';
import {Swiper, SwiperSlide} from 'swiper/react';
import {SwiperButton} from '../../atoms/SwiperButton/SwiperButton';
import SwiperCore, {Navigation, Pagination} from 'swiper';
// Resources
import './Home.scss';
import lrngIcon from '../../../utils/img/english.png';
import bannerBG from '../../../utils/img/banner-bg.png';
import bannerImg from '../../../utils/img/banner-img.png';
import eventIcon from '../../../utils/img/recent-event.png';
import swiperBG from '../../../utils/img/slider.png';

SwiperCore.use([Navigation, Pagination]);

export const Home = () => {
  const learningData = {icon: lrngIcon, subject: 'English'};
  const sliderData = [
    {title: 'Youth Talent & Education', date: 'May, 20', tag: 'science'},
    {title: 'Slider number 2', date: 'May, 21', tag: 'science'},
    {title: 'Slider Number 3', date: 'May, 22', tag: 'science'},
  ];
  const eventsData = [
    {icon: eventIcon, hour: '10:30AM', title: 'Webinar the basics of English'},
    {icon: eventIcon, hour: '10:30AM', title: 'Team Building Activity 🔥'},
  ];

  return (
    <div className="page home">
      <Container>
        {/* Header */}
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
                  <Heading headLevel={2} className="h3 home__header__banner__content__title">
                    Welcome back, Clarence
                  </Heading>
                  <p className="home__header__banner__content__sub-title">Ta-da! You're up to date. 🥳</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        {/* Events */}
        <div className="home__events">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Heading headLevel={3} className="home__title">
                Events
              </Heading>
            </Grid>
            <Grid item xs={12} lg={8} className="home__events__row home__events__row--swiper">
              <Swiper
                loop={true}
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides={true}
                navigation={{
                  nextEl: '.home__events__swiper__btn--next',
                  prevEl: '.home__events__swiper__btn--prev',
                }}
                pagination={{
                  clickable: true,
                  el: '#home__events__swiper__paginator',
                }}>
                {sliderData.map((slide, i) => (
                  <SwiperSlide key={i}>
                    <div className="home__events__swiper__slide" style={{backgroundImage: `url(${swiperBG})`}}>
                      <Heading headLevel={4} className="home__events__swiper__slide__title h2">
                        {slide.title}
                      </Heading>
                      <Heading headLevel={4} className="home__events__swiper__slide__date h2">
                        {slide.date}
                      </Heading>
                      <div className="home__events__swiper__slide__tag">{slide.tag}</div>
                    </div>
                  </SwiperSlide>
                ))}
                <SwiperButton className="home__events__swiper__btn home__events__swiper__btn--prev" isPrev />
                <SwiperButton className="home__events__swiper__btn home__events__swiper__btn--next" />
              </Swiper>
              <div className="home__events__swiper__paginator" id="home__events__swiper__paginator"></div>
            </Grid>
            <Grid item xs={12} lg={4} className="home__events">
              <div className="home__events__recent">
                <div className="home__events__recent__header">
                  <Heading headLevel={4} className="home__events__recent__header__title home__title h6">
                    Events Today
                  </Heading>
                </div>
                {eventsData.map((event, i) => (
                  <div className="home__events__recent__card plt-card" key={i}>
                    <div className="home__events__recent__card__fig">
                      <img src={event.icon} alt="Icon" />
                    </div>
                    <div className="home__events__recent__card__content">
                      <p className="home__events__recent__card__content__hour">{event.hour}</p>
                      <Heading headLevel={5} className="home__events__recent__card__content__title h4">
                        {event.title}
                      </Heading>
                    </div>
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};
