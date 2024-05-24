import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Landing from "./components/Landing";
import ListPhone from "./components/ListPhone";
import DetailsProducts from "./components/DetailsProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/phonesList' element={<ListPhone />} />
            <Route path='/detailsProducts' element={<DetailsProducts />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>

  );
}

export default App;
