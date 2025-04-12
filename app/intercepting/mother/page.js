import Link from "next/link";
import React from "react";

function MotherPage() {
  return (
    <div className="w-[80%] mx-auto bg-slate-950 h-screen p-5 flex items-center justify-center gap-8">
      <h1>Intecping Mother under mother Page</h1>
      <Link className="link link-primary" href="/intercepting/child">
        Go child page from mother with client side navigation
      </Link>
    </div>
  );
}

export default MotherPage;
