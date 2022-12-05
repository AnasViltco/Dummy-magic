// import React, { useState } from 'react';

// import location1 from './assets/yasBayLocImgs/WelcomeArch.png';
// import location2 from './assets/yasBayLocImgs/GiftBox.png';
// import location3 from './assets/yasBayLocImgs/ChristmasTree.png';
// import location4 from './assets/yasBayLocImgs/YBW.png';
// import location5 from './assets/yasBayLocImgs/Santa_sMailbox.png';
// import location6 from './assets/yasBayLocImgs/MarketPlace.png';
// import popup1 from './assets/yasBayPopupImgs/WelcomeArch.png';
// import popup2 from './assets/yasBayPopupImgs/GiftBox.png';
// import popup3 from './assets/yasBayPopupImgs/ChristmasTree.png';
// import popup4 from './assets/yasBayPopupImgs/YBW.png';
// import popup5 from './assets/yasBayPopupImgs/Santa_sMailbox.png';
// import popup6 from './assets/yasBayPopupImgs/MarketPlace.png';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Subscribe from "./Pages/subscribe";
import YasBayMap from "./Pages/yasBayMap";
import YasBayVendors from "./Pages/yasBayVendors";
import YasMarinaMap from "./Pages/yasMarinaMap";
import YasMarinaVendors from "./Pages/yasMarinaVendors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yasbaywaterfront" element={<YasBayMap />} />
        <Route path="/yasbayvendors" element={<YasBayVendors />} />
        <Route path="/yasmarina" element={<YasMarinaMap />} />
        <Route path="/yasmarinavendors" element={<YasMarinaVendors />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/yasbaywaterfront/1b" element={<YasBayMap/>} />
        <Route path="/yasbaywaterfront/2b" element={<YasBayMap/>} />
        <Route path="/yasbaywaterfront/3b" element={<YasBayMap/>} />
        <Route path="/yasbaywaterfront/4b" element={<YasBayMap/>} />
        <Route path="/yasbaywaterfront/5b" element={<YasBayMap/>} />
        <Route path="/yasbaywaterfront/6b" element={<YasBayMap/>} />
        <Route path="/yasmarina/1m" element={<YasMarinaMap />} />
        <Route path="/yasmarina/2m" element={<YasMarinaMap />} />
        <Route path="/yasmarina/3m" element={<YasMarinaMap />} />
        <Route path="/yasmarina/4m" element={<YasMarinaMap />} />
        <Route path="/yasmarina/5m" element={<YasMarinaMap />} />
        <Route path="/yasmarina/6m" element={<YasMarinaMap />} />
      </Routes>
    </Router>
  );
}

export default App;
