import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom'

function Privacy() {

    const { t, i18n } = useTranslation();
  
    useEffect(() => {
      const lng = navigator.language;
      i18n.changeLanguage(lng);
    }, []);

    return(
        <section id='privacy'>
            <Container>
                <Row className='row-center'>
                    <Col>
                    <p className='back-link'>
                        <Link to='/'>← {t('translations:back')}</Link>
                    </p>
                    <h1>{t('translations:privacy_policy')}</h1>

                        <p>{t('translations:privacy_h1_p1')}</p>
                        <p>{t('translations:privacy_h1_p2')}</p>
                        <p>{t('translations:privacy_h1_p3')}</p>

                    <h2>{t('translations:privacy_h2_1')}</h2>

                    <h3>{t('translations:privacy_h3_1')}</h3>
                    <p>{t('translations:privacy_h3_1_p1')}</p>

                    <h3>{t('translations:privacy_h3_2')}</h3>
                    <p>{t('translations:privacy_h3_2_p1')}</p>
                    <ul>
                        <li><span>{t('translations:privacy_h3_2_li1_span')}</span> {t('translations:privacy_h3_2_li1')}</li>
                        <li><span>{t('translations:privacy_h3_2_li2_span')}</span> {t('translations:privacy_h3_2_li2')}</li>
                        <li><span>{t('translations:privacy_h3_2_li3_span')}</span> {t('translations:privacy_h3_2_li3')}</li>
                        <li><span>{t('translations:privacy_h3_2_li4_span')}</span> {t('translations:privacy_h3_2_li4')}</li>
                        <li><span>{t('translations:privacy_h3_2_li5_span')}</span> {t('translations:privacy_h3_2_li5')}</li>
                        <li><span>{t('translations:privacy_h3_2_li6_span')}</span> {t('translations:privacy_h3_2_li6')}</li>
                        <li><span>{t('translations:privacy_h3_2_li7_span')}</span> {t('translations:privacy_h3_2_li7')}</li>
                        <li><span>{t('translations:privacy_h3_2_li8_span')}</span> {t('translations:privacy_h3_2_li8')}</li>
                        <li><span>{t('translations:privacy_h3_2_li9_span')}</span> {t('translations:privacy_h3_2_li9')}</li>
                        <li><span>{t('translations:privacy_h3_2_li10_span')}</span> {t('translations:privacy_h3_2_li10')}</li>
                        <li><span>{t('translations:privacy_h3_2_li11_span')}</span> {t('translations:privacy_h3_2_li11')}</li>
                    </ul>

                    <h2>{t('translations:privacy_h2_2')}</h2>

                    <h3>{t('translations:privacy_h3_3')}</h3>
                    <h4>{t('translations:privacy_h4_1')}</h4>
                    <p>{t('translations:privacy_h4_1_p1')}</p>
                    <ul>
                        <li>{t('translations:privacy_h4_1_li1')}</li>
                    </ul>
                    <h4>{t('translations:privacy_h4_2')}</h4>
                    <p>{t('translations:privacy_h4_2_p1')}</p>
                    <p>{t('translations:privacy_h4_2_p2')}</p>
                    <p>{t('translations:privacy_h4_2_p3')}</p>
                    <p>{t('translations:privacy_h4_2_p4')}</p>

                    <h3>{t('translations:privacy_h3_4')}</h3>
                    <p>{t('translations:privacy_h3_4_p1')}</p>
                    <ul>
                        <li><span>{t('translations:privacy_h3_4_p1_li1_span')}</span> {t('translations:privacy_h3_4_p1_li1')}</li>
                        <li><span>{t('translations:privacy_h3_4_p1_li2_span')}</span> {t('translations:privacy_h3_4_p1_li2')}</li>
                        <li><span>{t('translations:privacy_h3_4_p1_li3_span')}</span> {t('translations:privacy_h3_4_p1_li3')}</li>
                        <li><span>{t('translations:privacy_h3_4_p1_li4_span')}</span> {t('translations:privacy_h3_4_p1_li4')}</li>
                        <li><span>{t('translations:privacy_h3_4_p1_li5_span')}</span> {t('translations:privacy_h3_4_p1_li5')}</li>
                        <li><span>{t('translations:privacy_h3_4_p1_li6_span')}</span> {t('translations:privacy_h3_4_p1_li6')}</li>
                        <li><span>{t('translations:privacy_h3_4_p1_li7_span')}</span> {t('translations:privacy_h3_4_p1_li7')}</li>
                        <li><span>{t('translations:privacy_h3_4_p1_li8_span')}</span> {t('translations:privacy_h3_4_p1_li8')}</li>
                    </ul>
                    <p>{t('translations:privacy_h3_4_p2')}</p>
                    <ul>
                        <li><span>{t('translations:privacy_h3_4_p2_li1_span')}</span> {t('translations:privacy_h3_4_p2_li1')}</li>
                        <li><span>{t('translations:privacy_h3_4_p2_li2_span')}</span> {t('translations:privacy_h3_4_p2_li2')}</li>
                        <li><span>{t('translations:privacy_h3_4_p2_li3_span')}</span> {t('translations:privacy_h3_4_p2_li3')}</li>
                        <li><span>{t('translations:privacy_h3_4_p2_li4_span')}</span> {t('translations:privacy_h3_4_p2_li4')}</li>
                        <li><span>{t('translations:privacy_h3_4_p2_li5_span')}</span> {t('translations:privacy_h3_4_p2_li5')}</li>
                        <li><span>{t('translations:privacy_h3_4_p2_li6_span')}</span> {t('translations:privacy_h3_4_p2_li6')}</li>
                    </ul>

                    <h3>{t('translations:privacy_h3_5')}</h3>
                    <p>{t('translations:privacy_h3_5_p1')}</p>
                    <p>{t('translations:privacy_h3_5_p2')}</p>

                    <h3>{t('translations:privacy_h3_6')}</h3>
                    <p>{t('translations:privacy_h3_6_p1')}</p>
                    <p>{t('translations:privacy_h3_6_p2')}</p>
                    <p>{t('translations:privacy_h3_6_p3')}</p>

                    <h3>{t('translations:privacy_h3_7')}</h3>
                    <p>{t('translations:privacy_h3_7_p1')}</p>
                    <p>{t('translations:privacy_h3_7_p2')}</p>
                    <p>{t('translations:privacy_h3_7_p3')}</p>
                    <p>{t('translations:privacy_h3_7_p4')}</p>

                    <h3>{t('translations:privacy_h3_8')}</h3>
                    
                    <h4>{t('translations:privacy_h4_3')}</h4>
                    <p>{t('translations:privacy_h4_3_p1')}</p>
                    
                    <h4>{t('translations:privacy_h4_4')}</h4>
                    <p>{t('translations:privacy_h4_4_p1')}</p>
                    
                    <h4>{t('translations:privacy_h4_5')}</h4>
                    <p>{t('translations:privacy_h4_5_p1')}</p>
                    <ul>
                        <li>{t('translations:privacy_h4_5_li1')}</li>
                        <li>{t('translations:privacy_h4_5_li2')}</li>
                        <li>{t('translations:privacy_h4_5_li3')}</li>
                        <li>{t('translations:privacy_h4_5_li4')}</li>
                        <li>{t('translations:privacy_h4_5_li5')}</li>
                    </ul>
                    
                    <h3>{t('translations:privacy_h3_9')}</h3>
                    <p>{t('translations:privacy_h3_9_p1')}</p>
                    
                    <h2>{t('translations:privacy_h2_3')}</h2>
                    <p>{t('translations:privacy_h2_3_p1')}</p>
                    <p>{t('translations:privacy_h2_3_p2')}</p>
                    
                    <h2>{t('translations:privacy_h2_4')}</h2>
                    <p>{t('translations:privacy_h2_4_p1')}</p>
                    <p>{t('translations:privacy_h2_4_p2')}</p>

                    <h2>{t('translations:privacy_h2_5')}</h2>
                    <p>{t('translations:privacy_h2_5_p1')}</p>
                    <p>{t('translations:privacy_h2_5_p2')}</p>
                    <p>{t('translations:privacy_h2_5_p3')}</p>

                    <h2>{t('translations:privacy_h2_6')}</h2>
                    <p>{t('translations:privacy_h2_6_p1')}</p>
                    <ul>
                        <li>{t('translations:privacy_h2_6_li1')}</li>
                    </ul>

                    </Col>
                </Row>
            </Container>

        </section>

    );
};

export default Privacy;