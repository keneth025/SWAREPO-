import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AccessGuardService } from './core/data/service/access-guard.service';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';

const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'Home' },
  {
    path: 'employee-profile',
    loadChildren: () => import('./pages/employee-profile/employee-profile.module').then(m => m.EmployeeProfileModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [AccessGuardService],
  },
  {
    path: 'learning-library',
    loadChildren: () => import('./pages/learning-library/learning-library.module').then(m => m.LearningLibraryModule),
    canActivate: [AccessGuardService],
  },
  {
    path: 'my-progress',
    canActivate: [AccessGuardService],
    children: [
      {
        path: 'role-based-learning',
        loadChildren: () => import('./pages/my-progress/my-progress.module').then(m => m.MyProgressModule),
        canActivate: [AccessGuardService],
      },
      {
        path: 'my-course',
        loadChildren: () => import('./pages/my-course/my-course.module').then(m => m.MyCourseModule),
        canActivate: [AccessGuardService],
      },
      {
        path: 'my-exam',
        loadChildren: () => import('./pages/my-exam/my-exam.module').then(m => m.MyExamModule),
        canActivate: [AccessGuardService],
      },
    ]
  },
  {
    path: 'admin',
    canActivate: [AccessGuardService],
    children: [
      {
        path: 'employee',
        loadChildren: () => import('./pages/admin/admin-employee/admin-employee.module').then(m => m.AdminEmployeeModule),
        canActivate: [AccessGuardService],
      },
      {
        path: 'role',
        loadChildren: () => import('./pages/admin/admin-role/admin-role.module').then(m => m.AdminRoleModule),
        canActivate: [AccessGuardService],
      },
      {
        path: 'curriculum',
        loadChildren: () => import('./pages/admin/admin-curriculum/admin-curriculum.module').then(m => m.AdminCurriculumModule),
        canActivate: [AccessGuardService],
      },
      {
        path: 'course',
        loadChildren: () => import('./pages/admin/admin-course/admin-course.module').then(m => m.AdminCourseModule),
        canActivate: [AccessGuardService],
      },
      {
        path: 'exam',
        loadChildren: () => import('./pages/admin/admin-exam/admin-exam.module').then(m => m.AdminExamModule),
        canActivate: [AccessGuardService],
      },
      {
        path: 'mandatory-training',
        loadChildren: () =>
          import('./pages/admin/admin-mandatory-training/admin-mandatory-training.module').then(m => m.AdminMandatoryTrainingModule),
        canActivate: [AccessGuardService],
      },
    ]
  },
  {
    path: 'admin/employee/employee-progress/:Id',
    loadChildren: () => import('./pages/my-progress/my-progress.module').then(m => m.MyProgressModule),
    canActivate: [AccessGuardService],
  },
  {
    path: 'reports',
    canActivate: [AccessGuardService],
    children: [
      {
        path: 'course-based',
        loadChildren: () => import('./pages/reports/course-based/course-based.module').then(m => m.CourseBasedModule),
        canActivate: [AccessGuardService],
      },
      {
        path: 'exam-based',
        loadChildren: () => import('./pages/reports/exam-based/exam-based.module').then(m => m.ExamBasedModule),
        canActivate: [AccessGuardService],
      },
    ]
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then(m => m.FAQModule),
  },
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true,  preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
