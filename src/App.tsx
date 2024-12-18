import Header from "./components/Header";
import IconSelection from "./components/IconSelection";
import StoreOpportunities from "./components/StoreOpportunities";
import Topics from "./components/Topics";
import Contact from "./components/Contact";
import Footer from "./components/FooterMain";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div id="awor-wrapper">
      <Header />
      <IconSelection />
      <StoreOpportunities />
      <Topics />
      <Contact />
      <Footer />
      <Modal />
    </div>
  );
};

export default App;
