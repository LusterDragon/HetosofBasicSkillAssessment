import { Component, EventEmitter, OnInit } from '@angular/core';
import { SnackbarComponent } from 'src/app/components/shared/snackbar/snackbar.component';
import { Ihetosoft } from 'src/app/models/ihetosoft';
import { AsyncDelayService } from 'src/app/services/async-delay.service';
import { HetosoftService } from 'src/app/services/hetosoft.service';

@Component({
  selector: 'spa-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  itens: Array<Ihetosoft> = [];
  snackbarText:string ='';
  count = 0;
  constructor(private hetosoftService: HetosoftService) { }

  ngOnInit(): void {
    this.getApiData();
  }

  async getApiData() {
    await AsyncDelayService.delay(5000);
    this.hetosoftService.getItens().subscribe({
      next: (response) => this.itens = response,
      error: (err) => console.log("ERROR ", err.status)
    })
  }

  activatesSnackbar() {
    let select = document.getElementById('select') as HTMLSelectElement
    let itemSelected = this.itens[select.selectedIndex];
    this.snackbarText = `id: ${itemSelected.iD_SISTEMA}  descrição: ${itemSelected.descricao}`;
    console.log(this.snackbarText);
    let x = document.getElementById("snackbar");
    x!.className = "show";
    setTimeout(function () { x!.className = x!.className.replace("show", ""); }, 3000);  
  }
}
