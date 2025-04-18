//soma
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomaComponent } from './soma.component';

describe('SomaComponent', () => {
  let component: SomaComponent;
  let fixture: ComponentFixture<SomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

//subtração
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtracaoComponent } from './subtracao.component';

describe('SubtracaoComponent', () => {
  let component: SubtracaoComponent;
  let fixture: ComponentFixture<SubtracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtracaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

//multiplicação
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicacaoComponent } from './multiplicacao.component';

describe('MultiplicacaoComponent', () => {
  let component: MultiplicacaoComponent;
  let fixture: ComponentFixture<MultiplicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiplicacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

//divisão
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisaoComponent } from './divisao.component';

describe('DivisaoComponent', () => {
  let component: DivisaoComponent;
  let fixture: ComponentFixture<DivisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivisaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
