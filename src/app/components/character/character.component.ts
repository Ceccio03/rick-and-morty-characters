import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterDetail } from 'src/app/model/character';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character?: CharacterDetail;

  constructor(private route: ActivatedRoute, private dataServ: DataService, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.dataServ.getSingleCharacter(id).subscribe(char => this.character = char);
    }
  }

  navigateToOrigin() {
    const url = this.character!.origin.url;
    const urlArray = url.split('/');
    const originId = urlArray[urlArray.length - 1];

    console.log(originId);
    
    this.router.navigateByUrl("/origin/" + originId);
  }

  navigateToLocation() {
    const url = this.character!.location.url;
    const urlArray = url.split('/');
    const locationId = urlArray[urlArray.length - 1];

    console.log(locationId);
    
    this.router.navigateByUrl("/location/" + locationId);
  }
}