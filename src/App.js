import "./App.css";
import Bibliotheque from "./components/Bibliotheque";
import Header from "./components/Header";

const livres = [
  {
    id:1,
    title: "Reminders of Him: A Novel",
    price: 90.97,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL210_SR195,210_.jpg",
  },
  {
    id:2,
    title: "Ugly Love: A Novel",
    price: 102.5,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61QR7qoEYVL._AC_UL210_SR195,210_.jpg",
  },
  {
    id:3,
    title: "Where the Crawdads Sing",
    price: 78.96,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg",
  },
  {
    id:4,
    title: "November 9: A Novel",
    price: 123.55,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61xkvfPVupL._AC_UL210_SR195,210_.jpg",
  },
  {
    id:5,
    title: "The Return of the Gods",
    price: 27.9,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61uiYWcEQGL._AC_UL210_SR195,210_.jpg",
  },
  {
    id:6,
    title: "I Love You to the Moon and Back",
    price: 55.85,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL210_SR195,210_.jpg",
  },
  {
    id:7,
    title: "All Good People Here: A Novel",
    price: 90.34,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81XQ1+piiiL._AC_UL210_SR195,210_.jpg",
  },
  {
    id:8,
    title: "The Great Reset: And the War for the World",
    price: 100.4,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61clZgj1xZL._AC_UL210_SR195,210_.jpg",
  },
  {
    id:9,
    title: "Good Inside: A Guide to Becoming the Parent You Want to Be",
    price: 106.5,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71RIWM0sv6L._AC_UL210_SR195,210_.jpg",
  },
  {
    id:10,
    title: "The Butcher and The Wren: A Novel",
    price: 34.78,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81ZjXQY0+sL._AC_UL210_SR195,210_.jpg",
  },
];

function App() {
  return <div className="container">
    <Header />
      <Bibliotheque livres={livres}/>
  </div>;
}

export default App;
