 export enum SelectedPage {
    Home = "home",
    AboutUs = "aboutus",
    Classes = "classes",
    ContactUs = "contactus"
  }

  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }