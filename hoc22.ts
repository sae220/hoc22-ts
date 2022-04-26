// enums
enum Weight {
    //% blockIdentity="mobs.animal" block="chicken" 
    //% jres alias=CHICKEN
    Chicken = 10,
    //% blockIdentity="mobs.animal" block="cow" 
    //% jres alias=COW
    Cow = 11,
    //% blockIdentity="mobs.animal" block="sheep"
    //% jres alias=SHEEP
    Sheep = 13
}


enum ColoredBlocks {
    //% blockIdentity="blocks.block" enumval=262380 block="yellow"
    //% jres alias=YELLOW_CONCRETE
    YellowConcrete = 262380,
    //% blockIdentity="blocks.block" enumval=131308 block="magenta"
    //% jres alias=MAGENTA_CONCRETE
    MagentaConcrete = 131308,
    //% blockIdentity="blocks.block" enumval=196844 block="light blue"
    //% jres alias=LIGHT_BLUE_CONCRETE
    LightBlueConcrete = 196844,
    //% blockIdentity="blocks.block" enumval=327916 block="lime"
    //% jres alias=LIME_CONCRETE
    LimeConcrete = 327916

}

// global variables
const blockDropPosition = world(0, 0, 0)
const weightDropPosition = world(27, 27, 33)

const directions = [
    UP,
    DOWN,
    LEFT,
    RIGHT
];

//%  block="Hour of Code 2022" weight=200 color=#6100ff icon="\u26EB"
namespace hoc22 {

    /**
     * Summon colored blocks (POC1-a)
     */
    //% block="drop %b block"
    export function summonColoredBlock(b: ColoredBlocks): void {

        blocks.place(b, blockDropPosition);

    }


    /**
     * Summon weight (POC1-b)
     */
    //% block="summon %w weight 2"
    export function summonWeight(w: Weight): void {

        mobs.spawn(w, weightDropPosition);

    }

    /**
     * Agent Move (POC1-c)
     */
    //% block="agent move %d by %n"
    export function agentMove(d: SixDirection, n: number): void {
        //const direction = directions[d];
        agent.move(d, 1)
    }
}