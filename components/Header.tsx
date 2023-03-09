import { Dispatch, FC, SetStateAction } from "react";
import EmptyMoon from "./Svg/EmptyMoon";
import FullMoon from "./Svg/FullMoon";

const Header: FC<{
  setTheme: Dispatch<SetStateAction<boolean>>;
  theme: boolean;
}> = ({ setTheme, theme }) => {
  return (
    <header className="min-h-header bg-theme-element text-theme-text flex justify-between px-4 py-6 shadow-lg">
      <h1 className="font-bold">Where in the world?</h1>
      <button
        className="flex gap-2 items-center"
        onClick={() => setTheme(!theme)}
      >
        <span className="pb-1">{theme ? <FullMoon /> : <EmptyMoon />}</span>
        <span className="font-semibold">Dark Mode</span>
      </button>
    </header>
  );
};

export default Header;
