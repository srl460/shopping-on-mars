import React from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: 'Space Suit',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81xiC6NOdPL._SY450_.jpg',
    description: 'Will help you breath.',
    price: 100
  },
  {
    item: 'Cucumber',
    image: 'https://hosstools.com/wp-content/uploads/marketmore-cucumber-768x516.jpg' ,
    description: 'Health.',
    price: 100
  },
  {
    item: 'Cotton Sweatsuit',
    image: 'https://i.pinimg.com/originals/ae/07/7a/ae077ad7896ba93a2f317257ebc47af9.jpg',
    description: 'For maximum comfort.',
    price: 10
  },
  {
    item: 'Cat',
    image:'https://static.boredpanda.com/blog/wp-content/uploads/2018/04/5acb63d83493f__700-png.jpg',
    description: 'small cat',
    price: 20
  }
]

function App() {
    return (
    <div className="App">
      <h1>Heading to Mars</h1>
     <SearchForm />
     <ShoppingCart />
    </div>
  );
}

function formProduct(props) {

  // console.log(props.item);
  
  return(
    <div className="product">
      <img src={props.image} width="100"></img>
      <div className="image">
      <h1>{props.item}</h1>
      <p>{props.description}</p>
      <h3>{props.price}</h3> 
      </div>
    </div>
  )
}

function ShoppingCart() {
  const products = shoppingCartItems.map(formProduct);
  return(
    <div className="cart">
      {products}
      
    </div>
  );
}


function SearchForm() {
  return(
    <form>
      <label>
        Search:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
