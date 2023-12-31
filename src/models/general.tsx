export interface INavbarItem {
  id: string;
  name: string;
  link: string;
}

export interface IExperience {
  id: string;
  companyName: string;
  startDate: string;
  endDate: string;
  role: string;
  jobType: string;
  description: string;
  skills: number[];
  linkedin: string;
}

export interface ISkill {
  id: number;
  name: string;
  years: number;
}
