export abstract class Incrementer {
    private static identifier = 0;

    public static increment() {
        return ++this.identifier;
    }
}