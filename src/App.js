import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./themes/darktheme";
import Navbar from "./Pages/Navbar/Navbar";
import Sidebar from "./Pages/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";

function App() {
  return (
   <ThemeProvider theme={darkTheme}>
    <Navbar/>
    <Home/>
   </ThemeProvider>
  );
}

export default App;
