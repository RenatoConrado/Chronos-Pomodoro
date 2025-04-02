import Container from "./components/Container";
import Countdown from "./components/Countdown";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <Countdown />
      </Container>
    </>
  );
}

export default App;
