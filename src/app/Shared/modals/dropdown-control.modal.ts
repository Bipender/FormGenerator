import { FormControlBaseModal } from "./control-base.modal";

export class DropDownControl extends FormControlBaseModal<string> {
    controlType = "dropdown";
    options: {key: any, value: any}[] = [];

    constructor(options: {
        key?: string,
        title?: string,
        value?: string,
        required?: boolean,
        order?: number,
        options?: any
         } = {}) {
        super(options);
        this.options = options["options"] || [];
    }
}
