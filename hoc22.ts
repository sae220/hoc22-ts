// enums
enum Weight {
    //% blockIdentity="mobs.animal" block="chicken"
    CHICKEN,
    //% blockIdentity="mobs.animal" block="sheep"
    SHEEP,
    //% blockIdentity="mobs.animal" block="cow"
    COW
}

enum ColoredBlocks {
    //% blockIdentity="blocks.block" enumval=262380 block="Yellow Concrete"
    //% jres alias=YELLOW_CONCRETE
    YellowConcrete = 262380,
    //% blockIdentity="blocks.block" enumval=131308 block="Magenta Concrete"
    //% jres alias=MAGENTA_CONCRETE
    MagentaConcrete = 131308,
    //% blockIdentity="blocks.block" enumval=196844 block="Light Blue Concrete"
    //% jres alias=LIGHT_BLUE_CONCRETE
    LightBlueConcrete = 196844,
    //% blockIdentity="blocks.block" enumval=327916 block="Lime Concrete"
    //% jres alias=LIME_CONCRETE
    LimeConcrete = 327916
    
}

// global variables
const blockDropPosition = world(0, 0, 0)
const weightDropPosition = world(27, 27, 33)

//%  block="Hour of Code 2022" weight=200 color=#6100ff icon="\u26EB"
namespace hoc22 {

    /**
     * Summon colored blocks (POC1-a)
     */
    //% block="Drop %b block"
    export function summonColoredBlock(b: ColoredBlocks): void {

        blocks.place(b, blockDropPosition);

    }


    /**
     * Summon weight (POC1-b)
     */
    //% block="summon %w weight"
    export function summonWeight(w: Weight): void {

        mobs.spawn(w, weightDropPosition);

    }


}
