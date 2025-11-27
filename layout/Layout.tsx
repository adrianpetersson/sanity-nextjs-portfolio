import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <>
      <Navbar />
      <div className="z-[1] mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-16">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
