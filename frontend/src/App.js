
import {Router} from "./Router"
import './styling.css';
import {theme} from "./styleTheme.js"
import { ThemeProvider} from "@mui/material/styles";

function App() {
  
  return <ThemeProvider theme={theme}><Router /></ThemeProvider>
  
}

export default App;
