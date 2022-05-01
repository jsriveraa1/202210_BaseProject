import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListarComponent} from './listar.component';
import {DebugElement} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {PlantaService} from "../../services/plantas/planta.service";
import {PlantaModel} from "../model/planta.model";
import faker from "@faker-js/faker";
import {By} from "@angular/platform-browser";

describe('ListarComponent', () => {
  let component: ListarComponent;
  let fixture: ComponentFixture<ListarComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ListarComponent],
      providers: [PlantaService],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let lista = [
      new PlantaModel(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.lastName(),
        faker.name.firstName(),
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.lastName(),
      ), new PlantaModel(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.lastName(),
        faker.name.firstName(),
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.lastName(),
      ), new PlantaModel(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.lastName(),
        faker.name.firstName(),
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.lastName(),
      ),
    ];
    component.plantas = lista;
    fixture.detectChanges();
    debug = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Valida la creación de la tabla', () => {
    let rows = debug.nativeElement.querySelectorAll('tr');
    console.log(rows.length)

    expect(rows.length).toBe(4);
  })
});
