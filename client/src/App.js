import Layout from './components/Layout/Layout'
import About from './pages/About/About';
import Techstack from './pages/Techstack/Techstack'
import Projects from './pages/Projects/Projects';
import Education from './pages/Educations/Education';
import WorkExp from './pages/WorkExp/WorkExp';
import Contact from './pages/Contact/Contact';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemeContext';
import MobileNav from './components/MobileNav/MobileNav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme] = useTheme()
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav/>
        <Layout />
        <div className='container'>
          <About/>
          <Education/>
          <Techstack/>
          <Projects/>
          <WorkExp/>
          <Contact/>
        </div>
        <div className="footer pb-3 ms-3">
          <h4 className='text-center'>Made by 😊 S.Dilaxshan &copy; 2023</h4>
        </div>
      </div>
      <ScrollToTop smooth color='#fff' style={{backgroundColor:'#1e1e2c',borderRadius:'80px'}}/>
    </>
  );
}

export default App;
