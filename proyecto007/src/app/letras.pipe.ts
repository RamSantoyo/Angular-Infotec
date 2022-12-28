import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letras'
})
export class LetrasPipe implements PipeTransform {
//transformar numero a texto del 1 al 7 en español, postugues, y ingles
  transform(value:any, args?: any): any {
    if(args != null){
      if(args == 'es'){
        switch(value){
          case 1: return 'Lunes';
          case 2: return 'Martes';
          case 3: return 'Miercoles';
          case 4: return 'Jueves';
          case 5: return 'Viernes';
          case 6: return 'Sabado';
          case 7: return 'Domingo';
        }
      }
      if(args == 'en'){
        switch(value){
          case 1: return 'Monday';
          case 2: return 'Tuesday';
          case 3: return 'Wednesday';
          case 4: return 'Thursday';
          case 5: return 'Friday';
          case 6: return 'Saturday';
          case 7: return 'Sunday';
        }
      }
      if(args == 'pt'){
        switch(value){
          case 1: return 'Segunda';
          case 2: return 'Terça';
          case 3: return 'Quarta';
          case 4: return 'Quinta';
          case 5: return 'Sexta';
          case 6: return 'Sabado';
          case 7: return 'Domingo';
        }
      }      
    }
    
  }

}
