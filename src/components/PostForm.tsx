import { Container, CssBaseline } from "@mui/material";
import PostDetail from "../pages/PostDetail";
import EditPost from "./EditPost";

export default function PostForm() {

    return (

    <Container maxWidth="xl">
    <CssBaseline />

          <PostDetail />
          
  </Container>
    )
}