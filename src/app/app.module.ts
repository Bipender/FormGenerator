import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule} from "@angular/router";

import { AppComponent } from "./app.component";
import { DynamicFormGeneratorComponent } from "./Shared/components";
import { FormControlService, ControlService} from "./Shared/services";
import { ControlEnquiryComponent, GeneratedFormComponent } from "./Pages";
import { App_Route_Module } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormGeneratorComponent,
    ControlEnquiryComponent,
    GeneratedFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    App_Route_Module
  ],
  providers: [FormControlService, ControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
