import { FormControlBaseModal } from "./control-base.modal";

export class TextBoxControl extends FormControlBaseModal<any> {
    public controlType = "textbox";
    public textBoxType: string;
    public placeholder: string;
    public min: number;
    public max: number;

    constructor(options: {
        key?: string,
        title?: string,
        value?: any,
        required?: boolean,
        order?: number,
        textBoxType?: string,
        placeholder?: string,
        min?: number,
        max?: number } = {}) {
            super(options);
            this.textBoxType = options["textBoxType"];
            this.placeholder = options["placeholder"];
            this.min = options["min"];
            this.max = options["max"];
        }
}
