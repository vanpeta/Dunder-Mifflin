import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

import { AuthService } from '../services/auth.service';
import { DataStorageService } from '../services/data-storage.service';
import { PostsListComponent } from './dashboard/posts-list/posts-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile/:id', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    PostsListComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [AuthService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
