// FIX: Utilising another icon pack which is a fork of lucide-react called 'feather-icons-react'

import { Github, Linkedin, Twitter } from "feather-icons-react";
import { Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    // { icon: Twitter, label: "Twitter", href: "https://x.com" },
    {
      icon: Github,
      label: "GitHub",
      href: "https://www.github.com/bentekku",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/khan-shadab",
    },
    { icon: Mail, label: "Email", href: "mailto:mdshadab21july@gmail.com" },
  ];

  return (
    <footer className="border-t border-neutral-200 mt-24 py-16">
      <div className="max-w-2xl mx-auto px-6">
        {/* ... (Decorative lines and Author name) ... */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-16 bg-linear-to-r from-transparent to-neutral-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mx-3"></div>
          <div className="h-px w-16 bg-linear-to-l from-transparent to-neutral-300"></div>
        </div>

        <div className="text-center mb-6">
          <p className="text-neutral-900 italic">Shadab Khan</p>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mb-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            const isExternal =
              !link.href.startsWith("mailto:") && !link.href.startsWith("/");

            return isExternal ? (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
              >
                <Icon size={20} strokeWidth={1.5} />
              </a>
            ) : (
              <Link // Use Link for internal routes or mailto (though <a> works fine for mailto)
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
              >
                <Icon size={20} strokeWidth={1.5} />
              </Link>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="text-center text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} · Crafted with care</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
