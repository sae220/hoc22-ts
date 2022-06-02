// enums
enum Weight {
    CHICKEN = 10,
    COW = 11,
    SHEEP = 13
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

enum ColoredBlockDirection {
    //% block=left alias=LEFT
    Left,
    //% block=right alias=RIGHT
    Right,
    //% block=up alias=UP
    Up,
    //% block=down alias=DOWN
    Down
}

enum MovementBlock {
    Forward = Block.PinkConcrete,
    Back = Block.GrayConcrete,
    Left = Block.LightBlueConcrete,
    Right = Block.YellowConcrete,
    Up = Block.OrangeConcrete,
    Down = Block.MagentaConcrete,
    Invalid = Block.Bedrock
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
    //% block="summon %w weight"
    export function summonWeight(w: Weight): void {

        mobs.spawn(w, weightDropPosition);

    }

    /**
     * Agent Move (POC1-c)
     */
    //% block="agent move %d by %n"
    export function agentMove(d: SixDirection, n: number): void {
        agent.move(d, n)
    }

    /**
     * Cursor Move (testing)
     */
    //% block="cursor move %direction"
    export function cursorMove(direction: ColoredBlockDirection): void {
        moveInDirection(direction)
        loops.pause(10000)
    }

    // helper functions
    function moveInDirection(direction: ColoredBlockDirection) {
        const block = convertDirectionToMovementBlock(direction)

        blocks.place(block, blockDropPosition)
    }

    function convertDirectionToMovementBlock(direction: ColoredBlockDirection) : MovementBlock {
        switch(direction) {
            case ColoredBlockDirection.Left:
                return MovementBlock.Left
            case ColoredBlockDirection.Right:
                return MovementBlock.Right
            case ColoredBlockDirection.Up:
                return MovementBlock.Up
            case ColoredBlockDirection.Down:
                return MovementBlock.Down
        }

        return MovementBlock.Invalid
    }
}