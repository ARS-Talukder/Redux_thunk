import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Provider } from "react-redux";
import Header from './pages/Shared/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import TopRated from './pages/TopRated/TopRated';
import Carts from './pages/Cart/Carts';
import WishLists from './pages/Wishlist/WishLists';
import store from './redux/store';


function App() {
  return (
    <>
      <Provider store={store}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/wishlists" element={<WishLists />} />
        </Routes>
      </Provider>

    </>
  )
}

export default App
