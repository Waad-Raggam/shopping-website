import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Landing from "./components/Landing";
import ListPhone from "./components/ListPhone";

function App() {
  return (
    <div className="App">
      <ListPhone/>
    </div>
  );
}

export default App;
