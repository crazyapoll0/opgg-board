import React from "react";
import { TextField } from "@mui/material";

type PostDialogContentProps = {
    post: {
        title: string;
        author: string;
        createdAt: string;
        comments: number;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PostDialogContent({ post, handleChange }: PostDialogContentProps) {
    return (
        <div>
            <TextField
                label="제목"
                name="title"
                value={post.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="작성자"
                name="author"
                value={post.author}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="작성일"
                name="createdAt"
                value={post.createdAt}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="댓글 수"
                name="comments"
                type="number"
                value={post.comments}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
        </div>
    );
}
