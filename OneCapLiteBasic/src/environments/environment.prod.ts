const siteCollectionURL = 'https://dxcportal.sharepoint.com/sites/onecaplitebasic/';

export const environment = {
  production                  : true,
  SupportName                 : 'P&G Capability Management',
  SupportMail                 : 'pguniversity@dxc.com',
  AppTitle                    : '[PROD] OneCap Basic',
  SiteURL                     : 'https://dxcportal.sharepoint.com/sites/onecaplitebasic/',
  SPUrl                       : 'https://dxcportal.sharepoint.com/sites/onecaplitebasic/',
  CREATE_EMPLOYEE_TEMPLATE    : siteCollectionURL + '_layouts/download.aspx?SourceUrl=' +
    'https://dxcportal.sharepoint.com/sites/onecaplitebasic/Templates/Create%20Employee%20Template.xlsx',
  ATTENDANCE_TEMPLATE_LINK    : siteCollectionURL + '_layouts/download.aspx?SourceUrl=' +
    'https://dxcportal.sharepoint.com/sites/onecaplitebasic/Templates/Attendance%20Sheet%20Template.xlsx',
  REGISTRATION_TEMPLATE_LINK  : siteCollectionURL + '_layouts/download.aspx?SourceUrl=' +
    'https://dxcportal.sharepoint.com/sites/onecaplitebasic/Templates/Registration%20Sheet%20Template.xlsx',
};

export enum GROUP {
  Owner         = 'OneCap Owners',
  Admin         = 'University Admins',
  Employee      = 'University Employee',
  ReportAccess  = 'University Report Access',
}
