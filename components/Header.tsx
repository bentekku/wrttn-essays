"use client"; // 1. Must be a Client Component for hooks like usePathname

import Link from "next/link";
import { usePathname } from "next/navigation"; // 2. Hook for active link logic

const Header = () => {
  // Get the current path (e.g., '/', '/about')
  const pathname = usePathname();

  // Function to determine if a link is active
  const isActive = (path: string) => {
    // If path is '/', it only matches the root exactly, otherwise it uses includes
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  // Define the base path for your "Essays" and "About" pages
  const ESSAYS_PATH = "/";
  const ABOUT_PATH = "/about";

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="w-[120px]"></div>

          {/* Central Title Link */}
          <Link
            href={ESSAYS_PATH} // 3. Use Link for navigation
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-px bg-linear-to-r from-transparent to-neutral-300"></div>
              <h1
                className="text-neutral-900 italic tracking-wide m-0"
                style={{ fontSize: "24px", fontWeight: 400 }}
              >
                Shadab Khan
              </h1>
              <div className="w-8 h-px bg-linear-to-l from-transparent to-neutral-300"></div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
              <div className="w-1 h-1 rounded-full bg-neutral-300"></div>
              <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
            </div>
          </Link>

          <nav className="flex items-center gap-8">
            {/* Essays Link */}
            <Link
              href={ESSAYS_PATH} // 3. Use Link for navigation
              className="group flex flex-col items-center gap-1"
            >
              <span
                className={`text-sm tracking-wide transition-colors ${
                  isActive(ESSAYS_PATH) // 4. Active state logic
                    ? "text-neutral-900"
                    : "text-neutral-600 group-hover:text-neutral-900"
                }`}
              >
                Essays
              </span>
              <div
                className={`h-[1px] bg-neutral-900 transition-all duration-300 ${
                  isActive(ESSAYS_PATH) ? "w-full" : "w-0 group-hover:w-full" // 4. Active state logic
                }`}
              ></div>
            </Link>

            {/* About Link */}
            <Link
              href={ABOUT_PATH} // 3. Use Link for navigation
              className="group flex flex-col items-center gap-1"
            >
              <span
                className={`text-sm tracking-wide transition-colors ${
                  isActive(ABOUT_PATH) // 4. Active state logic
                    ? "text-neutral-900"
                    : "text-neutral-600 group-hover:text-neutral-900"
                }`}
              >
                About
              </span>
              <div
                className={`h-[1px] bg-neutral-900 transition-all duration-300 ${
                  isActive(ABOUT_PATH) ? "w-full" : "w-0 group-hover:w-full" // 4. Active state logic
                }`}
              ></div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
