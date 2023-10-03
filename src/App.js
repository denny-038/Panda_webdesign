import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Helmet from 'react-helmet';
import Homepage from './pages/homepage';
import TransactionFailed from './pages/coco_transaction/transaction_failed';
import TransactionSuccess from './pages/coco_transaction/transaction_success';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Panda Analytics</title>
      </Helmet>

      <BrowserRouter>	
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="transaction_success.html" element={<TransactionSuccess />} />
          <Route path="transaction_failed.html" element={<TransactionFailed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
