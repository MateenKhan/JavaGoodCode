export interface Feature {
  name: string;
  definition: string;
  syntax: string;
  examples: Example[];
  file:string;
}
export interface Example {
  text: string;
  currentState:string;
}
