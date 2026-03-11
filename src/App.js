import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header   from './assets/header/header';
import Footer   from './assets/footer/footer';

import Home     from './pages/home/home';
import OurStory from './pages/OurStory/ourstory';
import Details  from './pages/details/details';
import RSVP from './pages/rsvp/rsvp';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/story"   element={<OurStory />} />
          <Route path="/details" element={<Details />} />
          <Route path="/rsvp" element={<RSVP />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
