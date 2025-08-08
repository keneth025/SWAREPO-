import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface CourseDocumentReport {
  Title: string;
  CourseModified: string;
  Editor: { Title: string };
}

@Injectable({
  providedIn: 'root'
})
export class CourseDocumentsService {
  private siteUrl = 'https://dxcportal.sharepoint.com/sites/southwestKnowledgeCentral/QA';
  private listName = 'CourseDocuments';

  constructor(private http: HttpClient) {}

  getLastUpdatedDocuments(): Observable<CourseDocumentReport[]> {
    const url = `${this.siteUrl}/_api/web/lists/getbytitle('${this.listName}')/items?$select=Title,Modified,Editor/Title&$expand=Editor`;
    return this.http.get<any>(url).pipe(
      map(response => response.value.map((item: any) => ({
        Title: item.Title,
        CourseModified: item.Modified,
        Editor: { Title: item.Editor?.Title }
      })) as CourseDocumentReport[])
    );
  }
}