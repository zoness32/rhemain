import React from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex p-24 aspect-square w-67 justify-center">
      {children}
    </div>
  )
}