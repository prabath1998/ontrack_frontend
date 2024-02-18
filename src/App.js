import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./themes/darktheme";
import Navbar from "./Pages/Navbar/Navbar";
import Sidebar from "./Pages/Sidebar/Sidebar";

function App() {
  return (
   <ThemeProvider theme={darkTheme}>
    <Navbar/>
    <Sidebar/>
   </ThemeProvider>
  );
}

export default App;
