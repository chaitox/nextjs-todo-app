// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import {
  CiBellOn,
  CiBookmarkCheck,
  CiChat1,
  CiLogout,
  CiMenuBurger,
  CiSearch,
} from "react-icons/ci";
import Image from "next/image";
import { SideBar } from "@/components/SideBar";
import { NavBar } from "@/components/NavBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SideBar />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <NavBar />
        <div className="px-6 pt-6">{children}</div>
      </div>
    </>
  );
}
