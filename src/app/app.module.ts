import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsModule } from './events/events.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, ArticlesComponent, UserProfileComponent],
  imports: [BrowserModule, AppRoutingModule, EventsModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
