import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'spa-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {
  @Input() id:string ='snackbar';
  @Input() snackbarText='';
  constructor() { }

  ngOnInit(): void {

  }
}
