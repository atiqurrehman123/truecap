// Dropdown Interface
interface dropdownlist {
  name: string;
  link: string;
}
interface DropdownTypes {
  name: string;
  dropdownlist: dropdownlist[];
}
// Search Width
interface Props  {
  Searchwidth?: string;
};
// ----------------------------End------------------------------------//
// ----------------------------Research Card--------------------------//
 interface Researchlist {
  id: string;
  name: string;
  desc: string;
  img:string,
  link: string;
};
interface ResearchCardtpe {
  Researchlisttype:Researchlist[]
}