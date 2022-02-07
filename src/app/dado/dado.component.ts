import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.scss']
})
export class DadoComponent implements OnInit {
  public valor : number = 1;

  constructor() { }

  ngOnInit(): void {
    this.valor = Math.floor(Math.random() * 6) + 1;  
  }

}
