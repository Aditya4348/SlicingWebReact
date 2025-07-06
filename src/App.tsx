import "./App.css";
import Container from "./Component/layout/Container";
import Navbar from "./Component/Organisation/Navbar";
import AboutSolution from "./Component/Section/AboutSolution";
import AboutTestimoni from "./Component/Section/AboutTestimoni";
import CustomerSupport from "./Component/Section/CustomerSuppor";
import Featured from "./Component/Section/featured";
import Hero from "./Component/Section/Hero";
import MostPopularBlog from "./Component/Section/MostPopuler";
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
        <AboutSolution />
        <AboutTestimoni />
        <CustomerSupport />
        <Featured />
        <MostPopularBlog />
      </Container>
    </main>
  );
}

export default App;
