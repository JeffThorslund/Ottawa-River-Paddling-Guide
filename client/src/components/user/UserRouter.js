import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";
import Login from "./authentication/Login";
import Dashboard from "./dashboard/Dashboard";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import axios from "axios";

const UserRouter = () => {
  //DEFINE STATE FOR TOKEN AND USER
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  //LOGGING IN OR REGISTERING
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  //DEFINE HISTORY FUNCS AND PATH
  let history = useHistory();
  const login = () => history.push(`/user/home`);
  const logout = () => history.push(`/user`);
  const { path } = useRouteMatch();

  //CHECK IF USER WAS PREVIOUSLY LOGGED IN
  useEffect(() => {
    const checkLoggedIn = async () => {
      //Get token from local storage, gets null if does not exist
      const token = localStorage.getItem("auth-token");

      token &&
        axios
          .get("/auth/verify", {
            params: {
              token: token,
            },
          })
          .then((response) => {
            setUserData({
              token: token,
              user: { name: response.data.name, email: response.data.email },
            });
            login();
          })
          .catch((error) => {
            console.log(error.response.data);
          });
    };
    checkLoggedIn();
  }, []);

  //HANDLE LOGIN
  const handleLogin = (e, email, password) => {
    e.preventDefault();
    axios
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response.headers["auth-token"];
        setUserData({
          token: token,
          user: { name: response.data.name, email: response.data.email },
        });
        localStorage.setItem("auth-token", token);
        login();
      })
      .catch((error) => {
        alert(error.response.data);
      });

    console.log(`Submitting Login Data for`, email);
  };

  //HANDLE LOGOUT
  const handleLogout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.removeItem("auth-token");
    logout();
  };

  return (
    <UserContext.Provider
      value={{ userData, setUserData, handleLogin, handleLogout }}
    >
      <Switch>
        {isLoggingIn ? (
          <Route exact path={`${path}/`}>
            <Login setIsLoggingIn={setIsLoggingIn} />
          </Route>
        ) : (
          <Route path={`${path}/register`}>
            <h1>Registration Page</h1>
          </Route>
        )}

        <Route path={`${path}/home`}>
          <Dashboard />
        </Route>
      </Switch>
    </UserContext.Provider>
  );
};

export default UserRouter;
