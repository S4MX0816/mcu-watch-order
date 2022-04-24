import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TempComponent } from './main/temp/temp.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    // component: SignInComponent,
    component: TempComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'temp',
    component: TempComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
