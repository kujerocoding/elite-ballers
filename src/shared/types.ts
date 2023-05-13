 export enum SelectedPage {
    Home = "home",
    AboutUs = "aboutus",
    Classes = "classes",
    Pricing = "pricing",
    ContactUs = "contactus"
  }

  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }

  export interface PriceType {
    plan: string;
    price: string;
    description: string[];
  }