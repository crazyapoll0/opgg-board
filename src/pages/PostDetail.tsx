import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deletePosts, getPostById } from "../api/boardApi"; // 게시글 ID로 데이터를 가져오는 함수
import type { Post } from "../type"; // Post 타입 정의
import EditPost from "../components/EditPost";
import { Button } from "@mui/material";

export default function PostDetail() {
  const { id } = useParams(); // URL에서 ID 추출
  const [post, setPost] = useState<Post |undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
 
  const loadPostData = () => {
    if (!id) return;
    getPostById(Number(id))
      .then((res) => setPost(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (id) {
      setLoading(true);
      loadPostData();
      setLoading(false);
    }
  }, [id]);


   const handleDelete = async () => {
    if (!id) return;
    try {
      await deletePosts(Number(id!));
      alert("게시글이 삭제되었습니다.");
      navigate("/"); // 삭제 후 목록 페이지로 이동
    } catch (err) {
      console.error(err);
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  if (loading) return <div>로딩 중...</div>;
  if (!post) return <div>게시글이 존재하지 않습니다.</div>;



  return (
    <>
    <div className="post-container">
  {/* 제목 */}
  <h2 className="post-title">{post.title}</h2>

 {/* 작성자 / 작성일 */}
  <div className="post-meta">
    <span>작성자: {post.author}</span>
    <span>작성일: {post.createdAt}</span>
  </div>
  {/* 내용 */}
  <div className="post-content">{post.content}</div>

  {/* 버튼 영역 */}
  <div className="post-buttons">
    <EditPost postData={post} loadPostData={loadPostData} />
    <button className="button-delete" onClick={handleDelete}>
      삭제
    </button>
    {/* 나중에 MUI Heart 버튼 추가 가능 */}
  </div>
</div>
</>
  )
}

