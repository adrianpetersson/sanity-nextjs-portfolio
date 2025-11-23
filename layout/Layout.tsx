import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <>
      <Navbar />
      <div className="z-[1] w-full max-w-[1300px] mx-auto px-[50px] md:px-[30px]">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
