import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <>
      <Navbar />
      <div className="z-[1] mx-auto w-full max-w-[1300px] px-[50px] md:px-[30px]">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
