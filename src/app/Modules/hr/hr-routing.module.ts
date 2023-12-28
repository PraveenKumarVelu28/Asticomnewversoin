import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressDetailsWizardComponent } from './address-details-wizard/address-details-wizard.component';
import { AuthguardGuard } from '../../Services/authguard.guard';
import { StaffdashboardComponent } from './staffdashboard/staffdashboard.component';
import { LicenceDetailsComponent } from './licence-details/licence-details.component';
import { InactivestaffDetailsComponent } from './inactivestaff-details/inactivestaff-details.component';
import { PayrollTriggerDashComponent } from './Payroll/payroll-trigger-dash/payroll-trigger-dash.component';
import { StaffBulkUploadExceptionsComponent } from './Configuration/staff-bulk-upload-exceptions/staff-bulk-upload-exceptions.component';
import { LeaveConfigurationComponent } from './Configuration/leave-configuration/leave-configuration.component';
import { LeaveConfigurationdashComponent } from './Configuration/leave-configurationdash/leave-configurationdash.component';
import { LoanConfigurationDashComponent } from './Configuration/loan-configuration-dash/loan-configuration-dash.component';

const routes: Routes = [
  { path: 'AddressDetailsWizard', component: AddressDetailsWizardComponent  ,canActivate: [AuthguardGuard]},
  { path: 'AddressDetailsWizard/:id', component: AddressDetailsWizardComponent  ,canActivate: [AuthguardGuard]},
  { path: 'Staffdashboard', component: StaffdashboardComponent  ,canActivate: [AuthguardGuard]},
  { path: 'LicenceDetails', component: LicenceDetailsComponent  ,canActivate: [AuthguardGuard]},
  { path: 'InactiveStaffDetails', component: InactivestaffDetailsComponent  ,canActivate: [AuthguardGuard]},
  { path: 'PayrollTriggerDash', component: PayrollTriggerDashComponent  ,canActivate: [AuthguardGuard]},
  { path: 'StaffBulkUploadExceptions', component: StaffBulkUploadExceptionsComponent  ,canActivate: [AuthguardGuard]},

  { path: 'LeaveConfigurationDash', component: LeaveConfigurationdashComponent  ,canActivate: [AuthguardGuard]},
  { path: 'LoanConfigurationDash', component: LoanConfigurationDashComponent  ,canActivate: [AuthguardGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
