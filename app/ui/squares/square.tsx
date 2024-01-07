import React from "react";

export default async function Square({children, className}: {children?: React.ReactNode, className?: string}) {
  return (
      <div className={`${className} flex justify-center items-center box-border h-20 w-20 p-4 border-black border-solid rounded-lg border-4`}>
        {children}
      </div>
  )
}