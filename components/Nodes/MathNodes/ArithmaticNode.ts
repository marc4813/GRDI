import { Node } from "@baklavajs/core";

export class ArithmaticNode extends Node {
    type = "ArithmaticNode";
    name = "Math";
    static _info = {
        type: "Math",
        group: "Math"
    }


    constructor() {
        super();
        this.addInputInterface("Number 1", "NumberOption", 1);
        this.addInputInterface("Number 2", "NumberOption", 10);
        this.addOption("Operation", "SelectOption", "Add", undefined, {
            items: ["Add", "Subtract", "Multiply","Divide"]
        });
        this.addOutputInterface("Result");
    }

    calculate() {
        const n1 = this.getInterface("Number 1").value;
        const n2 = this.getInterface("Number 2").value;
        const operation = this.getOptionValue("Operation");
        let result;
        if (operation === "Add") {
            result = n1 + n2;
        } else if (operation === "Subtract") {
            result = n1 - n2;
        } else if (operation === "Multiply") {
            result = n1 * n2;
        } else if (operation === "Divide"){
            result = n1 / n2
        }
        this.getInterface("Result").value = result;
    }
}