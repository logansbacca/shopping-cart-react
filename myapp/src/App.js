import React,{useState} from 'react';
import './App.css';

function App() {


  const [cart,setCart] = useState([]);
  const [page,setPage] = useState("products");
  const [counter,setCounter] =  useState(null);

  const [products] = useState([
    {
      name: "AA battery",
      cost: "$2.99",
      image:"https://d2pnwbqqhyem94.cloudfront.net/media/catalog/product/cache/c9129e27e672039435b3b8e18296772f/e/n/energizer-single-aa-576-pack_1.jpg",
      link:"https://www.youtube.com/"

    },{
      name: "Blanket",
      cost: "$19.99",
      image:"https://www.articolipromozionali.eu/public/articoli_promozionali/files_foto_dettaglio/Coperta-AAP721086-1.jpg",
      link:"https://www.youtube.com/"
    },{
      name: "TV",
      cost: "$199.99",
      image:"https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/13/77/137766.jpg",
      link:"https://www.youtube.com/"
    },{
      name: "Smart Home",
      cost: "$150.99",
      image:"https://rdnstreetmarket.it/pub/media/catalog/product/cache/8fca4f7b06ac9fa13af3999c0add2bad/h/o/homix---smart-home-hub-con-ale-217418-97596.jpg",
      link:"https://www.youtube.com/"
    }
       
  ]);


  function addToCart (products) {
    setCart([...cart,{...products}])
  };

  function removeFromCart (productToRemove) {
    setCart(cart.filter((products) => products !== productToRemove))
  }


  return (
    <div className="App">
    

      { page === "products" && 
      <>
       <header>
        <button onClick={() => setPage("cart")}>Go to Cart ({cart.length})</button>
        <>{counter}</>
      </header>
      <h1>Products</h1>
     <div className="products">
     {products.map(products => (
       <div className="product">
       <h1>{products.name}</h1>
       <h2>{products.cost}</h2>
       <a target="_blank"  onClick={()=> setCounter(counter+1)} href={products.link}>link</a>
       <img src={products.image}></img>
       <button onClick={() => addToCart(products)}>Add To Cart</button>
       </div>
     ))}
    </div>
    </>
      }

      {page === "cart" && 
      <>
      <header>
        <button onClick={() => setPage("products")}>View Products</button>
      </header>
      <h1>Cart</h1>
     <div className="products">
     {cart.map(products => (
       <div className="product">
       <h1>{products.name}</h1>
       <h2>{products.cost}</h2>
       <img src={products.image}></img>
       <button onClick={() => removeFromCart(products)}>Remove</button>
       </div>
     ))}
    </div>
      </>
      }
     
    </div>
  );
}

export default App;
