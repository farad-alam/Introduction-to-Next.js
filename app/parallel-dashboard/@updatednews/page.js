import wait from "@/lib/wait";
import Link from "next/link";

async function UpdatedNews() {
  await wait(3000);
  // throw new Error("Error Happend in Updated news")
  return (
    <div className="right w-6/12 h-96 border flex items-center justify-center gap-4">
      <span >Latest Updates</span>
      <div>
        <Link className="text-blue-600" href="/parallel-dashboard/old-updates">
          Old Updates
        </Link>
      </div>
    </div>
  );
}

export default UpdatedNews;
