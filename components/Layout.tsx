import Head from "next/head";
import { FC, ReactElement } from "react";
import Header from "./Header";

const Layout: FC<{
  children: ReactElement | ReactElement[];
  title: string;
}> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};
export default Layout;
