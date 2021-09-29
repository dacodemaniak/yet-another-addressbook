import { AddressInterface } from "./address-interface";
import { AddressModel } from "./address-model";

export class AddressDto implements AddressInterface {
    id?: number | undefined;
    lastname!: string;
    firstname!: string;
    birthdate!: Date;

    transform(values: AddressInterface): AddressModel {
        const formData: any = {
            _lastname: values.lastname,
            _firstname: values.firstname,
            _birthdate: values.birthdate,
            _id: values.id
        };
        

        return new AddressModel().deserialize(formData);
    }
}
