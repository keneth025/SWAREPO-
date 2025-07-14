import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  public exportArrayAsExcelFile(data: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  public convertExcelDataToJsonData(bstr: string | ArrayBuffer) {
    const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
    let returnValue = {};

    if (wb.SheetNames.length > 0) {
      for (const wsname of wb.SheetNames) {
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        returnValue = {
          ...returnValue,
          [wsname]: XLSX.utils.sheet_to_json(ws, {
            defval: '',
            blankrows: false,
            header: 1,
          })
        };
      }
    }

    return returnValue;
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, `${fileName}${EXCEL_EXTENSION}`);
  }

}
