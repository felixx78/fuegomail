import { List } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { menuActions } from "../redux/menuReducer";

function MobileMenuButton() {
  const dispatch = useDispatch();

  return (
    <button
      className="p-1 lg:hidden"
      onClick={() => dispatch(menuActions.toggle())}
    >
      <List size={30} />
    </button>
  );
}
export default MobileMenuButton;
