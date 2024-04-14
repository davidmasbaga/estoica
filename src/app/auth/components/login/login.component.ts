import { Component, AfterViewInit } from '@angular/core';

declare const google: any

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements AfterViewInit{


  ngAfterViewInit(): void {

this.googleInit()

  }

googleInit(){

  google.accounts.id.initialize({
    client_id: '454831064714-1ql9u8e8ul5aviocjmenq6iic3vepk5u.apps.googleusercontent.com',
    callback:this.handleCredentialResponse
  });

    google.accounts.id.renderButton(
    document.getElementById('buttonDiv'),
  // {theme:'outline', size:'large'}
  {theme:'outline', type:'standard', size:'large', width:'380' }
)
}

handleCredentialResponse(response:any){
  console.log('Encoded Google token:', response.credential)
}


}
