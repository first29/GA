import SideNav from "./componentes/sidenav";
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>

  );
}
