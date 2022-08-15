import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWellcome } from "../../redux/wellcome/wellcome-action";

export default function EnterButton() {
  const [wellcome, setWellcome] = useState(true);
  const dispatch = useDispatch();

  const comeToApp = () => {
    setWellcome(!wellcome);
    dispatch(getWellcome(wellcome));
  };

  return (
    <div className="wellcome">
      <p className="wellcome_text">Підтвердіть свій вік</p>
      <button className="welcome_button" onClick={comeToApp}>
        Мені виповнилося 18 років
      </button>
    </div>
  );
}
