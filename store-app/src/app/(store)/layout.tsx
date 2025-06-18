import TopNav from "@/components/ui/topNav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <TopNav/>
        {children}
      </body>
    </html>
  );
}
