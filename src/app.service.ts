import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Base de datos
  private listEstudiante = [
    {
      "nombre": "ANGEL FERNANDO",
      "apellido": "AREVALOS GUZMAN",
      "edad": 20,
      "correo": 'angel@gmail.com',
      "celular": "70000777",
      "carrera": "LICENCIATURA EN BIOQUIMICA"
    }
  ];

  public index() {
    return this.listEstudiante;
  }

  public create (json) {
    return this.listEstudiante.push(json);
  }

  public show(id) {
    return this.listEstudiante[id - 1];
  }

  public edit(id, json) {
    this.listEstudiante[id - 1].nombre = json.nombre;
    this.listEstudiante[id - 1].apellido = json.apellido;
    this.listEstudiante[id - 1].edad = json.edad;
    this.listEstudiante[id - 1].correo = json.correo;
    this.listEstudiante[id - 1].celular = json.celular;
    this.listEstudiante[id - 1].carrera = json.carrera;
    return this.listEstudiante[id - 1];
  }
}
