import { IMainShorticut } from '@/models/main_shortuct';
import { SHORTICUT_LIST_API_ENDPOINT } from '@/utils/api_constants';
import React from 'react'
import ShortcutLink from './ShortcutLink';

async function getData() { 
    const res = await fetch(SHORTICUT_LIST_API_ENDPOINT, { cache: "force-cache" });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  
    const rawData: IMainShorticut[] = await res.json();
  
    // Convert raw data to IMainShorticut objects
    const mainShortcuts: IMainShorticut[] = rawData.map(
      (rawBanner: IMainShorticut) => {
        return {
            mainShortcutId: rawBanner.mainShortcutId,
          title: rawBanner.title,
          sort: rawBanner.sort,
          imageUrl: rawBanner.imageUrl, 
          linkUrl: rawBanner.linkUrl, 
          creator: rawBanner.creator,
          updater: rawBanner.updater,
          deleter: rawBanner.deleter,
          createdAt: rawBanner.createdAt,
          updatedAt: rawBanner.updatedAt,
          deletedAt: rawBanner.deletedAt,
          
        };
      }
    );
  
    return mainShortcuts;
  }
  
async function ShortcutsWrapper() {
    console.log(SHORTICUT_LIST_API_ENDPOINT);

    const shortcuts: IMainShorticut[] = await getData();
  return (
    <div className='flex items-start md:items-start justify-evenly flex-wrap flex-auto gap-4 w-full px-4 py-8'>

        {
            shortcuts.map(shortcutData => <ShortcutLink key={shortcutData.mainShortcutId} shortcutData={shortcutData} />)
        }
    </div>
  )
}

export default ShortcutsWrapper