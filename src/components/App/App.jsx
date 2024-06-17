import css from "./App.module.css";

import { Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";

import Navigation from "../Navigation/Navigation";
import LoginRegisterNav from "../LoginRegisterNav/LoginRegisterNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

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
  const isLoginedIn = useSelector(selectIsLoggedIn);
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
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
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

export default App;
