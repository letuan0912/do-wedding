import Header from "@/components/Header";
import Footer from "@/components/layout/Footer";
import LuxuryCursor from "@/components/ui/LuxuryCursor";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main className="flex-1">
        <LuxuryCursor />
        {children}
      </main>

      <Footer />
    </>
  );
}