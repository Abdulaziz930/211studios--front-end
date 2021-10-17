import NewsLetter from "../layout/subscribe/NewsLetter";
import Navi from "../layout/header/Navi";
import Routes from "../routes/Routes";
import Footer from "../layout/footer/Footer";

function App() {
  return (
    <>
      <Navi />
      <Routes />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
