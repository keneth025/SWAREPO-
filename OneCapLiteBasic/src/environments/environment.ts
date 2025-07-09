const siteCollectionURL = 'https://dxcportal.sharepoint.com/sites/onecaplitebasic/';

export const environment = {
  production                  : false,
  SupportName                 : 'Nickole Marilag',
  SupportMail                 : 'nickole.marilag@dxc.com',
  AppTitle                    : '[Dev] OneCap Basic',
  SiteURL                     : 'https://dxcportal.sharepoint.com/sites/onecaplitebasic/QA/',
  SPUrl                       : 'http://localhost:8080',
  CREATE_EMPLOYEE_TEMPLATE    : siteCollectionURL + '_layouts/download.aspx?SourceUrl=' +
    'https://dxcportal.sharepoint.com/sites/onecaplitebasic/QA/Templates/Create%20Employee%20Template.xlsx',
  ATTENDANCE_TEMPLATE_LINK    : siteCollectionURL + '_layouts/download.aspx?SourceUrl=' +
    'https://dxcportal.sharepoint.com/sites/onecaplitebasic/QA/Templates/Attendance%20Sheet%20Template.xlsx',
  REGISTRATION_TEMPLATE_LINK  : siteCollectionURL + '_layouts/download.aspx?SourceUrl=' +
    'https://dxcportal.sharepoint.com/sites/onecaplitebasic/QA/Templates/Registration%20Sheet%20Template.xlsx',
};

export enum GROUP {
  Owner         = 'OneCap Owners',
  Admin         = 'QA Admins',
  Employee      = 'QA Employees',
  ReportAccess  = 'QA Report Access',
}
