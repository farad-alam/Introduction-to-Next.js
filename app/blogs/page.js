import getAllPostData from "@/lib/getAllPostData";
import Link from "next/link";
import React from "react";

async function page() {
  // throw new Error("Error in Blog page")
  const blogs = await getAllPostData();
  console.log(blogs[0].title);
  return (
    <div className="w-10/12 mx-auto p-3">
      {blogs.map((blog) => {
        return (
          <Link
            className="text-xl font-bold mb-2 bg-gray-500 p-2 rounded-md block cursor-pointer"
            href={`blogs/${blog.id}`}
            key={blog.id}
          >
            {blog.title}
          </Link>
        );
      })}
    </div>
  );
}

export default page;
