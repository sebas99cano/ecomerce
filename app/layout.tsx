"use client";
import "../styles/globals.css";
import Navigation from "../components/Navigation";
import { defaultTheme } from "../themes";
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
          <Navigation />
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
