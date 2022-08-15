import { useState } from "react";
import list from "../../bottles.json";
import PriceList from "./PriceList/PriceList";
import PriceHeader from "./PriceList/PriceHeader";
import Finder from "./Finder/Finder";
import Container from "../Container/Container";
import "./price.css";

const text =
  "Виберіть позицію зі списка, та позначте для себе, як обрану. Для зручності користуйтеся пошуком.";

const title = "Додати до замовлення";

export default function Price() {
  const [filter, setFilter] = useState("");

  const handleChangeFinder = (e) => setFilter(e.currentTarget.value);

  const showBottle = () => {
    const normalizeName = filter.toLowerCase();

    return list
      ? list.filter((bottle) =>
          bottle.name.toLowerCase().includes(normalizeName)
        )
      : console.log("Loading");
  };

  return (
    <Container>
      <div className="price">
        <div className="price_settings">
          <Finder value={filter} finder={handleChangeFinder} />
        </div>
        <table>
          <PriceHeader title={text} text={title} />

          <tbody>
            {showBottle().map((bottle) => (
              <PriceList key={bottle.id} param={bottle} />
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

// <div className="price">
//     <ul className="price_list">
//       {list.map((bottle) => (
//         <PriceList key={bottle.id} param={bottle} />
//       ))}
//     </ul>
//   </div>
