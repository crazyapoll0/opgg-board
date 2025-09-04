// api/boardApi.ts

import type { Post } from "../type";

// 전체 게시글을 가져오는 함수
export const getPosts = (): Promise<Post[]> => {
  return new Promise((resolve) => {
    const posts: Post[] = [
      {
        id: 1,
        title: "첫 번째 포스트",
        author: "홍길동",
        createdAt: "2023-09-01",
        like: 12,
        content: "첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.",
      },
      {
        id: 2,
        title: "두 번째 포스트",
        author: "김철수",
        createdAt: "2023-09-02",
        like: 8,
        content: "두 번째 포스트의 내용입니다.",
      },
      {
        id: 3,
        title: "세 번째 포스트",
        author: "박영희",
        createdAt: "2023-09-03",
        like: 20,
        content: "세 번째 포스트의 내용입니다.",
      },
    ];
    setTimeout(() => resolve(posts), 1000); // 데이터가 비동기적으로 로드되는 것처럼 처리
  });
};

// 특정 게시글을 가져오는 함수
export const getPostById = (id: number): Promise<Post> => {
  return getPosts().then((posts) => posts.find((post) => post.id === id) || null);
};
