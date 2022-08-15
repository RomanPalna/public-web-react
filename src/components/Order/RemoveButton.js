import { useDispatch } from "react-redux";
import { getFromOrder } from "../../redux/toOrder/toOrder-action";
import deleteButton from "../../images/delete-button.png";

export default function RemoveButton({ id }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(getFromOrder(id));
  };

  return (
    <button
      className="remove_button"
      name="remove"
      type="button"
      onClick={handleRemove}
    >
      <img src={deleteButton} alt="delete" width="40" height="55" />
    </button>
  );
}
