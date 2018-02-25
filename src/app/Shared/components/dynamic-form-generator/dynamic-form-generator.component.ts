import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { FormControlBaseModal} from "../../modals";


@Component({
    selector: "dynamic-form-generator",
    templateUrl: "dynamic-form-generator.component.html"

})
export class DynamicFormGeneratorComponent {
    @Input() control: FormControlBaseModal<any>;
    @Input() form: FormGroup;
}
