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
