import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnChanges{

  constructor() {}

  @Input() public title: String = "Bem vindo"

  ngOnChanges(): void { 
    console.log("Foi  alterado com sucesso");
  }
}
