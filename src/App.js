import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import Navigation from './components/Navigation.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Navigation />
        
      </header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
