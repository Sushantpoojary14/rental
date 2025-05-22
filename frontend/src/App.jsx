import { Button, Container, Typography, Box } from "@mui/material";
import { ThemeProvider } from "./theme/ThemeProvider";
import Index from "./pages/Index";

function App() {
  return (
    <ThemeProvider>
      <Index/>
    </ThemeProvider>
  );
}

export default App;
