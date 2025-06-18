import TopNav from "@/components/ui/topNav";
import "./globals.css";

export default function RootLayout({
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
