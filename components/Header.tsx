"use client"; // 1. Must be a Client Component for hooks like usePathname

import Link from "next/link";
import { usePathname } from "next/navigation"; // 2. Hook for active link logic
import { useState } from "react";
import { Rss } from "lucide-react";

const Header = () => {
  // Get the current path (e.g., '/', '/about')
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <div className="flex flex-col md:flex-row items-center gap-3 mb-1">
              <div className="hidden md:block w-8 h-px bg-linear-to-r from-transparent to-neutral-300"></div>
              <h1
                className="text-neutral-900 italic tracking-wide m-0 text-lg md:text-2xl text-center"
                style={{ fontWeight: 400 }}
              >
                Shadab Khan
              </h1>
              <div className="hidden md:block w-8 h-px bg-linear-to-l from-transparent to-neutral-300"></div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
              <div className="w-1 h-1 rounded-full bg-neutral-300"></div>
              <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-4 md:gap-8">
            {/* Essays Link */}
            <Link
              href={ESSAYS_PATH} // 3. Use Link for navigation
              className="group flex flex-col items-center gap-1"
            >
              <span
                className={`text-xs md:text-sm tracking-wide transition-colors ${
                  isActive(ESSAYS_PATH) // 4. Active state logic
                    ? "text-neutral-900"
                    : "text-neutral-600 group-hover:text-neutral-900"
                }`}
              >
                Essays
              </span>
              <div
                className={`h-px bg-neutral-900 transition-all duration-300 ${
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
                className={`h-px bg-neutral-900 transition-all duration-300 ${
                  isActive(ABOUT_PATH) ? "w-full" : "w-0 group-hover:w-full" // 4. Active state logic
                }`}
              ></div>
            </Link>

            {/* RSS Feed Link */}
            <a
              href="/api/feed.xml"
              aria-label="RSS Feed"
              target="_blank"
              rel="noopener noreferrer"
              className="group opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <Rss size={20} strokeWidth={1.5} className="text-neutral-900" />
            </a>
          </nav>

          {/* Hamburger menu icon for mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-6 h-6 transition-opacity duration-300 hover:opacity-100"
            style={{
              opacity: isMenuOpen ? 1 : 0.45,
            }}
            aria-label="Toggle menu"
          >
            <div
              className="transition-transform duration-300"
              style={{
                transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 border-t border-neutral-200 pt-4 flex flex-col gap-4">
            {/* Essays Link */}
            <Link
              href={ESSAYS_PATH}
              className="group flex flex-col items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <span
                className={`text-sm tracking-wide transition-colors ${
                  isActive(ESSAYS_PATH)
                    ? "text-neutral-900"
                    : "text-neutral-600 group-hover:text-neutral-900"
                }`}
              >
                Essays
              </span>
              <div
                className={`h-px bg-neutral-900 transition-all duration-300 ${
                  isActive(ESSAYS_PATH) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></div>
            </Link>

            {/* About Link */}
            <Link
              href={ABOUT_PATH}
              className="group flex flex-col items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <span
                className={`text-sm tracking-wide transition-colors ${
                  isActive(ABOUT_PATH)
                    ? "text-neutral-900"
                    : "text-neutral-600 group-hover:text-neutral-900"
                }`}
              >
                About
              </span>
              <div
                className={`h-px bg-neutral-900 transition-all duration-300 ${
                  isActive(ABOUT_PATH) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></div>
            </Link>

            {/* RSS Feed Link */}
            <a
              href="/api/feed.xml"
              aria-label="RSS Feed"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-sm tracking-wide text-neutral-600 group-hover:text-neutral-900 transition-colors flex items-center gap-2">
                <Rss size={16} strokeWidth={1.5} />
                RSS Feed
              </span>
              <div className="h-px bg-neutral-900 transition-all duration-300 w-0 group-hover:w-full"></div>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
