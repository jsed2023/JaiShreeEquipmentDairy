"use client";

import React from "react";
import { Link } from "@nextui-org/link";
import { FcLike } from "react-icons/fc";

const Footer: React.FC = () => {
return (

<footer className="w-full fixed bottom-0 left-0 flex max-sm:flex-col max-sm:items-center gap-1 text-center justify-between px-3 py-2 bg-blue-700 text-white text-xs shadow-md z-50">  <span>    
    © 2026 Jai Shree Equipment Dairy. All Rights Reserved.    
  </span>     
<p className="text-xs text-blue-200">
  Trusted Dairy Equipment Supplier in Rajasthan | Since 2020
</p> <Link    
    isExternal    
    href="https://developerchoudhary.vercel.app/"    
    title="Developer Choudhary"    
    className="text-white hover:text-blue-200 flex items-center gap-1 transition-colors"    
  >    
    <span className="flex items-center">    
      <span>Made with</span>    
      <FcLike className="mx-1 text-sm" />    
      <span>by Developer Choudhary</span>    
    </span>    
  </Link>    </footer>  );
};

export default Footer;