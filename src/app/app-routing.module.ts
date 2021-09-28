import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AddAddressComponent } from './pages/add-address/add-address.component';
import { HomeComponent } from './pages/home/home.component';
import { UpdateAddressComponent } from './pages/update-address/update-address.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add-address',
    component: AddAddressComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'update/:id',
    component: UpdateAddressComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
