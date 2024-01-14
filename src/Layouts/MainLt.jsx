import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const MainLt = () => {
  return (
    <>
      <header className="max-w-screen-2xl mx-auto">
        <Header />
      </header>

      <main className="max-w-screen-2xl mx-auto">
        <Outlet />
      </main>

      <footer className="max-w-screen-2xl mx-auto">
        <Footer />
      </footer>
    </>
  );
};

export default MainLt;
