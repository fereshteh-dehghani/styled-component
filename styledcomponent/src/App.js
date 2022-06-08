import {themeProvider} from 'styled-components'
import Container from "./components/Container";
import Header from './components/Header'


function App() {
  return (
    <themeProvider theme={theme}>
       <>
    <Header bg="cyan">
      <h1>HELLO</h1>
      </Header>
      <Container>
        <a href="#">Login</a>
      </Container>
      </>
    </themeProvider>
  
  );
}

export default App;
