import { NgStyle } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent {
  // Traduções

  language = [

    {
      en: "Hello👋🏻 my name is rafael raizer (front-end developer)😉 Technologies that I have experience🚀",
      pt: "Olá👋🏻 meu nome é Rafael Raizer (Desenvolvedor Front-End)😉 Tecnologias que tenho experiência🚀",
      es: "Hola👋🏻 mi nombre es rafael Raizer (Desarrolladora Front-End)😃 Tecnologías en las que tengo experiencia🚀",
    },
  ];

  // Arrays de names,images e metodos
  flags = [
    {
      name: "Português",
      flag: "../../../assets/images/brazil.png",
      metodo: () => (this.selected = this.language[0].pt),
    },
    {
      name: "Español",
      flag: "../../../assets/images/spain.png",
      metodo: () => (this.selected = this.language[0].es),
    },
    {
      name: "English",
      flag: "../../../assets/images/united-states.png",
      metodo: () => (this.selected = this.language[0].en),
    },
  ];

  //Valor inicial da linguagem
  selected = this.language[0].pt;

  //O Button ( Filho ) ira enviar um dados para o App ( pai )
  onChangeLanguage($event: string) {
    if ($event == "Português") {
      this.flags[0].metodo();
    } else if ($event == "Español") {
      this.flags[1].metodo();
    } else {
      this.flags[2].metodo();
    }
  }
}
