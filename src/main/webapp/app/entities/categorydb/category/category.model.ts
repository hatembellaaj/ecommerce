import dayjs from 'dayjs/esm';

export interface ICategory {
  id?: string;
  idParent?: number | null;
  name?: string | null;
  status?: number | null;
  createdat?: dayjs.Dayjs | null;
  updatedat?: dayjs.Dayjs | null;
}

export class Category implements ICategory {
  constructor(
    public id?: string,
    public idParent?: number | null,
    public name?: string | null,
    public status?: number | null,
    public createdat?: dayjs.Dayjs | null,
    public updatedat?: dayjs.Dayjs | null
  ) {}
}

export function getCategoryIdentifier(category: ICategory): string | undefined {
  return category.id;
}
