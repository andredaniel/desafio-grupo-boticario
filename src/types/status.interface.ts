export enum StatusTypes {
  IN_VALIDATION = 'Em validação',
  DISAPPROVED = 'Reprovado',
  APPROVED = 'Aprovado',
}

export interface IStatus {
  type: StatusTypes
}
