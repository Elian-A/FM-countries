import EmptyMoon from "./Svg/EmptyMoon";

const Header = () => {
  return (
    <header className="flex justify-between px-4 py-6 shadow-md">
      <h1 className="font-bold">Where in the world?</h1>
      <div className="flex gap-2 items-center">
        <span className="pb-1">
          <EmptyMoon />
        </span>
        <span className="font-semibold">Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
