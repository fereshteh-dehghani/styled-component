import {ThemeProvider} from 'styled-components'
import Container from "./components/Container";
import Header from './components/Header'
import GlobalStyles from './components/Global';

const theme = {
  color:{
    header:'#ebfbff',
    body:'#fff',
    footer:'#333',
  }
}
function App() {
  return (
    <ThemeProvider theme={theme}>
       <>
    <Header>
      <h1>HELLO</h1>
      </Header>
      <Container>
        <a href="#">Login</a>
      </Container>
      </>
    </ThemeProvider>
  
  );
}

export default App;
