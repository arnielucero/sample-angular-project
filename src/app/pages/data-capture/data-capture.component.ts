import { Component, OnInit } from '@angular/core';

export interface Row {
  Column1: string;
  Column2: string;
  Column3: string;
  Column4: string;
  Column5: string;
}

const RowData: Row[] = [
  {Column1: 'Value', Column2: 'Value', Column3: 'Value', Column4: 'Value', Column5: 'Value'},
  {Column1: 'Value', Column2: 'Value', Column3: 'Value', Column4: 'Value', Column5: 'Value'},
  {Column1: 'Value', Column2: 'Value', Column3: 'Value', Column4: 'Value', Column5: 'Value'},
];

@Component({
  selector: 'app-data-capture',
  templateUrl: './data-capture.component.html',
  styleUrls: ['./data-capture.component.scss']
})
export class DataCaptureComponent implements OnInit {
  displayedColumns: string[] = ['Column1', 'Column2', 'Column3', 'Column4', 'Column5'];
  dataSource = RowData;

  constructor() { }

  ngOnInit(): void {
  }

}
