// enums
enum Weight {
    CHICKEN = 10,
    COW = 11,
    SHEEP = 13
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
    //% block="drop `Block.MagentaConcrete` block"
    export function summonColoredBlockMagenta(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos);
        loops.pause(communicationsTimeout)
    }
    /**
     * Summon colored blocks (POC1-a)
     */
    //% block="drop `Block.LightBlueConcrete` block"
    export function summonColoredBlockLightBlue(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos);
        loops.pause(communicationsTimeout)
    }
    /**
     * Summon colored blocks (POC1-a)
     */
    //% block="drop `Block.YellowConcrete` block"
    export function summonColoredBlockYellow(): void {
        blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos);
        loops.pause(communicationsTimeout)
    }
    /**
     * Summon colored blocks (POC1-a)
     */
    //% block="drop `Block.LimeConcrete` block"
    export function summonColoredBlockLime(): void {
        blocks.place(Block.LimeConcrete, placeBlockMechanicsCommunicationPos);
        loops.pause(communicationsTimeout)
    }

    /**
     * Summon weight (POC1-b)
     */
    //% block="summon `Custom.WeightedChicken` weight"
    export function summonWeightChicken(): void {
        mobs.spawn(Weight.CHICKEN, weightDropPosition);
        loops.pause(communicationsTimeout)
    }
    /**
     * Summon weight (POC1-b)
     */
    //% block="summon `Custom.WeightedCow` weight"
    export function summonWeightCow(): void {
        mobs.spawn(Weight.COW, weightDropPosition);
        loops.pause(communicationsTimeout)
    }
    /**
     * Summon weight (POC1-b)
     */
    //% block="summon `Custom.WeightedSheep` weight"
    export function summonWeightSheep(): void {
        mobs.spawn(Weight.SHEEP, weightDropPosition);
        loops.pause(communicationsTimeout)
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
        loops.pause(communicationsTimeout)
    }

    /**
     * Toggle Redstone Lamp
     */
    //% block="toggle `Block.RedstoneLamp`"
    export function toggleLight(): void {
        placeBlockSignal()
        loops.pause(communicationsTimeout)
    }

    /**
     * Baking Bread Harvest Wheat
     */
    //% block="harvest wheat `Custom.BreadBakeOne`"
    export function bakingBreadWheat(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
     * Baking Bread Mill Wheat
     */
    //% block="mill wheat  `Custom.BreadBakeTwo`"
    export function bakingBreadGrain(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
     * Baking Bread Make Dough
     */
    //% block="make dough `Custom.BreadBakeThree`"
    export function bakingBreadDough(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
     * Baking Bread Bake Into Bread
     */
    //% block="bake into bread `Custom.BreadBakeFour`"
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
    //% block="feed house `Item.Apple`"
    export function feedHouseApple(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Feed The House Salmon
      */
    //% block="feed house `Item.RawSalmon`"
    export function feedHouseSalmon(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Feed The House Mushroom Stew
      */
    //% block="feed house `Item.MushroomStew`"
    export function feedHouseMushroomStew(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
      * Dinner Table Swap Red
      */
    //% block="swap `Block.RedCarpet` side"
    export function dinnerTableSwapRed(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Dinner Table Swap Green
      */
    //% block="swap `Block.LimeCarpet` side"
    export function dinnerTableSwapGreen(): void {
        blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Dinner Table Swap Blue
      */
    //% block="swap `Block.BlueCarpet` side"
    export function dinnerTableSwapBlue(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Dinner Table Swap Yellow
      */
    //% block="swap `Block.YellowCarpet` side"
    export function dinnerTableSwapYellow(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
      * Mosaic Push Up
      */
    //% block="push `Custom.ChessUpBlue`"
    export function mosaicPushUp(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Mosaic Push Down
      */
    //% block="push `Custom.ChessDownRed`"
    export function mosaicPushDown(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Mosaic Push Left
      */
    //% block="push `Custom.ChessLeftYellow`"
    export function mosaicPushLeft(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Mosaic Push right
      */
    //% block="push `Custom.ChessRightGreen`"
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
     * Cursor Move Orientation One
     */
    //% block="cursor move `Custom.ArrowUpOrange` by %n"
    export function cursorMoveOrientationOneUp(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Orientation One
     */
    //% block="cursor move `Custom.ArrowDownMagenta` by %n"
    export function cursorMoveOrientationOneDown(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Orientation One
     */
    //% block="cursor move `Custom.ArrowLeftBlue` by %n"
    export function cursorMoveOrientationOneLeft(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Orientation One
     */
    //% block="cursor move `Custom.ArrowRightYellow` by %n"
    export function cursorMoveOrientationOneRight(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Cursor Move Orientation two
     */
    //% block="cursor move `Custom.ArrowUpMagenta` by %n"
    export function cursorMoveOrientationTwoUp(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Orientation two
     */
    //% block="cursor move `Custom.ArrowDownOrange` by %n"
    export function cursorMoveOrientationTwoDown(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Orientation two
     */
    //% block="cursor move `Custom.ArrowLeftYellow` by %n"
    export function cursorMoveOrientationTwoLeft(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Orientation two
     */
    //% block="cursor move `Custom.ArrowRightBlue` by %n"
    export function cursorMoveOrientationTwoRight(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }


    /**
     * Cursor Move Up Orange
     */
    //% block="move cursor `Custom.ArrowUpOrange` by %n "
    export function cursorMoveUpOrange(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Down Magenta
     */
    //% block="move cursor `Custom.ArrowDownMagenta` by %n "
    export function cursorMoveDownMagenta(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Left Blue
     */
    //% block="move cursor `Custom.ArrowLeftBlue` by %n "
    export function cursorMoveLeftBlue(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Right Yellow
     */
    //% block="move cursor `Custom.ArrowRightYellow` by %n "
    export function cursorMoveRightYellow(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Cursor Move Up Magenta
     */
    //% block="move cursor `Custom.ArrowUpMagenta` by %n "
    export function cursorMoveUpMagenta(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Down Orange
     */
    //% block="move cursor `Custom.ArrowDownOrange` by %n "
    export function cursorMoveDownOrange(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Left Yellow
     */
    //% block="move cursor `Custom.ArrowLeftYellow` by %n "
    export function cursorMoveLeftYellow(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Right Blue
     */
    //% block="move cursor `Custom.ArrowRightBlue` by %n "
    export function cursorMoveRightBlue(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Move King
     */
    //% block="move `Custom.ChessKing` %direction"
    export function kingMove(direction: ChessBlockDirection): void {
        moveKingChessInDirection(direction)
    }
    /**
     * Move Queen
     */
    //% block="move `Custom.ChessQueen` %direction"
    export function queenMove(direction: ChessBlockDirection): void {
        moveQueenChessInDirection(direction)
    }

    /**
      * Potion Room Mixing Puzzle Nether Wart
      */
    //% block="add `Item.NetherWart`"
    export function mixingPuzzleNetherWart(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Potion Room Mixing Puzzle Phantom Membrane
      */
    //% block="add `Custom.PhantomMembrane`"
    export function mixingPuzzlePhantomMembrane(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Potion Room Mixing Puzzle Spider Eye
      */
    //% block="add `Item.FermentedSpiderEye`"
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
    //% block="plant `Block.Poppy`"
    export function flowerPlantingRedFlower(): void {
        blocks.place(Block.LimeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    
    /**
      * Greenhouse Flower Planting Yellow Flower
      */
    //% block="plant `Block.YellowFlower`"
    export function flowerPlantingYellowFlower(): void {
        blocks.place(Block.PinkConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Greenhouse Flower Planting Blue Flower
      */
    //% block="plant `Block.BlueOrchid`"
    export function flowerPlantingBlueFlower(): void {
        blocks.place(Block.GrayConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
      * Lab Minecart Sorting Zombie
      */
    //% block="sort `Custom.ZombieFace`"
    export function minecraftSortingZombie(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Lab Minecart Sorting Skeleton
      */
    //% block="sort `Custom.SkeletonFace`"
    export function minecraftSortingSkeleton(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Lab Minecart Sorting Creeper
      */
    //% block="sort `Custom.CreeperFace`"
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