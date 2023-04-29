import SideBar from "./components/SideBar";
export const metadata = {
  title: "Dashboard | Board.",
  description: "Listed Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <>
      <div className="min-h-screen flex flex-row justify-start md:p-10 p-4">
        <SideBar />
        <div className="flex-1 md:ml-72 pt-1">{children}</div>
      </div>
    </>
  );
}
