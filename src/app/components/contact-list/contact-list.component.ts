import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{

  contacts: Contact[];

  constructor(private contactService: ContactService, private router:Router){

  }

  ngOnInit(): void {
    this.getContactList();
  }

  private getContactList(){
    this.contactService.getContactList().subscribe(data=>
      {
        console.log(data)
        this.contacts = data;
        console.log(this.contacts)
      })
  }

  updateContact(id:number){
    this.router.navigate(['update-contact', id])
  }

  deleteContact(id:number){
    this.contactService.deleteContact(id).subscribe(data=>{
      console.log(data)
    })
  }
  
}
