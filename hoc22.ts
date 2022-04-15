//%  block="Hour of Code 2022" weight=200 color=#BF9B30 icon="\u2605"
namespace hoc22 {

    /**
     * Summon Chicken for weight activity (POC1-b)
     */
    //% block="Summon Chicken"
    export function summonChickenWeight() {

        mobs.spawn(CHICKEN, world(-15, 72, -24));
    }

    /**
     * Summon Sheep for weight activity (POC1-b)
     */
    //% block="Summon Sheep"
    export function summonSheepWeight() {

        mobs.spawn(SHEEP, world(-15, 72, -24));
    }

    /**
     * Summon Cow for weight activity (POC1-b)
     */
    //% block="Summon Cow"
    export function summonCowWeight() {

        mobs.spawn(COW, world(-15, 72, -24));
    }

}