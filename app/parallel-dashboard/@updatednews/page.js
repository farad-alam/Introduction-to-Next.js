import wait from "@/lib/wait";

async function UpdatedNews() {
  await wait(3000);
  // throw new Error("Error Happend in Updated news")
  return (
    <div className="right w-6/12 h-96 border flex items-center justify-center">
      Updated News Latest
    </div>
  );
}

export default UpdatedNews;
