import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';
@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent {

  contact: Contact = new Contact();

  constructor(private contactService:ContactService, 
              private router: Router){}

  onSubmit():void {
    console.log('Form submitted!');
    this.createContact();
  }

  createContact(){
    this.contactService.createContact(this.contact).subscribe(data=>
      console.log(data) 
    );
    this.navigateToContactList();
  }

  // After data being submitted (Click Submit), we need to navigate to the Contact List
  navigateToContactList(){
    this.router.navigate(['contacts'])
  }


}
