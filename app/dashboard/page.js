import Assingment from "../components/ui/Assingment";
import Notification from "../components/ui/Notification";
import UpdatedNews from "../components/ui/UpdatedNews";

export default function DashboardPage() {
  return (
    <>
      <div className="left w-6/12 h-96 space-y-2">
        <Notification />
        <Assingment />
      </div>
      <UpdatedNews />
    </>
  );
}
