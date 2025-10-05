
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">{children}</main>
<Footer/>
    </div>
  );
}
