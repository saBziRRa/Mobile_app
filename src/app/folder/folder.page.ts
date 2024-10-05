import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface GameType {
  Game_name: string
  Game_autor: string
}

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}
  list_name: string = "My_Games"
  input_Name: string = "--"
  input_Autor: string = "--"
  set_value: string = "__"
  games: GameType[] = []
  val: string = "----"
  val1:string = "?"
  val2:string = "?"
  btnClick(){
this.val=this.val1
  }
  btnClick2(){
 this.games.push({Game_name: this.input_Name, Game_autor:this.input_Autor})
 this.set_value = this.input_Name
  }
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
