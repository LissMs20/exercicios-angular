import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.component.html',
  styleUrls: ['./exercicio.component.scss']
})
export class ExercicioComponent {
  frase: string = 'Olá, mundo';
  link: string = 'https://undertale.com'

  textoSelecionado: string = 'texto1';

  backgroundColor: string = 'white'
  fonteCor: string = '#070b21'

  mudarCores() {
    if (this.backgroundColor === '#070b21' && this.fonteCor === 'white') {
      this.backgroundColor = 'white';
      this.fonteCor = '#070b21';
    } else {
      this.backgroundColor = '#070b21';
      this.fonteCor = 'white';
    }
  }
}
