import Footer from "./Footer";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";


function App() {
  return <div className="body d-flex flex-column align-items-center" >
    <Header/>
<Section1/>
<Section2/>
<Section3/>
<Section4/>
<Footer/>
  </div>;
}

export default App;
