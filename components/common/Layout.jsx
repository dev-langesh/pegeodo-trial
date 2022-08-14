import CartContainer from "../cart/CartContainer";
import AccountContainer from "../account/AccountContainer";
import Header from "./header/Header";
import SideNav from "./SideNav";

export default function Layout({ children }) {
  return (
    <div className="font-roboto w-screen h-screen overflow-x-hidden scroll-smooth relative">
      <Header />
      <SideNav />
      <AccountContainer />
      <CartContainer />
      {children}
    </div>
  );
}
