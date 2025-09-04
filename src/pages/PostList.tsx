import { useEffect, useState } from "react";
import type { Post } from "../type";
import { DataGrid, type GridColDef, type GridRowParams } from "@mui/x-data-grid";
import { getPosts } from "../api/boardApi";
import { Button  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddPost from "../components/AddPost";

export default function PostList() {
  const [data, setData] = useState<Post[]>([]);
  const navigate = useNavigate()

  const loadPostData = () => {
    getPosts()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    getPosts()
      .then((res) => setData(res)) // 데이터 로드 후 상태 업데이트
      .catch((err) => console.error("데이터를 불러오는데 실패했습니다.", err));
  }, []); // 빈 배열을 두 번째 인자로 넣어 처음 렌더링될 때만 호출

const handleRowClick = (params: GridRowParams) => {
    const postId = params.row.id
    navigate(`/post/${postId}`)
}


  const columns: GridColDef[] = [
    { field: "title", headerName: "제목", width: 400 },
    { field: "author", headerName: "작성자", width: 150 },
    { field: "createdAt", headerName: "작성일", width: 150 },
    { field: "like", headerName: "좋아요", width: 100 },
    // {
    //   field: "actions",
    //   headerName: "관리",
    //   width: 150,
    //   renderCell: (params) => (
    //     <>
    //       <button>수정</button>
    //       <button>삭제</button>
    //     </>
    //   ),
    // },
  ];

  //수정테스트
  return (
    <>
        
      <AddPost />
      {/* <Button onClick={loadPostData}>데이터 로드</Button> */}
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.id}
        onRowClick={handleRowClick}
        disableRowSelectionOnClick
        showToolbar
      />
    </>
  );
}
