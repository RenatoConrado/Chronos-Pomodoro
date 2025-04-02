import Container from "./components/Container";
import Countdown from "./components/Countdown";
import Input from "./components/input";
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

      <Container>
        <form className="form" action="" method="get">
          <div className="formRow">
            <Input id="input" label="task" placeholder="Digite Algo" />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <button type="button">Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
