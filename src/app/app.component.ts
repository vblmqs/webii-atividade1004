//soma
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SomaComponent } from './page/soma';

//subtração
import { SubtracaoComponent } from './page/subtracao';

//multiplicação
import { MultiplicacaoComponent } from './page/multiplicacao';

//divisão
import { DivisaoComponent } from './page/divisao';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,

    //soma
    SomaComponent,

    //subtração
    SubtracaoComponent,

    //multiplicação
    MultiplicacaoComponent,

    //divisão
    DivisaoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
}
