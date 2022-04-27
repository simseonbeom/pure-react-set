
import './styles/App.css';
import './styles/reset.css';
import Header from './Components/Header/Header'
import Visual from './Components/Visual/Visual'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <div className="scroller">
        <Header />
        <Visual />
        <Footer />
    </div>
    </div>
  );
}

export default App;
