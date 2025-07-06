import "./App.css";
import Container from "./Component/layout/Container";
import AboutSolution from "./Component/Section/AboutSolution";
import AboutTestimoni from "./Component/Section/AboutTestimoni";
import CustomerSupport from "./Component/Section/CustomerSuppor";
import Featured from "./Component/Section/featured";
import Hero from "./Component/Section/Hero";
import MostPopularBlog from "./Component/Section/MostPopuler";
import ReviewCustomer from "./Component/Section/reviewCustomer";
import SublimeProduct from "./Component/Section/SublimeProduct";
import Testimoni from "./Component/Section/Testimoni";

function App() {
  return (
    <main className="w-full overflow-x-hidden">
      <Container className="max-w-7xl">
        <Hero />
        <ReviewCustomer />
        <SublimeProduct />
        <AboutSolution />
        <AboutTestimoni />
        <CustomerSupport />
        <Featured />
        <MostPopularBlog />
        <Testimoni />
      </Container>
    </main>
  );
}

export default App;
