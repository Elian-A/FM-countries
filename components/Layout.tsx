import { useThemeContext } from "@/context/theme";
import Head from "next/head";
import { FC, ReactElement } from "react";
import Header from "./Header";

const Layout: FC<{
  children: ReactElement | ReactElement[];
  title: string;
}> = ({ children, title }) => {
  const { theme, setTheme } = useThemeContext();
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`${theme ? "dark" : ""}`}>
        <Header theme={theme} setTheme={setTheme} />
        <p>{theme}</p>
        <main className=" bg-theme-background min-h-main text-theme-text">
          {children}
        </main>
      </div>
    </>
  );
};
export default Layout;
