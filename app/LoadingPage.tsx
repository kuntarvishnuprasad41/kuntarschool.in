"use client";
 

import React from "react";
import Pencil from "@/components/loaders/Pencil";

function LoadingPage() {
  return (
    <>
      <div className="w-full flex flex-col justify-center  h-screen items-center content-center">
        <Pencil />
      </div>
    </>
  );
}

export default LoadingPage;
