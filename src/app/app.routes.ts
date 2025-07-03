import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./layout/home/home.component').then((m) => m.HomeComponent),
    children: [
      {
        path: 'forecast/:city',
        loadComponent: () =>
          import('./layout/forecast/forecast.component').then(
            (m) => m.ForecastComponent
          ),
      },
    ],
  },
];
