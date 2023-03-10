import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RNAPlotsComponent } from './rna-plots/rna-plots.component';

const routes: Routes = [
  { path: 'example', component: RNAPlotsComponent }
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }