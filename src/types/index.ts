export interface IPlane {
    manufacturer: string;
    year: number;
    engine: string;
    range: string;
    prefix: string;
    model: string;
    company: string;
    engineNumber: number;
    airplaneType: string;
    country: string;
}

export interface IUpdatePlane {
    id: number;
    plane: IPlane;
}
