"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CiBookmarkCheck } from "react-icons/ci";

interface Props {
  icon: React.ReactNode;
  path: string;
  title: string;
}

export const SideBarItem = ({ icon, path, title }: Props) => {
  const pathName = usePathname();
  
  return (
    
      <Link
        href={path}
        className={`
          relative px-4 py-3 flex items-center space-x-4 rounded-xl text-green-600 group
          ${
            pathName === path
              ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
              : ""
          }
          `}
      >
        {icon}
        <span className="-mr-1 font-medium">{title}</span>
      </Link>
    
  );
};
