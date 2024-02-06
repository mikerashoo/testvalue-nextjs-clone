
import Navbar from "@/components/Navbar";
import BannerWrapper from "@/components/banner-section/BannerWrapper"; 
import ShortcutsWrapper from "@/components/shortcut-section/ShortcutsWrapper";
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
    <main className="flex min-h-screen flex-col w-full">
        <Navbar />
     <BannerWrapper />

     <div className="flex flex-col items-center gap-4 justify-center ">
      <div className="flex flex-col w-full md:w-[1160px]">
 
      <ShortcutsWrapper />
      </div>
     
     </div>
    
    </main>
  );
}
