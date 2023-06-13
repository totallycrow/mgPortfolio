import { Header } from "../header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Header />      
        <main>{children}</main>
      </div>
   
  );
}
