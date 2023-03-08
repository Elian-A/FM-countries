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
      <main className="bg-neutral-200 min-h-screen">{children}</main>
    </>
  );
};
export default Layout;
