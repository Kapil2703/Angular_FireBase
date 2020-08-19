import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [],
  imports: [AngularFireAuthModule, AngularFirestoreModule],
  providers: [AuthService]

  //imports: [CommonModule]
})
export class CoreModule {}
