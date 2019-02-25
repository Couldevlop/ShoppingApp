export interface Product{
    id: string,
    title: string,
    description: string,
    picture: string[],
    price: string,
    categorie: string,
    state: string,
    createDate: Date,
    availability: Availability,
    city: string,
    averageStar: number
}

export interface Availability{
    available: boolean,
    type: string,
    feed ?: number
}