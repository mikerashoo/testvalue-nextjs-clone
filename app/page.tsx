
import Navbar from "@/components/Navbar";
import BannerWrapper from "@/components/banner-sections/BannerWrapper"; 
import { Header } from "antd/es/layout/layout";

export default function Home() {
  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: 'white',
  };
  return (
    <main className="flex min-h-screen flex-col">
        <Navbar />
     <BannerWrapper />
 
    </main>
  );
}
