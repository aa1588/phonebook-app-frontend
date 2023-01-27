import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit{

  id: number;
  contact: Contact = new Contact();

  constructor(private contactService:ContactService, private route:ActivatedRoute,
      private router:Router
  ){}

  ngOnInit():void{
    this.getContactById();
  }
  getContactById(){
    this.id = this.route.snapshot.params['id'];
    this.contactService.getContactById(this.id).subscribe(data=>{
      this.contact = data;
    });
  }

  onSubmit(){
    this.contactService.updateContact(this.contact).subscribe();
    this.gotoContactList();
  }

  gotoContactList(){
    this.router.navigate(['/contacts'])
  }
}
