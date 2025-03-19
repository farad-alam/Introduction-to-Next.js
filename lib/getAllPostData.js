export default async function getAllPostData() {
  var response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/?_limit=10"
  );
  return response.json();
}
