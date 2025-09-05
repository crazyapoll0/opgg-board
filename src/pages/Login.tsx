import { useState } from "react";
import { Button, Snackbar, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store"; // Zustand store

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuthStore(); // 로그인 상태 업데이트 함수

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toastOpen, setToastOpen] = useState(false); // Snackbar 상태

  const handleLogin = () => {
    // 실제 API 호출 대신 예시로 로그인 처리
    if (username && password) {
      login(); // Zustand 상태 업데이트
      console.log("로그인 성공:", username);
      navigate("/"); // 로그인 후 홈 페이지 이동
    } else {
      setToastOpen(true); // 입력값 없으면 Snackbar 표시
    }
  };

  return (
    <>
      <Stack spacing={2} mt={4} alignItems="center">
        <TextField
          label="ID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="PW"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          color="primary"
          variant="contained"
          onClick={handleLogin}
        >
          로그인
        </Button>
      </Stack>

      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={() => setToastOpen(false)}
        message="아이디와 비밀번호를 입력해주세요"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </>
  );
}
