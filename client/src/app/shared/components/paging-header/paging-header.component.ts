import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging-header',
  templateUrl: './paging-header.component.html',
  styleUrls: ['./paging-header.component.scss']
})
export class PagingHeaderComponent implements OnInit {
  @Input() pageNumber: Number;
  @Input() pageSize: Number;
  @Input() totalCount: Number;
  
  constructor() { }

  ngOnInit(): void {

  }

}
