'use client'
import SideNav from "./componentes/sidenav";
import './globals.css'
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const login=pathname=="/login"
  return (
    <html lang="en">
      <body>
        <div className="flex mx-auto w-auto h-screen md:h-screen flex-col md:flex-row md:overflow-hidden sm:h-auto">
          <div className={login?"hidden":"w-auto flex-none md:w-64"}>
            <SideNav />
          </div>
          <div className={login?" mx-auto":"w-screen justify-center mt-6"}>{children}</div>
        </div>
      </body>
    </html>

  );
}
