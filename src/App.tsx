import { AppBar, Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import "./App.css";
import PostList from "./pages/PostList";
import PostForm from "./components/PostForm";
import Banner from "./components/Banner";
import { Route, Routes } from "react-router-dom";

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
        >
          <Toolbar>
            <a href="/" style={{ textDecoration: "none", color: "inherit" }}><Typography variant="h6"  sx={{ mr: 4 }}>TalkBoard</Typography></a>
            {/* 메뉴 텍스트 (임시) */}
          <div style={{ display: "flex", gap: "20px" }}>
            <Typography variant="body1">유저찾기</Typography>
            <Typography variant="body1">배틀그라운드</Typography>
            <Typography variant="body1">잡담소</Typography>
            <Typography variant="body1">오버워치</Typography>
            <Typography variant="body1">양성소</Typography>
          </div>
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
  );
}
