import Navi from "../layout/header/Navi";
import Routes from "../routes/Routes";
import Footer from "../layout/footer/Footer";
import { Offline, Online } from "react-detect-offline";
import Error from "../pages/error/Error";

function App() {
  return (
    <>
      <Offline>
        <Error
          statusCode={503}
          title='Connection lost'
          description='Looks like your internet has lost, please check your internet connection and try connecting to the internet again'
          buttonIsExist={false}
        />
      </Offline>
      <Online>
        <Navi />
        <Routes />
        <Footer />
      </Online>
    </>
  );
}

export default App;
