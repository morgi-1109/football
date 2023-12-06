export interface FootballApiReturn {
  get: string | null;
  parameters: any;
  errors: any[] | Record<string, string>; // If code 204 following documentation
  paging: { current: number | null, total: number | null };
  results: number | null;
}
