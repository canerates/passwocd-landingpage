import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom'
import logo from '../assets/webpage-logo.png';

function Footer() {

    const { t, i18n } = useTranslation();
  
    useEffect(() => {
      const lng = navigator.language;
      i18n.changeLanguage(lng);
    }, []);
  
    return(
        <section id='footer'>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12' xs='12'>

                        <div className='footer-logo'>
                            <img src={logo} alt=''/>
                        </div>
                    </Col>
                    <Col lg='6' md='6' sm='12' xs='12'>
                        <ul className='footer-social'>

                            <li className='footer-item'>
                                <a href='mailto:cnrates@gmail.com'>
                                {t('translations:contact')}
                                </a>
                            </li>
                            <li className='footer-item'>
                                <Link to='/privacy'>
                                {t('translations:privacy_policy')}
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col lg='12'>
                        <p> © 2024 PasswOCD</p>
                    </Col>
                </Row>
            </Container>
        </section>
        
    );
  }
  
  export default Footer;