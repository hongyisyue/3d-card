export type AllItemInfo = ElementInfo | MerchantInfo;

type BasicInfo = {
    number: number;
    color_class: string;
    img1: string;
    img2?: string;
    img3?: string;
}
export type ElementInfo = BasicInfo & {
    ab: string;
    full_name: string;
    molar: number;
}
export function isChemElement(info: AllItemInfo): info is ElementInfo {
    return (
        'ab' in info &&
        'full_name' in info &&
        'molar' in info
    )
}

export type MerchantInfo = BasicInfo & {
    name: string;
    tags: string;
    price: number;
}
export function isMerchant(info: AllItemInfo): info is ElementInfo {
    return (
        'name' in info &&
        'tags' in info &&
        'price' in info
    )
}
