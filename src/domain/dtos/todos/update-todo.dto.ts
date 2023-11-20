export class UpdateTodoDTO {
  private constructor(
    public readonly id: number,
    public readonly text?: string,
    public readonly completedAt?: Date
  ) {}

  get values() {
    const returObj: { [key: string]: any } = {};

    if (this.text) returObj.text = this.text;
    if (this.completedAt) returObj.completedAt = this.completedAt;

    return returObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateTodoDTO?] {
    const { id, text, completedAt } = props;
    let newCompletedAt = completedAt;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number', undefined];
    }

    if (completedAt) {
      newCompletedAt = new Date(completedAt);
      if (newCompletedAt.toDateString() === 'Invalid Date') {
        return ['CompletedAt must be a valid date', undefined];
      }
    }

    return [undefined, new UpdateTodoDTO(id, text, newCompletedAt)];
  }
}
