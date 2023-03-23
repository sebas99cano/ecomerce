"use client";
import { Button, Stack } from "@mui/material";
export default function Home() {
  return (
    <div className="container">
      <h1>Using Material UI with Next.js 13</h1>
      <Stack direction="row" columnGap={1}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
}
