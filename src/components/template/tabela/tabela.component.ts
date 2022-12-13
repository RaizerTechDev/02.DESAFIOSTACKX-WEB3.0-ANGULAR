import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-tabela",
  templateUrl: "./tabela.component.html",
  styleUrls: ["./tabela.component.sass"],
})
export class TabelaComponent {
  @Input() selected!: string;

  ngOnInit(): void {}
}
