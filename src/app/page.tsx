import Footer from "@/components/footer";
import Header from "@/components/header";
import HomeComponent from "@/components/homePage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-16 overflow-x-hidden">
      <Header />
        <HomeComponent />
        
      <Footer />
    </main>
  );
}
