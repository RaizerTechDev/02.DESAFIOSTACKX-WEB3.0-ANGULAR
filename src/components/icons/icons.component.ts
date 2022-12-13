import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { AppComponent } from "../../app/app.component";

@Component({
  selector: "app-icons",
  templateUrl: "./icons.component.html",
  styleUrls: ["./icons.component.sass"],
})
export class IconsComponent {
  // Iremos receber a propriedade de item passada como props para o botao e tipar a mesma
  @Input() flags!: { name: string; flag: string; metodo: () => void };
  // @Output() language: EventEmitter<any> = new EventEmitter();

  @Output() //Enviando props para o pai (App)
  language = new EventEmitter();

  handleClick(): void {
    //Passando um certo dados do item (filho ) para o pai (App)
    this.language.emit(this.flags.name);
    // this.mensagem = this.flags.name;
  }
}
