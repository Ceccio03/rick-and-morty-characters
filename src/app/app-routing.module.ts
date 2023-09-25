import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: 'home', component: ListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'character', loadChildren: () => import('./components/character/character.module').then(m => m.CharacterModule) },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
