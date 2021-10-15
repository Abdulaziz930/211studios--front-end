export interface IAsyncData<T> {
  error?: string;
  data?: T;
}

export interface IUrlData {
  url: string;
}

export interface ISliderItem {
  id: number;
  title: string;
  image: string;
}

interface Category {
  id: number;
  name: string;
}

export interface IGameData {
  id: number;
  name: string;
  description: string;
  category: Category;
  image: string;
}
