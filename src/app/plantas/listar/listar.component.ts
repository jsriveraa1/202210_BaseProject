import {Component, OnInit} from '@angular/core';
import {PlantaService} from "../../services/plantas/planta.service";
import {PlantaModel} from "../model/planta.model";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  plantas: Array<PlantaModel> = [];
  countTypeInside: number = 0;
  countTypeExterior: number = 0;

  constructor(private plantsService: PlantaService) {
  }

  ngOnInit(): void {
    this.getPlants()
  }

  getPlants(): void {
    this.plantsService.getPlantas().subscribe((planta) => {
      this.plantas = planta;
      this.countType(planta)
    });
  }

  countType(result: PlantaModel[]): void{
    this.countTypeExterior = result.filter(item => item.tipo === 'Exterior').length
    this.countTypeInside = result.filter(item => item.tipo === 'Interior').length
  }


}
