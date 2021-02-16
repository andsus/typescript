import { ResistorColor } from "./resistor-color-duo";

class App {
    public static start() {
        const resistorColor = new ResistorColor(["yellow", "violet"])
        console.log(resistorColor.value()) //.toEqual(47)
        
    }
}
App.start()