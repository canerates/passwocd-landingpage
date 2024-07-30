import Main from '../components/Main';
import Screens from '../components/Screens'
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import Features from '../components/Features';


function Home() {
  
    return(
        <>
            <NavigationBar />
            <Main />
            <Features />
            <Screens />
            <Footer />
        </>
    );
  }
  
  export default Home;