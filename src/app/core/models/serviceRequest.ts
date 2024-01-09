export type serviceRequest = {
    name:string | null,
    email:string,
    phoneNumber:string,
    appliance:Appliance,
    address:string,
}

export enum Appliance{
    FRIDGE="Fridge",
    AC = "Ac"
}