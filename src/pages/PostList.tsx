import { useState } from "react";
import type { Post } from "../type";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";


export default function PostList() {
   const [data. setData] = useState<Post[]>([]);


   const columns: GridColDef[] = [
  { field: "title", headerName: "제목", width: 400 },
  { field: "author", headerName: "작성자", width: 150 },
  { field: "createdAt", headerName: "작성일", width: 150 },
  { field: "comments", headerName: "댓글", width: 100 },
  {
    field: "actions",
    headerName: "관리",
    width: 150,
    renderCell: (params) => (
      <>
        <button>수정</button>
        <button>삭제</button>
      </>
    ),
  },
];

   return (
    <>
    <DataGrid 
    rows={data}
        columns={columns}
        getRowId={(row) => row.id}
        disableRowSelectionOnClick={true}
        showToolbar/>
    </>
   )

}