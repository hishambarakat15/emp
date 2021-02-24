import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {DashbordComponent} from './dashbord/dashbord.component';

const routes: Routes = [
    {path: 'dash', component: DashbordComponent},
    {path: 'emp', component: AddEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
