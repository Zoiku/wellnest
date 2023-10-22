import "../../styles/AppLayout.css";
import { Outlet } from "react-router-dom";
import Section from "../../components/Section";
import Nav from "../../components/Nav";

const App = () => {
  return (
    <Section className={"app-layout"} innerClassName={"app-layout-inner"}>
      <Nav />
      <Outlet />
    </Section>
  );
};

export default App;
