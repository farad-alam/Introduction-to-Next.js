import loading from "@/app/loading";
import getPostDetails from "@/lib/getPostDetails";
import { notFound } from "next/navigation";
import React from "react";

async function DetailsBlogPage({ params }) {
  // if (!params) {
  //   return loading()
  // }
  const { id } = await params;
  const post = await getPostDetails(id);
  if (Object.keys(post).length === 0) {
    return notFound()
  }
  return (
    <div className="w-8/12 mx-auto my-12">
      <h1 className="text-4xl font-bold pb-12 capitalize">{post.title}</h1>
      <p className="text-gray-300">{post.body}</p>
    </div>
  );
}

export default DetailsBlogPage;
