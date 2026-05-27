//Navbar and Footer 
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer"

// Pages
import Home from "./pages/Home";

function App() {
  return (
    <>
    {/* Navbar */}
      <TopNavbar />

    {/* Pages */}
      <Home />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
