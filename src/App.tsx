import { AppBar, Box, Button, Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import "./App.css";
import PostList from "./pages/PostList";
import PostForm from "./components/PostForm";
import Banner from "./components/Banner";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./pages/Login";

export default function App() {
  // Toolbar 내부
const navigate = useNavigate();

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
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* 왼쪽: 로고 */}
          <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              TalkBoard
            </Typography>
          </a>

          {/* 가운데: 메뉴 */}
          <Box sx={{ display: "flex", gap: "20px", flexGrow: 1, justifyContent: "center" }}>
            <Typography variant="body1">유저찾기</Typography>
            <Typography variant="body1">배틀그라운드</Typography>
            <Typography variant="body1">잡담소</Typography>
            <Typography variant="body1">오버워치</Typography>
            <Typography variant="body1">양성소</Typography>
          </Box>

          {/* 오른쪽: 로그인 버튼 */}
          <Button color="inherit" onClick={() => navigate("/login")}>
  로그인
</Button>
          </Toolbar>
        </AppBar>
        <Banner />
        
        <Routes>
          {/* 게시글 목록 */}
          <Route path="/" element={<PostList />} />
          {/* 게시글 상세보기 */}
          <Route path="/post/:id" element={<PostForm />} />
          <Route path="/login" element={<Login />} />  {/* 로그인 페이지 연결 */}
        </Routes>
      </Container>
    </>
  );
}
