import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Header />
      <div className="container mx-auto">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
