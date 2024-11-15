// src/app/models/vendor-registration.model.ts
export class VendorRegistration {
    profileImage: string;
    name: string;
    username: string;
    password: string;
    confirmPassword: string;
    address: string;
    mobileNumber: string;
    age: number;
    dateOfBirth: Date;
    email: string;
    category: string;
    identityProof: string;
    identityProofNumber: string;
    typeOfService: string;
    gstNumber: string;
  
    constructor(data?: Partial<VendorRegistration>) {
      this.profileImage = data?.profileImage || '';
      this.name = data?.name || '';
      this.username = data?.username || '';
      this.password = data?.password || '';
      this.confirmPassword = data?.confirmPassword || '';
      this.address = data?.address || '';
      this.mobileNumber = data?.mobileNumber || '';
      this.age = data?.age || 0;
      this.dateOfBirth = data?.dateOfBirth || new Date();
      this.email = data?.email || '';
      this.category = data?.category || '';
      this.identityProof = data?.identityProof || '';
      this.identityProofNumber = data?.identityProofNumber || '';
      this.typeOfService = data?.typeOfService || '';
      this.gstNumber = data?.gstNumber || '';
    }
  }
  