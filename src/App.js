import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header   from './components/header/header';
import Footer   from './components/footer/footer';

import Home     from './components/home/home';
import OurStory from './components/OurStory/ourstory';
import Details  from './components/details/details';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/story"   element={<OurStory />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
