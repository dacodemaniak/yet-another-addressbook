export class AddressModel {
    private _id: number = 0;
    private _lastname: string = '';
    private _firstname: string = '';
    private _birthdate: Date = new Date();

    public constructor() {}

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public setId(id: number): AddressModel {
        this._id = id;
        return this;
    }

    public get lastname(): string {
        return this._lastname;
    }

    public get firstname(): string {
        return this._firstname;
    }

    public get birthdate(): Date {
        return this._birthdate;
    }

    public deserialize(datas: any): AddressModel {
        for (const property in datas) {
            if (this.hasOwnProperty(property)) {
                this[property] = datas[property];
            }
        }

        return this;
    }
}
