'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";
import HomeComponent from "@/components/homePage";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between mt-16 overflow-x-hidden">
      <Header />

      <HomeComponent />
      <Footer />
    </main>
    </Provider>
  );
}
