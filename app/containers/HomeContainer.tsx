import React, { ReactNode } from "react";

interface MyComponentProps {
  children: ReactNode;
}

const HomeContainer: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className="w-screen flex  items-center content-center justify-center  overflow-hidden">
      <div className=" w-full px-4 sm:px-6 md:px-8 max-w-sm sm:max-w-xl md:max-w-4xl lg:max-w-6xl  ">
        {children}
      </div>
    </div>
  );
};

export default HomeContainer;
