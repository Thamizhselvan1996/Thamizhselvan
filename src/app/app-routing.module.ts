import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmpdataComponent } from './empdata/empdata.component';
import { PayslipComponent } from './payslip/payslip.component';
import { PdfComponent } from './pdf/pdf.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'empdata', component: EmpdataComponent },
  { path: 'payslip', component: PayslipComponent },
  { path: 'pdf', component: PdfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
