export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-2">Oops! Page not found.</p>
      <a
        href="/"
        className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Go Home
      </a>
    </div>
  );
}
