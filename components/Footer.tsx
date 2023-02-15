import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t">
      <div className="flex items-center justify-center gap-2">
        Powered by{" "}
        <a href="https://vercel.com" target="_blank">
          <Image src="/vercel-icon-dark.svg" alt="Vercel Logo" width={32} height={16} />
        </a>
        <a href="https://github.com" target="_blank">
          <Image
            src="/github-mark.svg"
            alt="Github Logo"
            width={32}
            height={16}
          />
        </a>
        <a href="https://supabase.com" target="_blank">
          <Image
            src="/supabase-logo-icon.svg"
            alt="Supabase Logo"
            width={28}
            height={16}
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
