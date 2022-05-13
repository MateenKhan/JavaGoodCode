export interface Feature {
  name: string;
  definition: string;
  syntax: string;
  examples: Example[];
}
export interface Example {
  text: string;
  currentState:string;
}
