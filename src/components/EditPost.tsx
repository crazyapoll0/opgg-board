import { useState } from "react"
import type { Post } from "../type"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import PostDialogContent from "./PostDialogContent"
import { updatePosts } from "../api/boardApi"

type EditPostProps = {
    postData: Post
    loadPostData: () => void
}

export default function EditPost({postData, loadPostData}:EditPostProps) {


    const [open, setOpen] = useState(false)
    const [post, setPost] = useState<Post>({
        id: 0,
        title: '',
        content: ''
    })

    




    const handleOpen = () => {
        setPost({
            id: postData.id,
            title: postData.title,
            content: postData.content
        })
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

   const handleSave = async () => {
  if (!post.id) {
    alert("잘못된 게시글입니다 (id 없음)");
    return;
  }
  try {
    await updatePosts(post.id, post);
    loadPostData();
    handleClose();
  } catch (err) {
    console.error(err);
    alert("수정 실패!");
  }
};


    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const value = e.target.value
        const name = e.target.name
        setPost({...post, [name]:value})
    }


    return (
        <>  

            <Button onClick={handleOpen}>수정</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>수정</DialogTitle>

                <DialogContent>
                   <PostDialogContent   
                        post={post}
                        handleChange={handleChange}
                   />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleSave}>저장</Button>
                    <Button onClick={handleClose}>닫기</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}