import { useSelector } from "react-redux";
import Container from "../Container/Container";
import PriceHeader from "../Price/PriceList/PriceHeader";
import "./order.css";
import RemoveButton from "./RemoveButton";

const text = "Ваше замовлення";

export default function Order() {
  const items = useSelector((store) => store.toOrder.toOrder);

  return (
    <Container>
      <div className="price">
        <table>
          <PriceHeader title={text} />

          <tbody>
            {items.map(({ id, name, liters, price }) => (
              <tr key={id}>
                <th scope="row" className="price_name">
                  {name}
                </th>
                <td>{liters} л.</td>
                <td>{price} грн.</td>
                <td>
                  <RemoveButton id={id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
