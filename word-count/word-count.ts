import { strict } from "assert";

export class Words {
    public count(str: string): Map<string, number> {
        return str.trim().toLowerCase().split(/\s+/)
            .reduce( (acc, w) => acc.set(w, acc.get(w) + 1 || 1), new Map() )

    }
}