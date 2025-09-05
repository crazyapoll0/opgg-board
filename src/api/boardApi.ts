
import axios from "axios";
import type { Post } from "../type";

const BASE_URL = import.meta.env.VITE_API_URL;

// // 전체 게시글을 가져오는 함수
// export const getPosts = (): Promise<Post[]> => {
//   return new Promise((resolve) => {
//     const posts: Post[] = [
//       {
//         id: 1,
//         title: "첫 번째 포스트",
//         author: "홍길동",
//         createdAt: "2023-09-01",
//         heart: 12,
//         content: "첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.첫 번째 포스트의 내용입니다.",
//       },
//       {
//         id: 2,
//         title: "두 번째 포스트",
//         author: "김철수",
//         createdAt: "2023-09-02",
//         heart: 8,
//         content: "두 번째 포스트의 내용입니다.",
//       },
//       {
//         id: 3,
//         title: "세 번째 포스트",
//         author: "박영희",
//         createdAt: "2023-09-03",
//         heart: 20,
//         content: "세 번째 포스트의 내용입니다.",
//       },
//     ];
//     setTimeout(() => resolve(posts), 1000); // 데이터가 비동기적으로 로드되는 것처럼 처리
//   });
// };


export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get(`${BASE_URL}/post`);
  return response.data;
};

// 특정 게시글 가져오기
export const getPostById = async (id: number): Promise<Post | null> => {
  const response = await axios.get(`${BASE_URL}/post/${id}`);
  return response.data ?? null;
};

export const addPosts = async (post: Post): Promise<Post[]> => {
  const response = await axios.post(`${BASE_URL}/post`, post)
  return response.data;
}

export const updatePosts = async (post: Post): Promise<Post[]> => {
  const response = await axios.put(`${BASE_URL}/post`, post)
  return response.data;
}








// 특정 게시글을 가져오는 함수
// export const getPostById = (id: number): Promise<Post> => {
//   return getPosts().then((posts) => posts.find((post) => post.id === id) || null);
// };