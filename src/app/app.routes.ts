import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'algorithms',
    loadChildren: () =>
      import('./algorithms/algorithms.module').then((m) => m.AlgorithmsModule),
  },
];
