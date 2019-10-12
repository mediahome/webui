import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'cluster', loadChildren: () => import('./cluster/cluster.module').then(m => m.ClusterModule)},
  {path: '', redirectTo: 'cluster', pathMatch: 'full'},
  {path: '**', redirectTo: 'cluster'},
];
const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, config)
  ]
})
export class AppRoutingModule {
}
