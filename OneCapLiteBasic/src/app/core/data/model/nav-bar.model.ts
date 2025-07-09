import { GROUP } from 'src/environments/environment';

export interface NavItem {
  DisplayName: string;
  Disabled?: boolean;
  IconName?: string;
  Route?: string;
  Children?: NavItem[];
  AccessGroup?: GROUP[];
}
