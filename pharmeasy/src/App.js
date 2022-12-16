
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AllRouter from './Routes/AllRouter';
import Footer from './Components/Footer/Footer';
import Plus from './Pages/Plus/Plus';
import FAQ from './Pages/Plus/FAQ';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <AllRouter/>
       <Footer/>
       {/* <Plus/> */}
       {/* <FAQ/> */}
    </div>
  );
}

export default App;
