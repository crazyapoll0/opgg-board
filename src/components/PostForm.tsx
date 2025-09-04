import { AppBar, Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import Banner from "./Banner";
import PostDetail from "../pages/PostDetail";

export default function PostForm() {

    return (

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
          <Banner/>
          <PostDetail />
  </Container>
    )
}