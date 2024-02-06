import Navbar from "@/components/Navbar";
import BannerWrapper from "@/components/banner-section/BannerWrapper";
import CollectionListWrapper from "@/components/collection-section/CollectionListWrapper";
import ShortcutsWrapper from "@/components/shortcut-section/ShortcutsWrapper"; 

export default function Home() {
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "white",
  };
  return (
    <main className="flex min-h-screen flex-col w-full mb-8">
      <Navbar />
      <BannerWrapper />

      <div className="flex flex-col items-center gap-4 justify-center ">
        <div className="flex flex-col w-full md:w-[1160px] px-4">
          <ShortcutsWrapper />

          <CollectionListWrapper />
        </div>
      </div>
    </main>
  );
}
