import "./styles.css";
import { Category } from "./components/Category";

export default function App() {
  let navbar = [
    {
      image:
        "https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      tittle: "Top offers"
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      tittle: "Top offers"
    }
  ];
  return (
    <div className="navbar">
      {navbar.map((el) => (
        <Category image={el.image} label={el.tittle} />
      ))}
    </div>
  );
}
