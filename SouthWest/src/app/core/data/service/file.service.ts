import { Injectable } from '@angular/core';
import { sp } from '@pnp/sp';
import '@pnp/sp/webs';
import '@pnp/sp/folders';
import '@pnp/sp/files';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private CourseMaterialFolderName = 'CourseMaterial';

  async getCourseMaterialFolders() {
    const Folders = await sp.web.folders.getByName(this.CourseMaterialFolderName).folders
      .select('*')
      .filter(`Name ne 'Forms'`)
      .orderBy('Name', true)
      .get();
    return Folders.map<string>(e => e.Name);
  }


  async uploadCourseMaterial(FolderName: string, CourseMaterial: File) {
    if (CourseMaterial.size < 262144000) {
      return await sp.web.folders.getByName(this.CourseMaterialFolderName).folders
        .getByName(FolderName)
        .files
        .addChunked(
          CourseMaterial.name,
          CourseMaterial,
          (data) => { console.log(data); },
          true
        );
    } else {
      throw { Message: `File sizes greater than 250mb, contact pguniversity@dxc.com for assistance.` };
    }
  }
}
