import "./App.css";
import Container from "./Component/layout/Container";
import Hero from "./Component/Section/Hero";

function App() {
  return (
    <main className="w-full overflow-x-hidden">
      <Container className="max-w-7xl">
        <Hero />
      </Container>
    </main>
  );
}

export default App;
