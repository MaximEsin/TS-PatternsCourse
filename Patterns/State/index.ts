class DocumentItem {
  public text: string;
  private state: DocumentItemState;

  constructor() {
    this.setState(new DraftDocumentItemState());
  }

  getState() {
    return this.state;
  }

  setState(state: DocumentItemState) {
    this.state = state;
    this.state.setContext(this);
  }

  publishDoc() {
    this.state.publish();
  }

  deleteDoc() {
    this.state.delete();
  }
}

abstract class DocumentItemState {
  public name: string;
  public item: DocumentItem;

  public setContext(item: DocumentItem) {
    this.item = item;
  }

  public abstract publish(): void;
  public abstract delete(): void;
}

class DraftDocumentItemState extends DocumentItemState {
  constructor() {
    super();
    this.name = 'DraftDocument';
  }

  public publish(): void {
    console.log(this.item.text);
    this.item.setState(new PublishDocumentItemState());
  }

  public delete(): void {
    console.log('Document was deleted');
  }
}

class PublishDocumentItemState extends DocumentItemState {
  constructor() {
    super();
    this.name = 'PublishDocument';
  }

  public publish(): void {
    console.log('You can not publish published document');
  }

  public delete(): void {
    console.log('Unpublished');
    this.item.setState(new DraftDocumentItemState());
  }
}

const item = new DocumentItem();
item.text = 'My post!';
console.log(item.getState());
item.publishDoc();
item.deleteDoc();
