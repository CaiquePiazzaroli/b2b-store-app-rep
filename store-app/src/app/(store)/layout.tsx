import TopNav from "@/components/ui/topNav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main>
        <TopNav client={true}/>
        {children}
      </main>
  );
}
