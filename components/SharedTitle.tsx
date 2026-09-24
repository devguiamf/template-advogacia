"use client";

import { ViewTransition } from "react";

export function SharedTitle({
  name,
  children,
  as: Tag = "h1",
  className,
}: {
  name: string;
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <ViewTransition name={name} share="text-morph" default="none">
      <Tag className={className}>{children}</Tag>
    </ViewTransition>
  );
}
