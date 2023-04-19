import "../../styles/sudul/Home.css";

import {
  Navbar,
  ItemCart,
  AppSlider
} from "../../components";

function Home() {

  document.title = "Beheth Kade | Home";
  return (
    <>
       <Navbar />
       <ItemCart />
       <AppSlider/>
    </>

  );
}

export default Home;
