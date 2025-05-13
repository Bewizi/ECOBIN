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
