import HeaderMain from "./components/HeaderMain";
import Header from "./components/Header";
import IconSelection from "./components/IconSelection";
import StoreOpportunities from "./components/StoreOpportunities";
import Topics from "./components/Topics";
import Contact from "./components/Contact";
import FooterMain from "./components/FooterMain";

const App = () => {
  return (
    <div id="awor-wrapper">
      <HeaderMain />
      <Header />
      <IconSelection />
      <StoreOpportunities />
      <Topics />
      <Contact />
      <FooterMain />
    </div>
  );
};

export default App;
