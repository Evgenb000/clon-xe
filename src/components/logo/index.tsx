import Image from "next/image";
import { Component, FC } from "react";
import logo from "./logo.svg"
import Link from "next/link";

export default function Logo() {
  return (
    <Link href='/'>
      <Image src={logo} alt="logo" width={51} height={41} className="cursor-pointer" />
    </Link>
  );
}
