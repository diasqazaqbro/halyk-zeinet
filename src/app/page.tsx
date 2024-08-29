import dynamic from "next/dynamic";
import MainPage from "@/pages/MainPage";

const Footer = dynamic(() => import("@/widgets/Footer/ui/Footer"), {
  ssr: false,
  loading: () => <div className="text-center">Loading Footer...</div>,
});

export default function Home() {
  return (
    <main>
      <MainPage />
      <Footer />
    </main>
  );
}
