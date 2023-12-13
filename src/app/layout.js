'use client'
import { useEffect, Suspense, useState } from "react";
import SideNav from "./componentes/sidenav";
import './globals.css'
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";


export default function RootLayout({ children }) {
  const router = useRouter()
  const [isSuccess, setIsSuccess] = useState(false)
  useEffect(() => {
    (async () => {
      const { user, error } = await getUser();
      console.log(isSuccess);
      if (error) {
        router.push("/login");
        return;
      }
      
      setIsSuccess(true);
    })()
  }, [router.pathname]);

  return (
    <html lang="en">
      <body>
        {isSuccess ? <div className="flex w-auto h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-auto flex-none md:w-64">
            <SideNav />
          </div>
          <div className="">{children}</div>
        </div> : <div>Loading...</div>}

      </body>
    </html>

  );
}

async function getUser() {
  try {
    const { data } = await axios.get("api/auth/me")
    console.log(data)
    return { user: data, error: null }
  } catch (err) {
    return { user: null, error: err }
  }

}