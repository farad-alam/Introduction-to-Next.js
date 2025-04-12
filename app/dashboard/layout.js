export default function DashboardLayout({ children }) {
  return (
    <div className="w-9/12 my-8 mx-auto flex justify-between items-center gap-2.5">
      {children}
    </div>
  );
}
