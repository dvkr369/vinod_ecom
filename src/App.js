import './App.css';
import Cards from './components/js/Cards';
import Header from './components/js/Header';
import cards from './card.json';



function App() {
 

  return (
    <div className="app">
      
      <Header className="header"/>
    
      <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />
      <Cards cards={cards}/>
    </div>
  );
}

export default App;
