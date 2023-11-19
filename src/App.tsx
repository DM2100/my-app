import './components/navbar.css'
import './components/cards.css'
import './components/filters.css'
import './components/footer.css'
import 'font-awesome/css/font-awesome.min.css';
import { Navbar } from './components/navbar';
import Footer from './components/footer';
import Filters from './components/filters';
import Cards from './components/cards';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Filters/>
    <Cards name={''} gender={''} price={0} image={''} brand={''}/>
    <Footer/>
    </div>
  );
}

export default App;
