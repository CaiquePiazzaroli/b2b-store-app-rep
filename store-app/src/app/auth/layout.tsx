
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* Essa parte será dinâmica, ira mudar conforme cliamos nos botoes da SideNav*/}
      <div className="m-auto">{children}</div> 
    </div>
  );
}