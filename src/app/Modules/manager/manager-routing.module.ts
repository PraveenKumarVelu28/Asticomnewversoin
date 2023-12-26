import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTeamAttendenceComponent } from './Attendance/my-team-attendence/my-team-attendence.component';
import { AuthguardGuard } from 'src/app/Services/authguard.guard';
import { MyTeamWeeklyShiftComponent } from './Attendance/my-team-weekly-shift/my-team-weekly-shift.component';
import { MyTeamOverTimeDetailsComponent } from './Attendance/my-team-over-time-details/my-team-over-time-details.component';
import { MyTeamAttendanceCorrectionComponent } from './Attendance/my-team-attendance-correction/my-team-attendance-correction.component';
import { MyTeamLeaveDetailsComponent } from './Requests/my-team-leave-details/my-team-leave-details.component';
import { ExitformalityformdashComponent } from './Requests/exitformalityformdash/exitformalityformdash.component';

const routes: Routes = [
  { path: 'MyTeamAttendence', component: MyTeamAttendenceComponent ,canActivate: [AuthguardGuard]},
  { path: 'MyTeamWeeklyShift', component: MyTeamWeeklyShiftComponent ,canActivate: [AuthguardGuard]},
  { path: 'MyTeamOverTimeDetails', component: MyTeamOverTimeDetailsComponent ,canActivate: [AuthguardGuard]},
  { path: 'MyTeamAttendanceCorrection', component: MyTeamAttendanceCorrectionComponent ,canActivate: [AuthguardGuard]},
  { path: 'MyTeamLeaveDetails', component: MyTeamLeaveDetailsComponent ,canActivate: [AuthguardGuard]},
  { path: 'Exitformalityformdash', component: ExitformalityformdashComponent ,canActivate: [AuthguardGuard]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
  export class ManagerRoutingModule { }