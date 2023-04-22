export interface Company {
  timelineTitle: string;
  timelineDate: string;
  position?: number;
}

export interface Timeline {
  curr: number;
  handleCompany: (i: number) => void;
  companies: Company[];
}

export interface StaticPositions {
  [index: number]: number[];
}

export interface TimelineDot {
  company: Company;
  isLast: boolean;
  active: boolean;
  handleCompany: () => void;
}
