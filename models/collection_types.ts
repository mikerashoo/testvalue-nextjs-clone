export interface IPublicationMedia {
    seq: number;
    type: string;
    uri: string;
    mimeType: string;
    deviceType: string | null;
}

export interface IPublicationPriceInfo {
    price: number;
    discountPrice?: number;
    discountRate?: number;
}

export interface IPublicationDiscount {
    id: number;
    name: string | null;
    type: string;
    calcMethod: string;
    value: number;
    activeFrom: string | null;
    activeTo: string | null;
    qty: number;
    remain: number | null;
}

export interface IPublication {
    id: number;
    title: string;
    code: string;
    productId: number;
    prdType: number;
    offeringType: string;
    rating: number;
    isExistResidual: boolean;
    isAdult: number;
    preface: string;
    prefaceIconUrl: string;
    productName: string;
    brandName: string;
    media: IPublicationMedia[];
    isTrial: boolean;
    tagsOnImage: string[];
    tagsOnDesc: string[];
    priceInfo: IPublicationPriceInfo;
    discounts: IPublicationDiscount[];
    applyCoupon: boolean;
}

export interface ICollectionItem {
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    uuid: string;
    name: string;
    body: string | null;
    collectionId: number;
    key: string;
    seq: number;
    entityType: string;
    entityId: number;
    optionKey: string | null;
    publication: IPublication;
    prdType: number;
}

export interface ICollection {
    id: number;
    type: string;
    code: string;
    title: string;
    subtitle: string;
    description: string;
    trialPeriod: string | null;
    installmentPrice: string | null;
    installmentPeriod: string | null;
    rating: number;
    startDate: string | null;
    endDate: string | null;
    viewType: string | null;
    createdAt: string;
    items: ICollectionItem[];
    media: IPublicationMedia[];
    thumbnail: IPublicationMedia;
    taggings: any[]; // You can replace 'any[]' with specific type if it's known
    singleCollections: any[]; // You can replace 'any[]' with specific type if it's known
}

export interface ICollectionResponse {
    items: ICollection[];
    totalCount: number;
}

