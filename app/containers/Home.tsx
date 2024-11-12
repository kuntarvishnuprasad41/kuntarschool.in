import React, { ReactNode } from "react";

interface MyComponentProps {
  children: ReactNode;
}

const HomeContainer: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className="w-screen flex justify-center content-center ">
      <div className="max-w-[1100px] w-screen   ">{children}</div>
    </div>
  );
};

export default HomeContainer;
