import axios from "axios";
import jwtDecode from "jwt-decode";
import { BrowserRouter as Browser } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRoutes } from "./routes";
import NavBarComponent from "./components/utills/NavBar";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "./index";
import './static/AuthPath.css'
import { checkAuth } from "./http/userHttp";
import { Spinner } from "react-bootstrap";
import Footer from "./components/Footer";

const App = observer(() => {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(Context);

  useEffect(() => {
    checkAuth()
      .then((data) => {
        const { token, ...userData } = data;
        user.setIsAuth(true);
        user.setUser(userData);
      })
      .catch((error) => {
        
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="loading-block">
        <Spinner className="loading-spinner" animation="grow" variant="primary" />
      </div>
    );
  }

  return (
    <div>
      <Browser>
        <NavBarComponent />
        <AppRoutes />
        <Footer />
      </Browser>
    </div>
  );
});

export default App;
