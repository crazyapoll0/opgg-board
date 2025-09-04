import { AppBar, Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import "./App.css";
import PostList from "./pages/PostList";
import AddPost from "./components/AddPost";
import Banner from "./components/Banner";



export default function App() {
  return ( 
  <>
  <Container maxWidth="xl">
    <CssBaseline />
    <AppBar position="static" 
    sx={{
            backgroundColor: "#43c7a0",
            color: "#fff",
          }}
          >
            <Toolbar>
              <Typography variant="h6">TalkBoard</Typography>
            </Toolbar>
          </AppBar>
          <Banner />
          <AddPost />
          
          <PostList />
          {/* <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/create" element={<AddPost />} />
          </Routes> */}
  </Container>
  </>
  );
}

