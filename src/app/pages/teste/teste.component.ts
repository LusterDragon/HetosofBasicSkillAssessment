import { Component, OnInit} from '@angular/core';
import { Ihetosoft } from 'src/app/models/ihetosoft';
import { AsyncDelayService } from 'src/app/services/async-delay.service';
import { HetosoftService } from 'src/app/services/hetosoft.service';

@Component({
  selector: 'spa-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
itens:Array<Ihetosoft>=[];
count = 0;
  constructor(private hetosoftService:HetosoftService, private asyncDelay:AsyncDelayService) { }

  ngOnInit(): void {
    this.getApiData();
  }

   async getApiData(){
    await AsyncDelayService.delay(5000);
    this.hetosoftService.getItens().subscribe({
      next: (response) => this.itens = response,
      error: (err) => console.log("ERROR ", err.status)
  })
  }
}
