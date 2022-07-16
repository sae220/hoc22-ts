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

enum ChessBlockDirection {
    //% block=left alias=LEFT
    Left,
    //% block=right alias=RIGHT
    Right,
    //% block=forward alias=FORWARD
    Forward,
    //% block=back alias=BACK
    Back
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

enum ChessKingMovementBlock {
    Forward = Block.OrangeConcrete,
    Back = Block.MagentaConcrete,
    Left = Block.LightBlueConcrete,
    Right = Block.YellowConcrete,
    Invalid = Block.Bedrock
}

enum ChessQueenMovementBlock {
    Forward = Block.LimeConcrete,
    Back = Block.PinkConcrete,
    Left = Block.GrayConcrete,
    Right = Block.LightGrayConcrete,
    Invalid = Block.Bedrock
}

enum Custom {
    //% blockIdentity="blocks.custom" enumval=999 block="Phantom Membrane"
    //% jres alias=PHANTOM_MEMBRANE
    PhantomMembrane = 999,
    //% blockIdentity="blocks.custom" enumval=998 block="Arrow Up Orange"
    //% jres alias=ARROW_UP_ORANGE
    ArrowUpOrange = 998
}

// global variables
const placeBlockMechanicsCommunicationPos = world(0, 64, 0)
const weightDropPosition = world(-18, 77, 162)
const communicationsTimeout = 100
const chessTimeout = 500
const plateTimeout = 500
const teleportTimeout = 750

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

        blocks.place(b, placeBlockMechanicsCommunicationPos);

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
     * Place Block
     */
    //% block="place block"
    export function placeBlock(): void {
        placeBlockSignal()
    }

    /**
     * Baking Bread Harvest Wheat
     */
    //% block="harvest wheat"
    export function bakingBreadWheat(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
     * Baking Bread Mill Wheat
     */
    //% block="mill wheat"
    export function bakingBreadGrain(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
     * Baking Bread Make Dough
     */
    //% block="make dough"
    export function bakingBreadDough(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
     * Baking Bread Bake Into Bread
     */
    //% block="bake into bread"
    export function bakingBreadBread(): void {
        blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
     * Teleport to Light Blue Lever
     */
    //% block="teleport to light blue lever"
    export function teleportLightBlueLever(): void {
        player.teleport(world(13, 71, 71))
        loops.pause(teleportTimeout)
    }
    /**
     * Teleport to Magenta Lever
     */
    //% block="teleport to magenta lever"
    export function teleportMagentaLever(): void {
        player.teleport(world(23, 71, 71))
        loops.pause(teleportTimeout)
    }
    /**
     * Teleport to Yellow Lever
     */
    //% block="teleport to yellow lever"
    export function teleportYellowLever(): void {
        player.teleport(world(11, 71, 71))
        loops.pause(teleportTimeout)
    }
    /**
     * Teleport to Orange Lever
     */
    //% block="teleport to orange lever"
    export function teleportOrangeLever(): void {
        player.teleport(world(21, 71, 71))
        loops.pause(teleportTimeout)
    }
    /**
      * Feed The House Apple
      */
    //% block="feed house apple"
    export function feedHouseApple(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Feed The House Salmon
      */
    //% block="feed house salmon"
    export function feedHouseSalmon(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Feed The House Mushroom Stew
      */
    //% block="feed house mushroom strew"
    export function feedHouseMushroomStew(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
      * Dinner Table Swap Red
      */
    //% block="swap red side"
    export function dinnerTableSwapRed(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Dinner Table Swap Green
      */
    //% block="swap green side"
    export function dinnerTableSwapGreen(): void {
        blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Dinner Table Swap Blue
      */
    //% block="swap blue side"
    export function dinnerTableSwapBlue(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Dinner Table Swap Yellow
      */
    //% block="swap yellow side"
    export function dinnerTableSwapYellow(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
      * Mosaic Push Up
      */
    //% block="push blue (up)"
    export function mosaicPushUp(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Mosaic Push Down
      */
    //% block="push red (down)"
    export function mosaicPushDown(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Mosaic Push Left
      */
    //% block="push yellow (left)"
    export function mosaicPushLeft(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Mosaic Push right
      */
    //% block="push green (right)"
    export function mosaicPushRight(): void {
        blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
     * Cursor Move
     */
    //% block="cursor move %direction"
    export function cursorMove(direction: ColoredBlockDirection): void {
        moveCursorInDirection(direction)
    }

    /**
     * Cursor Move Up Orange
     */
    //% block="move cursor `Custom.PhantomMembrane` by %n "
    export function cursorMoveUpOrange(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Move King
     */
    //% block="move king %direction"
    export function kingMove(direction: ChessBlockDirection): void {
        moveKingChessInDirection(direction)
    }
    /**
     * Move Queen
     */
    //% block="move queen %direction"
    export function queenMove(direction: ChessBlockDirection): void {
        moveQueenChessInDirection(direction)
    }

    /**
      * Potion Room Mixing Puzzle Nether Wart
      */
    //% block="add nether wart"
    export function mixingPuzzleNetherWart(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Potion Room Mixing Puzzle Phantom Membrane
      */
    //% block="add phantom membrane"
    export function mixingPuzzlePhantomMembrane(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Potion Room Mixing Puzzle Spider Eye
      */
    //% block="add spider eye"
    export function mixingPuzzleSpiderEye(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
     * Break Block
     */
    //% block="break block"
    export function breakBlock(): void {
        placeBlockSignal()
    }

    /**
      * Greenhouse Flower Planting Red Flower
      */
    //% block="plant red flower"
    export function flowerPlantingRedFlower(): void {
        blocks.place(Block.LimeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    
    /**
      * Greenhouse Flower Planting Yellow Flower
      */
    //% block="plant yellow flower"
    export function flowerPlantingYellowFlower(): void {
        blocks.place(Block.PinkConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Greenhouse Flower Planting Blue Flower
      */
    //% block="plant blue flower"
    export function flowerPlantingBlueFlower(): void {
        blocks.place(Block.GrayConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
      * Lab Minecart Sorting Zombie
      */
    //% block="sort zombie"
    export function minecraftSortingZombie(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Lab Minecart Sorting Skeleton
      */
    //% block="sort skeleton"
    export function minecraftSortingSkeleton(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Lab Minecart Sorting Creeper
      */
    //% block="sort creeper"
    export function minecraftSortingCreeper(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    //% block="`Custom.PhantomMembrane`"
    export function phantomMembrane(): void{}

    // helper functions
    function resetSignal(): void {
        blocks.place(Block.WhiteConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    function placeBlockSignal(): void{
        blocks.place(Block.LimeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    function moveCursorInDirection(direction: ColoredBlockDirection) {
        const block = convertDirectionToMovementBlock(direction)

        blocks.place(block, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    function moveKingChessInDirection(direction: ChessBlockDirection) {
        const block = convertKingChessDirectionToMovementBlock(direction)

        blocks.place(block, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    function moveQueenChessInDirection(direction: ChessBlockDirection) {
        const block = convertQueenChessDirectionToMovementBlock(direction)

        blocks.place(block, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
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

    function convertKingChessDirectionToMovementBlock(direction: ChessBlockDirection): ChessKingMovementBlock {
        switch (direction) {
            case ChessBlockDirection.Left:
                return ChessKingMovementBlock.Left
            case ChessBlockDirection.Right:
                return ChessKingMovementBlock.Right
            case ChessBlockDirection.Back:
                return ChessKingMovementBlock.Back
            case ChessBlockDirection.Forward:
                return ChessKingMovementBlock.Forward
        }

        return ChessKingMovementBlock.Invalid
    }

    function convertQueenChessDirectionToMovementBlock(direction: ChessBlockDirection): ChessQueenMovementBlock {
        switch (direction) {
            case ChessBlockDirection.Left:
                return ChessQueenMovementBlock.Left
            case ChessBlockDirection.Right:
                return ChessQueenMovementBlock.Right
            case ChessBlockDirection.Back:
                return ChessQueenMovementBlock.Back
            case ChessBlockDirection.Forward:
                return ChessQueenMovementBlock.Forward
        }

        return ChessQueenMovementBlock.Invalid
    }
}