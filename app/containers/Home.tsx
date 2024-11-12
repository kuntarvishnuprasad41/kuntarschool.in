import React, { ReactNode } from "react";

interface MyComponentProps {
  children: ReactNode;
}

const HomeContainer: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className="w-screen flex justify-center content-center ">
      <div className="  w-full max-w-7xl px-4 sm:px-6  ">{children}</div>
    </div>
  );
};

export default HomeContainer;
