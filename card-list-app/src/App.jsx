/* eslint-disable react/jsx-no-undef */
import './App.css';
import Card from './components/card';
import Pagination from './components/pagination';


const product = {
  "id": "76w0hz7015kkr9kjkav",
  "images": [
    "https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg",
    "https://content.rozetka.com.ua/goods/images/big_tile/163399633.jpg"
  ],
  "title": "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
  "rating": 2.89,
  "price": 15999,
  "category": "laptops",
  "brand": "acer"
};

function App() {
  return (
    <div >
      <Card product={product} />
        <Pagination totalPages={12} />
    </div>
  );
}

export default App;
