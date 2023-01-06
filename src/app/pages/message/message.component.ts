import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message:string | null = null;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.message = this.route.snapshot.paramMap.get('message');
    if(!this.message){
      this.message = "Faça uma busca pela cidade ou use sua localização";
    }
  }

}
