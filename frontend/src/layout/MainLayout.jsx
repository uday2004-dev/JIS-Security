import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

const MainLayout = ({ children }) => {
  return (
    <>
      <ScrollToTop />

      <NavBar />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default MainLayout;