import "./App.css";
import { Main } from "../page/Main";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
