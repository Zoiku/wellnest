import "../../styles/AppLayout.css";
import { Outlet, useLocation } from "react-router-dom";
import Section from "../../components/Section";
import Nav from "../../components/Nav";
import UserPreferencesPrompts from "../../components/UserPreferencesPrompts";
import { useState } from "react";

const App = () => {
  const location = useLocation();
  const user = location.pathname.split("/").at(1);
  const [userPreference, setUserPreference] = useState(true);
  const handleCompletePreference = () => {
    setUserPreference(false);
  };

  return user === "user" ? (
    userPreference ? (
      <Section className={"app-layout"} innerClassName={"app-layout-inner"}>
        <UserPreferencesPrompts
          handleCompletePreference={handleCompletePreference}
        />
      </Section>
    ) : (
      <Section className={"app-layout"} innerClassName={"app-layout-inner"}>
        <Nav />
        <Outlet />
      </Section>
    )
  ) : (
    <Section className={"app-layout"} innerClassName={"app-layout-inner"}>
      <Nav />
      <Outlet />
    </Section>
  );
};

export default App;
