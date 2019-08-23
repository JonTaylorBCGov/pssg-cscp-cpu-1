import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';
import { HomeComponent } from './home/home.component';
import { RenewApplicationComponent } from './renew-application/renew-application.component';
import { IfmApplicationComponent } from './ifm-application/ifm-application.component';
import { WitnessApplicationComponent } from './witness-application/witness-application.component';
import { SubmitInvoiceComponent } from './submit-invoice/submit-invoice.component';
import { VictimRestitutionComponent } from './victim-restitution/victim-restitution.component';
import { OffenderRestitutionComponent } from './offender-restitution/offender-restitution.component';
import { ApplicationSuccessComponent } from './application-success/application-success.component';
import { ApplicationCancelledComponent } from './application-cancelled/application-cancelled.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'renew-application',
    component: RenewApplicationComponent,
    //canDeactivate: [CanDeactivateGuard]
  },
  // {
  //   path: 'ifm-application',
  //   component: IfmApplicationComponent,
  //   //canDeactivate: [CanDeactivateGuard]
  // },
  // {
  //   path: 'witness-application',
  //   component: WitnessApplicationComponent,
  //   //canDeactivate: [CanDeactivateGuard]
  // },
  // {
  //   path: 'submit-invoice',
  //   component: SubmitInvoiceComponent,
  //   //canDeactivate: [CanDeactivateGuard]
  // },
  // {
  //   path: 'victim-restitution',
  //   component: VictimRestitutionComponent,
  //   //canDeactivate: [CanDeactivateGuard]
  // },
  // {
  //   path: 'offender-restitution',
  //   component: OffenderRestitutionComponent,
  //   //canDeactivate: [CanDeactivateGuard]
  // },
  // {
  //   path: 'application-cancelled',
  //   component: ApplicationCancelledComponent,
  // },
  // {
  //   path: 'application-success',
  //   component: ApplicationSuccessComponent,
  // },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
