export default function ParallelLayout({
  children,
  assingments,
  notification,
  updatednews,
}) {
  const isLoggedin = true
  return (
    <>
      {children}
      <div className="w-9/12 my-8 mx-auto flex justify-between items-center gap-2.5">
        <div className="left w-6/12 h-96 space-y-2">
          {isLoggedin ? notification : "Nedd to login to see notification"}
          {assingments}
        </div>

        {updatednews}
      </div>
    </>
  );
}
