import { NavItem } from 'src/app/core/data/model/nav-bar.model';
import { GROUP } from 'src/environments/environment';

export const RouteMap: NavItem[] = [
  {
    IconName: 'icon-dxc real-estate-house',
    DisplayName: 'Home',
    Route: '/home',
  },
  {
    IconName: 'icon-dxc layers-layers-4',
    DisplayName: 'Learning Library',
    Route: '/learning-library',
  },
  {
    IconName: 'icon-dxc business-management-person-puzzle',
    DisplayName: 'My Progress',
    Route: '/my-progress',
    AccessGroup: [GROUP.Employee],
    Children: [
      {
        DisplayName: 'Role-based Learning',
        Route: '/my-progress/role-based-learning',
        IconName: 'icon-dxc startup-person-lightbulb-2'
      },
      {
        DisplayName: 'My Courses',
        Route: '/my-progress/my-course',
        IconName: 'icon-dxc layers-layers-2'
      },
      {
        DisplayName: 'My Exams',
        Route: '/my-progress/my-exam',
        IconName: 'icon-dxc surveys-form-pencil'
      },
    ]
  },
  {
    IconName: 'icon-dxc tools-person-gear-wrench',
    DisplayName: 'Administrator',
    Route: '/admin',
    AccessGroup: [
      GROUP.Admin,
      GROUP.Owner,
    ],
    Children: [
      {
        IconName: 'icon-dxc people-orgs-3-people',
        DisplayName: 'Employees',
        Route: '/admin/employee',
        AccessGroup: [
          GROUP.Owner
        ]
      },
      {
        IconName: 'icon-dxc business-management-person-gear',
        DisplayName: 'Roles',
        Route: '/admin/role',
      },
      {
        IconName: 'icon-dxc layers-layers-4',
        DisplayName: 'Curricula',
        Route: '/admin/curriculum',
      },
      {
        IconName: 'icon-dxc layers-layers-2',
        DisplayName: 'Courses',
        Route: '/admin/course',
      },
      {
        IconName: 'icon-dxc surveys-form-pencil',
        DisplayName: 'Exams',
        Route: '/admin/exam',
      },
      {
        IconName: 'icon-dxc approved-web-check',
        DisplayName: 'Mandatory Training',
        Route: '/admin/mandatory-training',
        AccessGroup: [
          GROUP.Owner
        ]
      },
    ]
  },
  {
    IconName: 'icon-dxc data-analysis-chart-magnify',
    DisplayName: 'Reports',
    Route: '/reports',
    AccessGroup: [
      GROUP.Admin,
      GROUP.ReportAccess
    ],
    Children: [
      {
        DisplayName: 'Course Based',
        Route: '/reports/course-based',
        IconName: 'icon-dxc layers-layers-2'
      },
      {
        DisplayName: 'Exam Based',
        Route: '/reports/exam-based',
        IconName: 'icon-dxc surveys-form-pencil'
      },
    ]
  },
  {
    DisplayName: 'FAQ',
    Route: '/faq',
    IconName: 'icon-dxc layers-layers-2'
  }
];
