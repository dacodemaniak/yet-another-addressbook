import { AddressModel } from "./address-model";

export interface AddressInterface {
    id?: number;
    lastname: string;
    firstname: string;
    birthdate: Date;

    transform(values: AddressInterface): AddressModel;
}
