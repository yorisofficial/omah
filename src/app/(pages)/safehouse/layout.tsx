"use client";
import Button from "@/app/component/ui/button/page";
import Link from "next/link";
import React, { useState } from "react";

export default function RootLayoutHome({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
