import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { Transition } from "@headlessui/react";

const Header = ({ theme, changeTheme }) => (
  <div className="w-full  flex justify-between items-center px-5 md:px-3 py-8">
    <div className="text-3xl font-light tracking-tighter">a.</div>
    <div className="relative w-8 h-8 pt-1">
      <button
        onClick={changeTheme}
        type="button"
        className="focus:outline-none absolute overflow-hidden h-8 w-8"
      >
        <Transition
          show={theme === "light"}
          enter="transition-transform duration-1000"
          enterFrom="rotate-0"
          enterTo="rotate-360"
        >
          <MoonIcon className="h-8" />
        </Transition>
        <Transition
          show={theme === "dark"}
          enter="transition-transform duration-1000"
          enterFrom="rotate-0"
          enterTo="rotate-180"
        >
          <SunIcon className="h-8" />
        </Transition>
      </button>
    </div>
  </div>
);

export default Header;
