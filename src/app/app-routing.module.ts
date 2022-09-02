import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EntryComponent } from './entry/entry.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', component: EntryComponent },
  { path:'details', component: DetailsComponent },
  { path:'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
