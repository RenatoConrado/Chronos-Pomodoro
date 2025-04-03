import { PlayCircleIcon } from "lucide-react";
import Button from "./components/Button";
import Container from "./components/Container";
import Countdown from "./components/Countdown";
import Cycles from "./components/Cycles";
import Input from "./components/input";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

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
            <Cycles />
            <Button><PlayCircleIcon /></Button>
          </div>
        </form>
      </Container>

      <Container>
        <Footer>Entenda como funciona a técnica pomodoro</Footer>
      </Container>
    </>
  );
}

export default App;
