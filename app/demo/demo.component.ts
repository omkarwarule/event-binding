import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  public text:string;
  constructor()
  {
    this.text="Marvellous Infosystem";
  }
  public demo()
  {
    this.text="Educating for better tommorow";
  }
}
