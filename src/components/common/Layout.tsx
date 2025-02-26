import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-4 py-4">{children}</div>
  );
};

export default Layout;
