import wait from "@/lib/wait";
import Link from "next/link";

async function OldUpdatedNews() {
  await wait(3000);
  // throw new Error("Error Happend in Updated news")
  return (
    <div className="right w-6/12 h-96 border flex gap-4 items-center justify-center">
      <span className="text-red-600">Old Updates</span>
      <div>
        <Link className="text-blue-600" href="/parallel-dashboard">
          Latest Updates
        </Link>
      </div>
    </div>
  );
}

export default OldUpdatedNews;
