"use client";
import "../styles/globals.css";
import Navigation from "../components/Navigation";
import { darkTheme, defaultTheme, lightTheme } from "../themes";
import { ThemeProvider, CssBaseline } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Mi primer app con next</title>
      </head>
      <body>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
