import Link from "next/link";

const Navigation = () => {
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Client Comp", link: "/clientcomp" },
    { title: "Server Comp", link: "/servercomp" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <header className=" border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
      <nav className="consistent py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="h-10 w-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              NEXT
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-1 items-center">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link href={link.link}>
                <span className="px-4 py-2 text-slate-700 font-medium text-[15px] hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer inline-block">
                  {link.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>

    
      </nav>
    </header>
  );
};

export default Navigation;