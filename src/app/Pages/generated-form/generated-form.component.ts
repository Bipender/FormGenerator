import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router, ActivatedRoute} from "@angular/router";

import { FormControlBaseModal} from "../../Shared/modals";
import { FormControlService} from "../../Shared/services";

@Component({
    selector: "generated-form",
    templateUrl: "generated-form.component.html"
})

export class GeneratedFormComponent {
     formControls: FormControlBaseModal<any>[] = [];
     generatedForm: FormGroup;

    constructor(private fcs: FormControlService, private route: ActivatedRoute) {
        console.log("const");
        this.formControls = this.fcs.getGeneratedControls();
        this.generatedForm = this.fcs.toFormGroup(this.formControls);
    }

}
