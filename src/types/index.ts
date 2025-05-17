export interface CategoryWastes {
  id: number;
  title: string;
  description: {
    text: string;
    subtext: string;
  };
  images: string;
  clicked: () => void;
}

export interface HouseHoldItems {
  id: number;
  icons: string;
  text: string;
}

export interface OnboardingSlide {
  title?: {
    title1?: string;
    title2?: string;
    title3?: string;
  };
  description?: {
    desOne?: string;
    desTwo?: string;
    desThree?: string;
  };
  image?: string;
}

export interface ApiError {
  status?: number;
  message?: string;
  errors?: Record<string, string>;
}
