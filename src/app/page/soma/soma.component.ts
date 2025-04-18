//soma
import { Component } from '@angular/core';
import { SomaService } from '../../services';

@Component({
  selector: 'app-soma',
  standalone: true,
  imports: [],
  templateUrl: './soma.component.html',
  styleUrl: './soma.component.css'
})
export class SomaComponent {
  private res : number = 0;

  constructor(private somaService: SomaService) { }

  somarBotao(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;
    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.somaService.somar(n1, n2);
  }

  get resultado(): string {
    return this.res.toString();
  }
}

//subtração
import { Component } from '@angular/core';
import { SubtracaoService } from '../../services';

@Component({
  selector: 'app-subtracao',
  standalone: true,
  imports: [],
  templateUrl: './subtracao.component.html',
  styleUrl: './subtracao.component.css'
})
export class SubtracaoComponent {
  private res : number = 0;

  constructor(private subtracaoService: SubtracaoService) { }

  subtrairBotao(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;
    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.subtracaoService.subtrair(n1, n2);
  }

  get resultado(): string {
    return this.res.toString();
  }
}

//multiplicação
import { Component } from '@angular/core';
import { MultiplicacaoService } from '../../services';

@Component({
  selector: 'app-multiplicacao',
  standalone: true,
  imports: [],
  templateUrl: './multiplicacao.component.html',
  styleUrl: './multiplicacao.component.css'
})
export class MultiplicacaoComponent {
  private res : number = 0;

  constructor(private multiplicacaoService: MultiplicacaoService) { }

  multiplicarBotao(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;
    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.multiplicacaoService.multiplicar(n1, n2);
  }

  get resultado(): string {
    return this.res.toString();
  }
}

//divisão
import { Component } from '@angular/core';
import { DivisaoService } from '../../services';

@Component({
  selector: 'app-divisao',
  standalone: true,
  imports: [],
  templateUrl: './divisao.component.html',
  styleUrl: './divisao.component.css'
})
export class DivisaoComponent {
  private res : number = 0;

  constructor(private divisaoService: DivisaoService) { }

  dividirBotao(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;
    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.divisaoService.dividir(n1, n2);
  }

  get resultado(): string {
    return this.res.toString();
  }
}

