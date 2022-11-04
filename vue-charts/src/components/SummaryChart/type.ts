type Rows = string[][];

interface SummaryHeader {
  idx: number;
  key: string;
  label: string;
  description: string;
  property_type: string;
  value_type: string;
}

export interface SummaryChartData {
  headers: SummaryHeader;
  rows: Rows;
}
