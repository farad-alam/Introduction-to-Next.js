import wait from "@/lib/wait";
import React from "react";

export default async function Notification() {
  await wait(2000)
  return (
    <div className="notification h-6/12 border flex items-center justify-center">
      Notification
    </div>
  );
}
