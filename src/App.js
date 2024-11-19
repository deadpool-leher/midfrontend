import About from "./Components/About";
import Experiences from "./Components/Experiences";
import Header from "./Components/Header";
import Award from "./Components/Award";
import Skill from "./Components/Skill";
import Footer from "./Components/Footer";
const App = () => {
  return (
  <div className="App">
    <div>
  <Header /><About />
  <Experiences />
  <Award />
  <Skill />
  <Footer />
  </div>
    </div>
  );
};
export default App;