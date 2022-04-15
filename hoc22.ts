// enums
enum Weight {
    //% block="chicken"
    CHICKEN,
    //% block="sheep"
    SHEEP,
    //% block="cow"
    COW
}

//%  block="Hour of Code 2022" weight=200 color=#6100ff icon="\u26EB"
namespace hoc22 {

    /**
     * Summon weight (POC1-b)
     */
    //% block="summon %w weight"
    export function summonWeight(w: Weight): void {

        mobs.spawn(w, world(-15, 72, -24));
    }


}