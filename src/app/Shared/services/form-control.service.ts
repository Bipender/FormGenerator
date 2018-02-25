import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { FormControlBaseModal, TextBoxControl } from "../modals";

@Injectable()
export class FormControlService {
  generatedControls: FormControlBaseModal<any>[] = [];

    toFormGroup(questions: FormControlBaseModal<any>[]) {

    const group: any = {};

    questions.forEach( question => {

      group[question.key] = question.required ? new FormControl(
        question.value || "",
        Validators.required
      ) : new FormControl( question.value || "");

    });
    return new FormGroup(group);

  }

  setControls(control: any) {
    console.log("setting questions");
    console.log(control["controlType"] + " " + typeof(control));
    let newControl;
    switch (control["controlType"]) {
      case "textbox":
      case "email":
      case "password": newControl = new TextBoxControl({
        key: control.title.toLowerCase(),
        title: control.title.toUpperCase(),
        value: control.value,
        required: control.required === "Required" ? true : false,
        textBoxType: control.textBoxType,
        order: control.order
      });
      break;
      default: return null;
    }
    this.generatedControls.push(newControl);
  }
  getGeneratedControls(): FormControlBaseModal<any>[] {
    return this.generatedControls;
  }

}
