export default function InterceptChildPage() {
  return (
    <div className="w-[80%] mx-auto bg-slate-950 h-screen p-5 flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-bold">Intecpt Child Page</h1>
     <p className="text-gray-500">This Page will render when user navigate directly</p>
    </div>
  );
}
