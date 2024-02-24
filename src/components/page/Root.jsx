import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
const Root = () => {
  let header = <Header></Header>;
  let path = useLocation().pathname;
  if (path.startsWith("/friend/")) {
    header = null;
  }
  return (
    <>
      {header}
      <Outlet />
      <Footer></Footer>
    </>
  );
};
export default Root;
