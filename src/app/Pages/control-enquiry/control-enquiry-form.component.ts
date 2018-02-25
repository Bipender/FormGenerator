import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { FormControlBaseModal} from "../../Shared/modals";
import {  ControlService, FormControlService } from "../../Shared/services";


@Component({
    selector: "control-enquiry-form",
    templateUrl: "control-enquiry-form.component.html"
})

export class ControlEnquiryComponent {
    public controls: FormControlBaseModal<any>[] = [];
    form: FormGroup;
    public formControls: Array<any> = [];
    public includedControls: Array<any> = [];

    constructor(private cs: ControlService, private fcs: FormControlService, private route: Router) {
        this.controls = this.cs.getControls();
        this.form = this.fcs.toFormGroup(this.controls);
    }

    addControls() {
       this.fcs.setControls(this.form.value);
       this.includedControls.push(this.form.value);
       this.form.reset();
        }
    generateForm() {
        this.route.navigate(["/generatedForm"]);
    }

}
