export type AllItemInfo = ElementInfo | MerchantInfo;

export type ElementInfo = {
    number: number;
    ab: string;
    full_name: string;
    molar: number;
    color_class: string;
    img: string;
}
export function isChemElement(info: AllItemInfo): info is ElementInfo {
    return (
        'ab' in info &&
        'full_name' in info &&
        'molar' in info
    )
}

export type MerchantInfo = {
    number: number;
    name: string;
    tags: string;
    price: number;
    color_class: string;
    img: string;
}
export function isMerchant(info: AllItemInfo): info is ElementInfo {
    return (
        'name' in info &&
        'tags' in info &&
        'price' in info
    )
}
