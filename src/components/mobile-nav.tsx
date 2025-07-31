"use client";
import {useState} from "react";
import {Drawer, IconButton} from "@mui/material";
import {Menu, Close } from "@mui/icons-material";
import Image from "next/image";


interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function MobileNav({children, className}: Props) {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={className}>
      <IconButton
        onClick={() => setOpen(true)}
      >
        <Menu className="text-white"/>
      </IconButton>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
      >
        <div>
          <div className="flex py-2 pl-6 pr-2 items-center justify-between mb-8">
            <Image src="/cruzco-logo-dark.svg" className="w-auto max-h-6" alt="Cruzco Logo" width={100} height={10}/>
            <IconButton
              onClick={() => setOpen(false)}
            >
              <Close className="text-dark"/>
            </IconButton>
          </div>
          <div onClick={() => setOpen(false)}>
            {children}
          </div>
        </div>
      </Drawer>
    </div>
  )
}