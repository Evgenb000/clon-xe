import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-16 overflow-x-hidden">
      <Header />
      
        {children}

      <Footer />
    </main>
  );
}
