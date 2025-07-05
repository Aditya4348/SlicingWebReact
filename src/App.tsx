import "./App.css";
import Container from "./Component/layout/Container";
import Navbar from "./Component/Organisation/Navbar";
import Hero from "./Component/Section/Hero";
import ReviewCustomer from "./Component/Section/reviewCustomer";
import SublimeProduct from "./Component/Section/SublimeProduct";

function App() {
  return (
    <main className="w-full overflow-x-hidden">
      <Container className="max-w-7xl">
        <Navbar />
        <Hero />
        <ReviewCustomer />
        <SublimeProduct />
      </Container>
    </main>
  );
}

export default App;
