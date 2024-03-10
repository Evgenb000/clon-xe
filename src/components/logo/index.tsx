import Image from "next/image";
import { Component, FC } from "react";
import logo from "./logo.svg"

export default function Logo() {
  return (
    <Image src={logo} alt="logo" width={51} height={41} className="cursor-pointer" />
  );
}
