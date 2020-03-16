import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';

const appRoutes: Routes = [
    {path: '', component: HomePageComponent},
    {path:'search', component: SearchComponent},
    {path: 'login', component: LoginComponent},
    {path: 'loginseeker', component: LoginFormComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}