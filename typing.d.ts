export interface Collection {
    id: string;
    slug: string;
    name: string;
    url: string;
    details: {
        description: string;
        thumbnail_url: string;
        cached_thumbnail_url: string;
        banner_url: string;
        cached_banner_url: string;
    }
    collection_type: string;
}

export interface Asset {
    id: string;
    collection_id: string;
    img_url: string;
    owner_id: string;
    details: string;
    mint_date: string;
    chain: string;
    last_sale_price: Float32Array;
    last_sale_currency: string;
}

export interface Account {
    id: string;
    user_name: string;
    address: string;
}