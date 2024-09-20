import DiscoverMore from "@/components/DiscoverMore";
import Navbar from "@/components/Navbar";
// import Overview from "@/components/Overview";
import OverviewAndCollectionFeatured from "@/components/OverviewAndCollectionFeatured";
import SignUpAndExploe from "@/components/SignUpAndExploe";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <SignUpAndExploe />
      {/* <Overview/> */}
      <OverviewAndCollectionFeatured />
      <DiscoverMore/>
    </div>
  );
}
