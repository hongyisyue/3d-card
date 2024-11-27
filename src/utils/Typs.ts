export type ElementInfo = {
    number: number;
    ab: string;
    full_name: string;
    molar: number;
    color_class: string;
    img: string;
}

export type MerchanInfo = {
    number: number;
    name: string;
    tags: string;
    price: number;
    color_class: string;
    img: string;
}

export type ItemInfo = ElementInfo | MerchanInfo;
