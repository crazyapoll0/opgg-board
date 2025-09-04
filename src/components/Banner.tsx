import { Box } from "@mui/material";

export default function Banner() {
    return (
        <Box
            sx={{
                width: '100%',
                height: 300,
                backgroundImage: 'url(https://opgg-com-image.akamaized.net/asset/bg_lol.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginBottom: 2,
            }}
        />
    );
}
