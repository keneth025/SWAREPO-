const siteCollectionURL = 'https://dxcportal.sharepoint.com/sites/onecaplitebasic/';

export const environment = {
  production                  : false,
  SupportName                 : 'P&G Capability Management',
  SupportMail                 : 'pguniversity@dxc.com',
  AppTitle                    : '[QA] OneCap Basic',
  SiteURL                     : 'https://dxcportal.sharepoint.com/sites/onecaplitebasic/QA/',
  SPUrl                       : 'https://dxcportal.sharepoint.com/sites/onecaplitebasic/QA/',
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
