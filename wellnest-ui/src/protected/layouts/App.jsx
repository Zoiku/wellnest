import "../../styles/AppLayout.css";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Section from "../../components/Section";
import Nav from "../../components/Nav";
import UserPreferencesPrompts from "../../components/UserPreferencesPrompts";
import TherapistVerification from "../../components/TherapistVerification";

const App = () => {
  const location = useLocation();
  const user = location.pathname.split("/").at(1);
  const [userPreference, setUserPreference] = useState(true);
  const handleCompletePreference = () => {
    setUserPreference(false);
  };
  const [therapistVerification, setTherapistVerification] = useState(false);
  const handleTherapistVerification = () => {
    setTherapistVerification(true);
  };

  return (
    <>
      {user === "user" ? (
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
      ) : user === "therapist" && therapistVerification ? (
        <Section className={"app-layout"} innerClassName={"app-layout-inner"}>
          <Nav />
          <Outlet />
        </Section>
      ) : (
        <Section className={"app-layout"} innerClassName={"app-layout-inner"}>
          <TherapistVerification
            handleTherapistVerification={handleTherapistVerification}
          />
        </Section>
      )}
    </>
  );
};

export default App;
