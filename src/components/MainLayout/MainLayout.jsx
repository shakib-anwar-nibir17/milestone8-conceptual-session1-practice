import { Outlet } from "react-router-dom";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
