
import './App.css';
import Header from "./Components/Header"
import Card from "./Components/Card"
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json'

function App() {
  return (
    <div className="App">
      <Header className="" title="Galeria de animes en React" subtitle="los mejores animes"></Header>
      <div className='container text-center py-2'>
      <div className='row d-flex justify-content-around'>
        {
        data.map(function(card){
        return  <Card className="" title={card.title} description={card.description} urlImage={card.urlImage}/>
        })
        }
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
