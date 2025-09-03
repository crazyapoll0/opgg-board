import { useState } from "react";
import type { Post } from "../type";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

import PostDialogContent from "./PostDialogContent";

type AddPostProps = {
    loadPostData: () => void; // 글 목록을 새로고침하는 함수
};

export default function AddPost({ loadPostData }: AddPostProps) {
    const [open, setOpen] = useState(false);
    const [post, setPost] = useState<Post>({
        title: '',
        author: '',
        createdAt: '',
        comments: 0
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const name = e.target.name;
        setPost({ ...post, [name]: value });
    };

    const handleSave = async () => {
        // 여기서 실제로 API 호출이나 데이터를 저장하는 로직을 추가하세요.
        // 예시로는 `addPost(post)`와 같은 함수로 데이터를 저장할 수 있습니다.
        // await addPost(post);

        // 데이터 저장 후, 목록을 새로고침
        loadPostData();

        // 폼 초기화
        setPost({
            title: '',
            author: '',
            createdAt: '',
            comments: 0
        });

        // Dialog 닫기
        handleClose();
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {/* 글 작성 버튼 */}
            <Button onClick={handleOpen}>글 작성</Button>

            {/* 글 작성 Dialog */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>새 글 작성</DialogTitle>

                <DialogContent>
                    <PostDialogContent
                        post={post}
                        handleChange={handleChange}
                    />
                </DialogContent>

                <DialogActions>
                    {/* 저장 버튼 */}
                    <Button onClick={handleSave}>저장</Button>
                    {/* 닫기 버튼 */}
                    <Button onClick={handleClose}>닫기</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
