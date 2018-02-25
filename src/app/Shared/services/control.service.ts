import { Injectable } from "@angular/core";
import { DropDownControl, TextBoxControl, FormControlBaseModal } from "../modals";

@Injectable()
export class ControlService {
    private controls: FormControlBaseModal<any>[] = [];
    getControls() {
        this.controls = [
            new DropDownControl({
                 key: "controlType",
                 title: "Control Type",
                 required: true,
                 order: 1,
                 options: [
                    //  {key: "dropdown", value: "DropDown"},
                     {key: "textbox", value: "TextBox"},
                    //  {key: "date", value: "Date"}
                 ]
            }),
            new DropDownControl({
                key: "textBoxType",
                title: "Type",
                required: true,
                order: 2,
                options: [
                    {key: "text", value: "Text"},
                    {key: "password", value: "Password"},
                    {key: "date", value: "Date"},
                    {key: "number", value: "Number"},
                    {key: "email", value: "EMail"},
                ]
            })
            ,
            new TextBoxControl({
                key: "title",
                title: "Control Title",
                required: true,
                order: 2,
                textBoxType: "text",
                placeholder: "Title for Selected Control"
            }),
            new TextBoxControl({
                key: "value",
                title: "Control Default Value",
                required: false,
                order: 2,
                textBoxType: "text",
                placeholder: "Title for Selected Control"
            }),
            // new TextBoxControl({
            //     key: "options",
            //     title: "DropDown options",
            //     required: false,
            //     order: 3,
            //     textBoxType: "text",
            //     placeholder: "dropdown options"

            // }),
            new DropDownControl({
                key: "validator",
                title: "Validator",
                required: false,
                order: 4,
                options: [
                    {key: "required", value: "Required"},
                    {key: "notrequired", value: "Not Required"}
                ]

            }),
            new TextBoxControl({
                key: "order",
                value: 0,
                title: "Control Order",
                required: false,
                textBoxType: "number",
                placeholder: "",
                order: 5,
                min: 0,
                max: 1
            })

        ];
        this.controls.sort((a, b) => a.order - b.order);
        return this.controls;
    }
}
