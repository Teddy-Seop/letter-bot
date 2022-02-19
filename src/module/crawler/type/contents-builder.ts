import { IContents } from './contents.interface';

export class ContentsBuilder {
  #title: string;
  #body: string;

  public setTitle(title: string): this {
    this.#title = title;
    return this;
  }

  public setBody(body: string): this {
    this.#body = body;
    return this;
  }

  public build(): IContents {
    return {
      title: this.#title,
      body: this.#body,
    };
  }
}
