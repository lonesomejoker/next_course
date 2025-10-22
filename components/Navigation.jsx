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
    <header className=" flex justify-between items-center bg-neutral-800 ">
      <nav className=" consistent py-5 flex items-center justify-between">
        <h4 className="text-white">LOGO</h4>
        <ul className=" flex gap-8 items-center text-white ">
          {navLinks.map((link) => (
            <Link href={link.link} key={link.title}>
              <li className="text-white font-[550] tracking-[0.6px] font-body">{link.title} </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
