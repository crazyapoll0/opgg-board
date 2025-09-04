import React from "react";
import { TextField } from "@mui/material";

type PostDialogContentProps = {
    post: {
        title: string;
        author: string;
        content: string
        createdAt: string;
        like: number;
        
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
                label="내용"
                name="content"
                value={post.content}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline   // 여러 줄 입력 가능
                rows={6}  
            />
          
        </div>
    );
}
