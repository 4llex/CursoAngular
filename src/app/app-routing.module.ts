import { Directive, NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AlexComponent } from "./components/alex/alex.component"
import { ListRenderComponent } from "./components/list-render/list-render.component"
import { EmitterComponent } from "./components/emitter/emitter.component"
import { VehicleComponent } from "./components/vehicle/vehicle.component"
import { ParentDataComponent } from "./components/parent-data/parent-data.component"
import { DirectivesComponent } from "./components/directives/directives.component"
import { IfRenderComponent } from "./components/if-render/if-render.component"
import { EventosComponent } from "./components/eventos/eventos.component"
import { PipesComponent } from "./components/pipes/pipes.component"
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component"

const routes: Routes = [
  {path: '', component: AlexComponent},
  {path: 'vehicle', component: VehicleComponent},
  {path: 'parent-data', component: ParentDataComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'if-render', component: IfRenderComponent},
  {path: 'events', component: EventosComponent},
  {path: 'emitter', component: EmitterComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'pipe', component: PipesComponent},
  {path: 'binding', component: TwoWayBindingComponent},
  {path: 'change-number', component: EmitterComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
