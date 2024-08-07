import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col} from 'reactstrap';
import { AppStoreButton } from "react-mobile-app-button";
import imageHorizontal from '../assets/home.png'
import imageVertical from '../assets/home2.png';

function Main() {

    const { t, i18n } = useTranslation();
  
    useEffect(() => {
      const lng = navigator.language;
      i18n.changeLanguage(lng);
    }, []);

    const iOSUrl = 'https://apps.apple.com/app/passwocd-password-generator/id6529549759'
    return(
        <section id='main'>
            <Container>
                <Row className='row-center'>
                    <Col lg='8' md='8' sm='12' xs='12' className='section-padding-top'>
                        <img src={imageVertical} alt="" className='image-vertical'/>
                        <img src={imageHorizontal} alt="" className='image-horizontal'/>
                    </Col>
                    <Col lg='4' md='4' sm='12' xs='12' className='main-description col-pb-30'>
                        <Row>
                            <h1 className='main-h1'><span className='main-span'>{t('translations:main_title_p1')}</span></h1>
                        </Row>
                        <Row>
                            <h1 className='main-h1'>{t('translations:main_title_p2')}</h1>
                        </Row>
                        <Row>
                            <p className='details'>{t('translations:main_description')}</p>
                        </Row>
                        <Row>
                            <div className='app-store-button'>
                                <AppStoreButton
                                    url={iOSUrl}
                                    theme={"dark"}
                                    height={60}
                                />
                            </div>
                        </Row>
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
};

export default Main;