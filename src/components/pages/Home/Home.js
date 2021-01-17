import React, {useState} from 'react';
// Components
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import {CircularProgressbar} from 'react-circular-progressbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {Heading} from '../../atoms/Heading/Heading';
import {LearningStatus} from '../../molecules/LearningStatus/LearningStatus';
import {Swiper, SwiperSlide} from 'swiper/react';
import {SwiperButton} from '../../atoms/SwiperButton/SwiperButton';
import SwiperCore, {Navigation, Pagination} from 'swiper';

// Resources
import './Home.scss';
import arrow from '../../../utils/img/arrow-down.png';
import bannerBG from '../../../utils/img/banner-bg.png';
import bannerImg from '../../../utils/img/banner-img.png';
import eventIcon from '../../../utils/img/recent-event.png';
import {IoArrowForwardOutline} from 'react-icons/io5';
import lrngIcon from '../../../utils/img/english.png';
import swiperBG from '../../../utils/img/slider.png';

import accordionIcon_1 from '../../../utils/img/acc-1.png';
import accordionIcon_2 from '../../../utils/img/acc-2.png';
import accordionIcon_3 from '../../../utils/img/acc-3.png';

SwiperCore.use([Navigation, Pagination]);

export const Home = () => {
  const [expanded, setExpanded] = useState(false);

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

  /**
   * Method for controlled accordion group
   * @param {any} panel : Panel controlled
   */
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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

        {/* Activity */}
        <div className="home__activity">
          <div className="home__activity__header">
            <Heading className="home__activity__header__title home__title" headLevel={3}>
              Activity
            </Heading>
            <div className="home__activity__header__line"></div>
            <button className="home__activity__header__btn">
              <IoArrowForwardOutline size="15px" />
            </button>
          </div>
          <Accordion className="home__activity__acc" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary className="home__activity__acc__head" expandIcon={<img src={arrow} alt="Dropdown" />}>
              <img className="home__activity__acc__head__fig" src={accordionIcon_1} alt="Followers" />{' '}
              <Heading headLevel={4} className="home__activity__acc__head__title">
                You have new 5 followers including <strong>Kathryn Crawford</strong> and <strong>Piper Shaw</strong>
              </Heading>
            </AccordionSummary>
            <AccordionDetails>
              <p className="home__activity__acc__content">
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion className="home__activity__acc" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary className="home__activity__acc__head" expandIcon={<img src={arrow} alt="Dropdown" />}>
              <img className="home__activity__acc__head__fig" src={accordionIcon_2} alt="Followers" />
              <Heading headLevel={4} className="home__activity__acc__head__title">
                3 new events were added to your calendar
              </Heading>
            </AccordionSummary>
            <AccordionDetails>
              <p className="home__activity__acc__content">
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion className="home__activity__acc" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary className="home__activity__acc__head" expandIcon={<img src={arrow} alt="Dropdown" />}>
              <img className="home__activity__acc__head__fig" src={accordionIcon_3} alt="Followers" />{' '}
              <Heading headLevel={4} className="home__activity__acc__head__title">
                You have 3 pending readings to complete 🤓
              </Heading>
            </AccordionSummary>
            <AccordionDetails>
              <p className="home__activity__acc__content">
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
              </p>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* Progress */}
        <div className="home__progress">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} className="home__progress__row">
              <div className="home__progress__box">
                <Heading className="home__progress__box__title">Progress Overview</Heading>
                <div className="home__progress__box__data">
                  <CircularProgressbar className="home__progress__box__data__p-bar" value={40} text={`${40}%`} />
                  <div className="home__progress__box__data__wrapper">
                    <div className="data__wrapper__stats data__wrapper__stats--complete">
                      <div className="data__wrapper__stats__title">Completed</div>
                      <p className="data__wrapper__stats__info">
                        <span className="em">20</span> hours
                      </p>
                    </div>
                    <div className="data__wrapper__stats data__wrapper__stats--to-go">
                      <div className="data__wrapper__stats__title">Left to Go</div>
                      <p className="data__wrapper__stats__info">
                        <span className="em">30</span> hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        {/* End */}
      </Container>
    </div>
  );
};
