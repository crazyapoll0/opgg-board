import type { Post } from "../type";

export const getPosts = (): Promise<Post[]> => {
  return new Promise((resolve) => {
    const posts: Post[] = [
      {
        id: 1,
        title: "첫 번째 포스트",
        author: "홍길동",
        createdAt: "2023-09-01",
        comments: 12,
      },
      {
        id: 2,
        title: "두 번째 포스트",
        author: "김철수",
        createdAt: "2023-09-02",
        comments: 8,
      },
      {
        id: 3,
        title: "세 번째 포스트",
        author: "박영희",
        createdAt: "2023-09-03",
        comments: 20,
      },
    ];
    setTimeout(() => resolve(posts), 1000); // 데이터가 비동기적으로 로드되는 것처럼 처리
  });
};