import {StandingViewItem} from "../class/standing-view-item";

export interface StandingTableColumn {
  label?: string;
  property: keyof StandingViewItem;
  width?: number;
}
