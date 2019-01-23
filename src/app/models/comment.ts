export class Comment {
    public id: number;
    public content: String = null;
    public liky = 0;
    public at_created = null;
    public at_updated = null;
    public subscribe = false;

    constructor (id: number, content: String, liky: number) {
        this.id = id;
        this.content = content;
        this.liky = liky;
        this.at_created = this.at_updated = Date();
    }
}
