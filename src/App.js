import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./themes/darktheme";
import Navbar from "./Pages/Navbar/Navbar";

function App() {
  return (
   <ThemeProvider theme={darkTheme}>
    <Navbar/>
   </ThemeProvider>
  );
}

export default App;
