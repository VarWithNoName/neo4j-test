import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Neo4jService } from '../neo4j-service/neo4j.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cypherForm!: FormGroup;
  $neo4resp?:Observable<any>;
  constructor(private neo4jService:Neo4jService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cypherForm = this.fb.group({cypherQuery:''})
  }

  // submitForm() {

  //   const req:Neo4jReq ={
  //     statements:[{
  //       statement: this.cypherForm.value.cypherQuery
  //     }]
  //   }
  //   this.$neo4resp = this.neo4jService.singleTransaction(req).pipe(take(1))

  //   console.log(this.cypherForm.value)
  // }

  submitFormBolt() {
    debugger;
    this.$neo4resp = this.neo4jService.run(this.cypherForm.value.cypherQuery)

    console.log(this.cypherForm.value)
  }
}
