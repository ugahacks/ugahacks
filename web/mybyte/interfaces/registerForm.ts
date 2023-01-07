import { Genders, StudentYears, Majors, ShirtSizes } from "../enums/registerEnums"
import { ReactSelectObject } from "../interfaces/react-select";


export interface RegisterForm {
    firstName: string;
    lastName: string;
    gender: Genders;
    phoneNumber: string; // Worry about validation with '-' 
    countryResidence: ReactSelectObject;
    year: StudentYears;
    major: Majors;
    inputMajor: string;
    minor: string;
    school: ReactSelectObject;
    inputSchool: string;
    email: string; // .edu
    participated: boolean; // Have you ever participated in a hackathon? Yes or No
    hopeToSee: string; // What do you hope to see from UGA Hacks 8?
    dietaryRestrictions: string; // Vegetarian, etc : Should give options
    shirtSize: ShirtSizes; // S, M, L, XL, XXL, should be enum
    codeOfConduct: boolean; // MLH Code of COnduct: I have agreed , YES OR NO
    eventLogisticsInfo: boolean; // Yes
    mlhCommunication: boolean;
    resume: FileList;
    resumeLink: string;
    // excitement: Number; // Scale of 1- 100
}