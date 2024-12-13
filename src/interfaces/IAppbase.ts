import { ReactNode } from "react";

export interface IMenu {
  url: string;
  displayName: string;
  visible: boolean;
  icon?: any;
  component?: ReactNode;
  hash?: string;
}
