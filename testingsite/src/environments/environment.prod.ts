const siteCollectionURL = 'https://dxcportal.sharepoint.com/sites/southwestKnowledgeCentral';

export const environment = {
  production                  : true,
  SupportName                 : 'Anna Grace D. Pandy' , 
  SupportName1                : 'Mark Jayson Saret Cruzerna',
  SupportMail                 : 'anna-grace.pandy@dxc.com', 
  SupportMail1                : 'mark-jayson.saret.crucena@dxc.com',
  AppTitle                    : 'Southwest Knowledge',
  SiteURL                     : 'https://dxcportal.sharepoint.com/sites/southwestKnowledgeCentral',
  SPUrl                       : 'https://dxcportal.sharepoint.com/sites/southwestKnowledgeCentral',
  CREATE_EMPLOYEE_TEMPLATE    : siteCollectionURL + '_layouts/download.aspx?SourceUrl=' +
    'https://dxcportal.sharepoint.com/sites/southwestKnowledgeCentral/Templates/Create%20Employee%20Template.xlsx',
  ATTENDANCE_TEMPLATE_LINK    : siteCollectionURL + '_layouts/download.aspx?SourceUrl=' +
    'https://dxcportal.sharepoint.com/sites/southwestKnowledgeCentral/Templates/Attendance%20Sheet%20Template.xlsx',
  REGISTRATION_TEMPLATE_LINK  : siteCollectionURL + '_layouts/download.aspx?SourceUrl=' +
    'https://dxcportal.sharepoint.com/sites/southwestKnowledgeCentral/Templates/Registration%20Sheet%20Template.xlsx',
};

export enum GROUP {
  Owner         = 'OneCap Owners',
  Admin         = 'University Admins',
  Employee      = 'University Employee',
  ReportAccess  = 'University Report Access',
}
