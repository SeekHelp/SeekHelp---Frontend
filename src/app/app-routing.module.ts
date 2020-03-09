import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    {path: '', component: HomePageComponent},
    {path:'search', component: SearchComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}