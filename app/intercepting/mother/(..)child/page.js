import Link from "next/link";
import React from "react";

function InterceptedChildPage() {
  return (
    <div className="w-[80%] mx-auto bg-slate-950 h-screen p-5 flex items-center justify-center gap-8">
      <h1>Intecping child under mother Page (ClientSide navigation)</h1>
    </div>
  );
}

export default InterceptedChildPage;
