const siteCollectionURL = 'https://dxcportal.sharepoint.com/sites/southwestKnowledgeCentral/';

export const environment = {
  production                  : false,
  SupportName                 : 'Mark Jayson Saret Cruzerna',
  SupportName1                : 'Anna Grace D. Pandy' ,     
  SupportMail                 : 'anna-grace.pandy@dxc.com',
  SupportMail1                : 'mark-jayson.saret.crucena@dxc.com',
  AppTitle                    : 'Southwest Knowledge',
  SiteURL                     : 'https://dxcportal.sharepoint.com/sites/southwestKnowledgeCentral/',
  SPUrl                       : 'http://localhost:8080',
  CREATE_EMPLOYEE_TEMPLATE    : siteCollectionURL + '_layouts/download.aspx?SourceUrl=' +
    'https://dxcportal.sharepoint.com/sites/southwestKnowledgeCentral/QA/Templates/Create%20Employee%20Template.xlsx',
  ATTENDANCE_TEMPLATE_LINK    : siteCollectionURL + '_layouts/download.aspx?SourceUrl=' +
    'https://dxcportal.sharepoint.com/sites/southwestKnowledgeCentral/QA/Templates/Attendance%20Sheet%20Template.xlsx',
  REGISTRATION_TEMPLATE_LINK  : siteCollectionURL + '_layouts/download.aspx?SourceUrl=' +
    'https://dxcportal.sharepoint.com/sites/southwestKnowledgeCentral/QA/Templates/Registration%20Sheet%20Template.xlsx',
};

export enum GROUP {
  Owner         = 'OneCap Owners',
  Admin         = 'QA Admins',
  Employee      = 'QA Employees',
  ReportAccess  = 'QA Report Access',
}
