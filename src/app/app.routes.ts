import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { GeneratedFormComponent, ControlEnquiryComponent } from "./Pages";

export const App_Routes: Routes = [
        {path: "", component: ControlEnquiryComponent},
        {path: "generatedForm", component: GeneratedFormComponent}
    ];

export const App_Route_Module: ModuleWithProviders = RouterModule.forRoot(App_Routes);

