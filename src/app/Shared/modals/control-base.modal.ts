export class FormControlBaseModal<ControlValueType> {
    public key: string;
    public title: string;
    public value: ControlValueType;
    public required: boolean;
    public controlType: string;
    public order: number;
    constructor(options: {
        key?: string,
        title?: string,
        value?: ControlValueType,
        required?: boolean,
        controlType?: string,
        order?: number } = {}) {
            this.key = options.key;
            this.title = options.title;
            this.value = options.value;
            this.required = options.required;
            this.controlType = options.controlType;
            this.order = options.order;
    }
}


