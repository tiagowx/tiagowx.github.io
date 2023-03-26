import { ICertificate } from "./ICertificate";

export interface IBio {
  aboutMe: string;
  formation: {
    academic: string;
    certificates: 
      {
        bootcamps: ICertificate[];
        courses: ICertificate[];
      }
    ;
  };
}
