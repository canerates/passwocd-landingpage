import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick';
import addMoble from '../assets/screens/add_moble-min.png';
import addTag from '../assets/screens/add_tag-min.png';
import quickview from '../assets/screens/quickview-min.png'
import arLighting from '../assets/screens/ar_lighting-min.png';
import arMoble from '../assets/screens/ar_moble-min.png';
import editMoble from '../assets/screens/edit_moble-min.png';
import editTag from '../assets/screens/edit_tag-min.png';
import homeTab from '../assets/screens/home_tab-min.png';
import mobleEditor from '../assets/screens/moble_editor-min.png';
import mobleList from '../assets/screens/moble_list-min.png';
import tagDetail from '../assets/screens/tag_detail-min.png';
import tagList from '../assets/screens/tag_list-min.png';

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
                                        <img alt='' className='screens-img' src={homeTab} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={mobleList} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={quickview} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={tagList} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={tagDetail} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={mobleEditor} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={editMoble} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={editTag} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={arMoble} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={arLighting} />
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