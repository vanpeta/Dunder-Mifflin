// angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// external pakages imports
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// components imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { PostsListComponent } from './dashboard/posts-list/posts-list.component';
import { PostComponent } from './dashboard/posts-list/post/post.component';
import { CommentComponent } from './dashboard/posts-list/post/comment/comment.component';
// services imports
import { AuthService } from '../services/auth.service';
import { DataStorageService } from '../services/data-storage.service';
import { AuthGuard } from '../services/auth-guard.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile/:id', canActivate: [AuthGuard], component: DashboardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    PostsListComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [AuthService, DataStorageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
