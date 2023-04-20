import SideBar from "./SideBar";

export const metadata = {
  title: "Board.",
  description: "Listed frontend assignment",
};

export default function RootLayout({ children }) {
  return (
    <>
    <title>Dashboard | Board.</title>
      <div className="min-h-screen flex flex-row justify-start md:p-10 p-4">
        <SideBar />
        <div className="flex-1 md:ml-72 pt-1">{children}</div>
      </div>
    </>
  );
}
