import React from 'react'
import { PageBudget } from './pages/pageBudget'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Ajouterdepense} from './pages/ajouterdepense';
import { Ajouterrevenu } from './pages/ajouterrevenu';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
     <Route path="/" element={< PageBudget/>} />
     <Route path="/ajouterrevenu" element={< Ajouterrevenu/>} />
     <Route path="/ajouterdepense" element={ <Ajouterdepense/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
