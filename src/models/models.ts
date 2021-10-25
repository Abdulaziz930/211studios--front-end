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

export interface IStudioData {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface IFooterDescriptionData {
  id: number;
  footerDescription: string;
}

export interface ISocialMediaData {
  id: number;
  socialLink: string;
  socialIcon: string;
}

export interface IStudioPageData {
  id: number;
  title: string;
  description: string;
  bannerTitle: string;
  bannerDescription: string;
  image: string;
  bannerImage: string;
}

export interface ITeamMemberData {
  id: string;
  fullName: string;
  position: string;
  image: string;
}

interface IUserSocialMediaData {
  id: string;
  link: string;
  icon: string;
}

export interface ITeamMemberDetailData {
  id: string;
  fullName: string;
  position: string;
  description: string;
  image: string;
  userSocialMediasDto: IUserSocialMediaData[];
}

export interface ITeamMemberBannerData {
  id: number;
  title: string;
  description: string;
  image: string;
}
