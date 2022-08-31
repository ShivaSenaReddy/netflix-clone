import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Layoutlist from './Layoutlist';
import request from "./Request"
import Banner from './Banner';
import Nav from './Nav';
function App() {
 
  return (
      <div className="App">
          <Nav/>
          <Banner/>
          <h2 className='section'>Netflix Originals</h2>
          <Layoutlist category={request.fetchNetflix}/>
          <h2 className='section'>Trending Now</h2>
          <Layoutlist category={request.fetchTrending} />
          <h2 className='section'>Popular Movies</h2>
          <Layoutlist category={request.fetchPopular} />
          <h2 className='section'>Top Rated Movies</h2>
          <Layoutlist category={request.fetchTopRated} />
          <h2 className='section'>Action Movies</h2>
          <Layoutlist category={request.fetchAction} />
          <h2 className='section'>SciFi Movies</h2>
          <Layoutlist category={request.fetchSciFi} />
          <h2 className='section'>Animation Movies</h2>
          <Layoutlist category={request.fetchAnimation} />
          <h2 className='section'>Family Movies</h2>
          <Layoutlist category={request.fetchFamily} />
    </div>
  );
}

export default App;
