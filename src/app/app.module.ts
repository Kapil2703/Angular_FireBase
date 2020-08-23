import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsModule } from './events/events.module';
// import { UserProfileComponent } from './user-profile/user-profile.component';
import { CoreModule } from './core/core.module';

import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { TodosModule } from './todos/todos.module';
import { HomeComponent } from './layout/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    TopBarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventsModule,
    CoreModule,
    TodosModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
