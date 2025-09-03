import { AppBar, Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import "./App.css";

export default function App() {
  return ( 
  <>
  <Container maxWidth="xl">
    <CssBaseline />
    <AppBar position="static" 
    sx={{
            backgroundColor: "#0220375e",
            color: "#fff",
          }}
          >
            <Toolbar>
              <Typography variant="h6">TalkBoard</Typography>
            </Toolbar>
          </AppBar>
  </Container>
  </>
  );
}

