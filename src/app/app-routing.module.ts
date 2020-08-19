import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsModule } from './events/events.module';
import { ArticlesComponent } from './articles/articles.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: 'articles',
    component: ArticlesComponent
    //loadChildren: './events/events.module#EventsModule'
  },
  { path: 'notes', component: ArticlesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
