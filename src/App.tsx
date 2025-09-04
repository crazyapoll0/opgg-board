import { AppBar, Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PostList from "./pages/PostList";
import PostForm from "./components/PostForm";
import Banner from "./components/Banner";
import PostDetail from "./pages/PostDetail";

export default function App() {
  return (
    <>
      <Container maxWidth="xl">
        <CssBaseline />
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#43c7a0",
            color: "#fff",
          }}
<<<<<<< Updated upstream
        >
          <Toolbar>
            <a href="/" style={{ textDecoration: "none", color: "inherit" }}><Typography variant="h6">TalkBoard</Typography></a>
          </Toolbar>
        </AppBar>
        <Banner />
        
        <Routes>
          {/* 게시글 목록 */}
          <Route path="/" element={<PostList />} />
          {/* 게시글 상세보기 */}
          <Route path="/post/:id" element={<PostForm />} />
        </Routes>
      </Container>
    </>
=======
          >
            <Toolbar>
              <Typography variant="h6">TalkBoard</Typography>
            </Toolbar>
          </AppBar>
          <Banner />
          <AddPost />
          <PostDetail />
          <PostList />
          {/* <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/create" element={<AddPost />} />
          </Routes> */}
  </Container>
  </>
>>>>>>> Stashed changes
  );
}
