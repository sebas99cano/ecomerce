import Head from "next/head";
import { FC } from "react";

interface Props {
  title: string;
  pageDescription: string;
  imageFulUrl?: string;
  children: React.ReactNode;
}

export const ShopLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFulUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav></nav>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
