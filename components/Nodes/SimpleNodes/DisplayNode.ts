import { Node } from "@baklavajs/core";

export class DisplayNode extends Node {
    type = "Display";
    name = "Value";
    static _info = {
        type: "Display",
        group: "SimpleNodes"
    }

    constructor() {
        super();
        this.addInputInterface("Value");
    }
    public calculate() {
        const v = this.getInterface("Value").value
        this.name = "Value : " + Math.fround(v);
    }
}

