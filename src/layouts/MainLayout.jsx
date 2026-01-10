import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ScrollToTop from "../components/ScrolltoTop";

const MainLayout = () => {
  return (
    <>
    <ScrollToTop />
    <Navbar/>

    <div>
      <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default MainLayout