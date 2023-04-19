import "../../styles/sudul/Home.css";

import {
  Navbar,
  ItemCart
} from "../../components";

function Home() {

  document.title = "Beheth Kade | Home";
  return (
    <>
       <Navbar />
       <ItemCart />
    </>

  );
}

export default Home;
