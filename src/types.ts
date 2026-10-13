export interface FluiComponentInfo {
  id: string;
  name: string;
  repoName: string;
  badge: string;
  tagline: string;
  description: string;
  githubUrl: string;
  stars: number;
  forks: number;
  demoGif?: string;
  features: string[];
  properties: {
    name: string;
    type: string;
    default: string;
    description: string;
  }[];
  delphiCode: {
    fluent?: string;
    component: string;
    description: string;
  };
  highlights: {
    icon: string;
    title: string;
    desc: string;
  }[];
}

export type ToastType = 'ftSuccess' | 'ftError' | 'ftInfo' | 'ftWarning' | 'ftCustom';
export type ToastPosition = 'ftpTopRight' | 'ftpBottomRight' | 'ftpTopLeft' | 'ftpBottomLeft';

export interface ToastItem {
  id: string;
  title: string;
  message: string;
  type: ToastType;
  duration: number;
  timestamp: number;
}
