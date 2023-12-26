import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'merge-sort',
    loadComponent: () =>
      import('./merge-sort/merge-sort.component').then(
        (m) => m.MergeSortComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SortingRoutingModule {}
