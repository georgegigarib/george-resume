export interface BoxType {
  startRow: number
  spanRow: number
  startColumn: number
  spanColumn: number
  content: string
}

export enum Sections {
  Dev = '#dev',
  Me = '#me',
  Music = '#music',
}
