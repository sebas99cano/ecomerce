"use client";
import { ShopLayout } from "@/components/layoutssebas99cano";
import { Typography } from "@mui/material";
export default function Home() {
  return (
    <ShopLayout
      title={"ecomerce-home"}
      pageDescription={"practica de next js desarrollando un ecomerce"}
    >
      <Typography variant="h1" component={"h1"}>
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
    </ShopLayout>
  );
}
