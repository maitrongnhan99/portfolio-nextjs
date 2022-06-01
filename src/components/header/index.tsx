import React from "react";

import { Logo } from "@components";

export const Header: React.FC = () => {
  return (
    <div className="text-center bg-gray-800" data-testid="container">
      <Logo />
      <div>
        This is Mai Trong Nhan portfolio pages
      </div>
    </div>
  );
};
