import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostById } from "../api/boardApi"; // 게시글 ID로 데이터를 가져오는 함수
import type { Post } from "../type"; // Post 타입 정의

export default function PostDetail() {
  const { id } = useParams(); // URL에서 ID 추출
  const [post, setPost] = useState<Post |undefined>(undefined);
  const [loading, setLoading] = useState(true);

   // 게시글 데이터를 가져오는 useEffect
  useEffect(() => {
    if (id) {
      setLoading(true); // 데이터 요청 전 로딩 상태로 설정
      getPostById(Number(id)) // ID를 숫자로 변환해서 전달
        .then((res) => {
          setPost(res); // 데이터를 받아와서 상태 업데이트
          setLoading(false); // 데이터 로드 후 로딩 종료
        })
        .catch(() => {
          setPost(undefined); // 에러 시 undefined로 설정
          setLoading(false); // 로딩 종료
        });
    }
  }, [id]); // ID가 변경될 때마다 요청

  if (loading) return <div>로딩 중...</div>;
  if (!post) return <div>게시글이 존재하지 않습니다.</div>;

  return (
    <div className="post-container">
      <h2>{post.title}</h2>
      <p><strong>작성자:</strong> {post.author}</p>
      <p><strong>작성일:</strong> {post.createdAt}</p>
      <p><strong>내용:</strong> {post.content}</p> {/* 내용이 있을 경우 */}
      <p><strong>좋아요:</strong> {post.like}</p>
      
    </div>
  );
}
