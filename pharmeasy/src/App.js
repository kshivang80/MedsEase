import Navbar from './Components/Navbar/Navbar';
import AllRouter from './Routes/AllRouter';
import Footer from './Components/Footer/Footer';
import OfferItem from './Pages/Offers/OfferItem';

function App() {
  return (
    <div className="App">
       <Navbar/>
      {/* <AllRouter/> */}
      <OfferItem/>
       <Footer/>
    </div>
  );
}

export default App;
