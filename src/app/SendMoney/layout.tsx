import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (
    <html lang="en">
      <body>
        <Header />
        
          {children}

        <Footer />
      </body>
    </html>
  );
}
