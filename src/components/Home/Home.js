import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import NavMobile from '../Nav/mobile/NavMobile'

export default function Home({ openNav, setOpenNav}) {
  

  return (
    <>
      <Header setOpenNav={setOpenNav} />
      {openNav ? (
        <NavMobile setOpenNav={setOpenNav} />
      ) : (
        <>
          <Main />
          <Footer />
        </>
      )}
    </>
  );
}
