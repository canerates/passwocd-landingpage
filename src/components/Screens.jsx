import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick';
import account_menu from '../assets/screens/account_menu.png';
import home1 from '../assets/screens/home1.png';
import home2 from '../assets/screens/home2.png'
import languages from '../assets/screens/languages.png';
import myAccountsEdit from '../assets/screens/my_accounts_edit.png';
import myAccounts from '../assets/screens/my_accounts.png';
import myPlatformsEdit from '../assets/screens/my_platforms_edit.png';
import myPlatforms from '../assets/screens/my_platforms.png';
import platformMenu from '../assets/screens/platform_menu.png';
import settingsScreen from '../assets/screens/settings.png';

var settings = {
    centerMode: true,
    centerPadding: '140px',
    infinite: true,
    autoplay: true,
    arrows: false,
    swipeToSlide: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '0',
                padding: '0'
                
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '120px'
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '200px'
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerPadding: '40px'
            }
        }

    ]
};

const Screens = () => {
    return(
        <section id='screens'>
            <Container>
                <Row>
                    <Col xs='12' className='section-padding-top' >
                        <div className='swiper-container'>
                            <div className='swiper-wrapper'>
                                <Slider className='screens-slider' {...settings}>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={home1} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={platformMenu} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={account_menu} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={home2} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={settingsScreen} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={myPlatforms} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={myPlatformsEdit} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={myAccounts} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={myAccountsEdit} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={languages} />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Screens;