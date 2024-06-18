import css from "./App.module.css";

import { Routes, Route } from "react-router-dom";

import { lazy, Suspense, useEffect } from "react";

import Navigation from "../Navigation/Navigation";
import LoginRegisterNav from "../LoginRegisterNav/LoginRegisterNav";
import UserMenu from "../UserMenu/UserMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));

const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage")
);

const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isLoginedIn = useSelector(selectIsLoggedIn);

  if (isRefreshing) {
    return null;
  } else {
    return (
      <div>
        <div className={css.navigation}>
          <Navigation />
          {isLoginedIn && <UserMenu />}
          {!isLoginedIn && <LoginRegisterNav />}
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegisterPage />} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    );
    // <div>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <SearchBox />
    //   <ContactList />
    // </div>
  }
}
export default App;
