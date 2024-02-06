import { ICollectionResponse } from '@/models/collection_types'
import React from 'react'
import SingleCollectionList from './SingleCollectionList'
import { COLLECTIONS_API_ENDPOINT } from '@/utils/api_constants';
 
async function getData(): Promise<ICollectionResponse> { 
    try {
        const res = await fetch(COLLECTIONS_API_ENDPOINT, { cache: "force-cache" });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data: ICollectionResponse = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
async function CollectionListWrapper() {
    const collectionResponse: ICollectionResponse = await getData() 
  return (
    <div className='flex flex-col gap-8 justify-evenly'>
        {
            collectionResponse.items.filter(_collection => _collection.type == "SINGLE").map(collection => <SingleCollectionList key={collection.id} collection={collection} />)
        }
    </div>
  )
}

export default CollectionListWrapper