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

export interface ICategory {
  id: number;
  name: string;
}

export interface IGameData {
  id: number;
  name: string;
  description: string;
  category: ICategory;
  image: string;
}

interface IPlatform {
  id: number;
  name: string;
  logo: string;
}

export interface IGameDetailData {
  id: number;
  name: string;
  description: string;
  categories: ICategory[];
  platforms: IPlatform[];
  creationDate: string;
  lastModificationDate?: string;
  size: string;
  image: string;
  video?: string;
}
