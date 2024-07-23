import "./Sidebar.css";
import { TiShoppingCart } from "react-icons/ti";
import Category from "./category/Category";
import Price from "./price/Price";
import Colors from "./colors/Colors";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <TiShoppingCart />
          </h1>
        </div>
        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
};

export default Sidebar;
