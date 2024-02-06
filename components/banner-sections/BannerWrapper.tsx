import { IBannerData } from "@/models/banner_data";
import React from "react";
import MobileBannerWrapper from "./MobileBannerWrapper";
import DesktopBannerWrapper from "./DesktopBannerWrapper";
import { BANNER_LIST_API_ENDPOINT } from "@/utils/api_constants";

async function getData() {
  const res = await fetch(BANNER_LIST_API_ENDPOINT, { cache: "force-cache" });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const rawData: IBannerData[] = await res.json();

  // Convert raw data to IBannerData objects
  const bannerDataList: IBannerData[] = rawData.map(
    (rawBanner: IBannerData) => {
      return {
        mainBannerId: rawBanner.mainBannerId,
        title: rawBanner.title,
        sort: rawBanner.sort,
        pcImageUrl: rawBanner.pcImageUrl,
        mobileImageUrl: rawBanner.mobileImageUrl,
        linkUrl: rawBanner.linkUrl,
        startDate: rawBanner.startDate,
        endDate: rawBanner.endDate,
        creator: rawBanner.creator,
        updater: rawBanner.updater,
        deleter: rawBanner.deleter,
        createdAt: rawBanner.createdAt,
        updatedAt: rawBanner.updatedAt,
        deletedAt: rawBanner.deletedAt,
      };
    }
  );

  return bannerDataList;
}
async function BannerWrapper() {
  const banners: IBannerData[] = await getData();
  return (
    <>
      <div className="hidden md:block">
        <DesktopBannerWrapper banners={banners} />
      </div>
      <div className="block md:hidden">
        <MobileBannerWrapper banners={banners} />
      </div>
    </>
  );
}

export default BannerWrapper;
