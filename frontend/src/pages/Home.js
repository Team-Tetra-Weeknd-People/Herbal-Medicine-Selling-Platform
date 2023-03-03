import HeroSection from "../components/heroSection";
import Navbar from "../components/Navbar";
import "../styles/sudul/Home.css";

function Home() {

  document.title = "Beheth Kade | Home";
  return (
    <>
      <Navbar />
      <HeroSection />
    </>

  );
}

export default Home;
