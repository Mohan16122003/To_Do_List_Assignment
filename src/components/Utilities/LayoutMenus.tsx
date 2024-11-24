  import React, { ReactNode } from "react";
  import useScreenMedia from "../hooks/useScreenMedia";

  const LayoutMenus: React.FC<{
    menuOpen: boolean;
    children: ReactNode;
    closeMenuHandler: () => void;
    className?: string;
  }> = ({ menuOpen, children, closeMenuHandler, className }) => {
    const mediaQueries = useScreenMedia();

    return (
      <>
        <div
          className={`h-screen fixed z-20 ${className} ${menuOpen ? "block" : "hidden"} ${mediaQueries.xl ? 'w-[300px]' : mediaQueries.lg ? 'w-[270px]' : 'w-[300px]'}`}
          style={{ backgroundColor: '#EEF6EF' }}
        >
          {children}
        </div>
        {menuOpen && !mediaQueries.xl && (
          <div
            className="fixed bg-slate-600/[.2] w-full h-full z-10 top-0 left-0"
            onClick={closeMenuHandler}
          ></div>
        )}
      </>
    );
  };

  export default LayoutMenus;
