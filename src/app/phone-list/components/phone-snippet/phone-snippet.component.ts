import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-snippet',
  templateUrl: './phone-snippet.component.html',
  styleUrls: ['./phone-snippet.component.scss']
})
export class PhoneSnippetComponent implements OnInit {

  @Input() snippet?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
