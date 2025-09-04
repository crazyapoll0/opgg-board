import { useEffect, useState } from "react";

import type { Post } from "../type";
import { getPosts } from "../api/boardApi";

export default function PostDetail() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    getPosts()
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      {data.map((post) => (
        <div key={post.id} style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc" }}>
          <h3>{post.title || "제목 없음"}</h3>
          <p>{post.content || "내용 없음"}</p>
          <small>
            작성자: {post.author || "익명"} | 좋아요: {post.like ?? 0} | 작성일:{" "}
            {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "날짜 없음"}
          </small>
        </div>
      ))}
    </div>
  );
}

