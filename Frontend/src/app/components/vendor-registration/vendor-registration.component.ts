import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { VendorService } from '../../services/vendor.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { VendorRegistration } from '../../models/vendor-registration.model';

@Component({
  selector: 'app-vendor-registration',
  templateUrl: './vendor-registration.component.html',
  styleUrls: ['./vendor-registration.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
})
export class VendorRegistrationComponent {

  constructor(private integrationService: VendorService, private storage: LocalStorageService) { }

  request: VendorRegistration = new VendorRegistration();
  msg: string | undefined;
  //msg : any

  signupForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    profileImage: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    category: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    identityProof: new FormControl('', Validators.required),
    identityProofNumber: new FormControl('', Validators.required),
    typeOfService: new FormControl('', Validators.required),
    gstNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  public onSubmit() {
    this.storage.remove('auth-key');

    const formValue = this.signupForm.value;

    this.request.name = formValue.name;
    this.request.profileImage = formValue.profileImage;
    this.request.age = formValue.age.toString(); // Convert age to string
    this.request.dateOfBirth = formValue.dateOfBirth;
    this.request.email = formValue.email;
    this.request.category = formValue.category;
    this.request.mobileNumber = formValue.mobileNumber;
    this.request.username = formValue.username;
    this.request.identityProof = formValue.identityProof;
    this.request.identityProofNumber = formValue.identityProofNumber;
    this.request.typeOfService = formValue.typeOfService;
    this.request.gstNumber = formValue.gstNumber;
    this.request.password = formValue.password;
    this.request.confirmPassword = formValue.confirmPassword;
    console.log(formValue)

    if (this.signupForm.valid) {
      this.integrationService.doRegister(this.request).subscribe({
        next: (res) => {
          console.log(res.response);
          this.msg = res.response;
        },
        error: (err) => {
          console.log("Error Received:", err);
        }
      });
    } else {
      console.log("On submit failed. Form is invalid.");
    }
  }

}
