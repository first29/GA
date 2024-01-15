import { useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  UserGroupIcon,
  UserPlusIcon,
  HomeIcon,
  Bars2Icon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';

const Submenu = ({ submenuItems, pathname }) => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category')
  const empty= category==null
  const firstOption=(name)=> name=="Unitary"||name=="Usuario"
  const path_category = pathname + "?category=" + category
  return (
    <div className={`grid my-1 mx-2 ${pathname === submenuItems.href ? 'bg-sky-100 text-blue-600' : ''}`}>
      {submenuItems.map((submenuItem) => (
        <Link key={submenuItem.name} href={submenuItem.href} className={`px-2 py-1 text-sm font-medium mt-1 rounded-md bg-gray-50 hover:bg-sky-100 hover:text-blue-600 ${path_category == submenuItem.href ? 'bg-sky-100 text-blue-600' : (empty&&(firstOption(submenuItem.name)&&'bg-sky-100 text-blue-600'))}`}>
          {submenuItem.name}
        </Link>
      ))}
    </div>
  );
};

export default function NavLinks() {
  const pathname = usePathname()
  const links = [
    { name: 'Home', href: '/', icon: HomeIcon },
    {
      name: 'Search', href: '/search', icon: MagnifyingGlassIcon, submenu: true, submenuItems: [
        { name: 'Unitary', href: '/search?category=1' },
        { name: 'Advanced', href: '/search?category=2' },
      ]
    },
    {
      name: 'Create', href: '/Registro', icon: UserPlusIcon, submenu: true, submenuItems: [
        { name: 'Usuario', href: '/Registro?category=1' },
        { name: 'Ubicacion', href: '/Registro?category=2' },
        { name: 'Equipo', href: '/Registro?category=3' },
        { name: 'Movimiento', href: '/Registro?category=4' },
      ]
    }
  ];
  const [submenuOpen, setSubmenuOpen] = useState(null);


  return (
    <>
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        const isLinkActive = pathname === link.href;
        const isSubmenuActive = link.submenu && submenuOpen === index && isLinkActive;

        return (
          <div key={link.name} className="relative">
            <div
              className={`flex h-[48px] grow items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${isLinkActive ? 'bg-sky-100 text-blue-600' : ''}`}
            >
              <Link href={link.href} className="flex items-center gap-2">
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
                {link.submenu && <Bars2Icon className="w-6 ml-20" onClick={() => setSubmenuOpen((prevIndex) => (prevIndex === index ? null : index))} />}
              </Link>
            </div>

            {link.submenu && isSubmenuActive && <Submenu submenuItems={link.submenuItems} pathname={pathname} />}
          </div>
        );
      })}
    </>
  );
}
