import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 14.6k (gzipped: 5.6k)
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import itemDetailContainer from './components/ItemDetailContainer/ItemDetailConteiner'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={ <ItemDetailContainer />}/>
        <Route path='*' element={<h1>404 NOT FOUND </h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;