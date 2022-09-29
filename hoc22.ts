// enums
enum Weight {
    CHICKEN = 10,
    COW = 11,
    SHEEP = 13
}

enum Custom {
    //% blockIdentity="blocks.custom" enumval=998 block="Arrow Up Orange"
    //% jres alias=ARROW_UP_ORANGE
    ArrowUpOrange = 998,
    //% blockIdentity="blocks.custom" enumval=997 block="Arrow Down Magenta"
    //% jres alias=ARROW_DOWN_MAGENTA
    ArrowDownMagenta = 997,
    //% blockIdentity="blocks.custom" enumval=996 block="Arrow Left Blue"
    //% jres alias=ARROW_LEFT_BLUE
    ArrowLeftBlue = 996,
    //% blockIdentity="blocks.custom" enumval=995 block="Arrow Right Yellow"
    //% jres alias=ARROW_RIGHT_YELLOW
    ArrowRightYellow = 995
}

enum TwoDirection {
    //% block="`Block.MagentaConcrete`"
    Left,
    //% block="`Block.LimeConcrete`"
    Right
}


// global variables
const placeBlockMechanicsCommunicationPos = world(0, 64, 0);
const weightDropPosition = world(-18, 77, 162);
const communicationsTimeout = 100;


//%  block="Hour of Code 2022" weight=200 color=#6100ff icon="\u26EB"
namespace hoc22 {

    /**
     * Summon Magenta Block
     */
    //% block="drop %n `Block.MagentaConcrete`"
    export function summonColoredBlockMagenta(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon Light Blue Block
     */
    //% block="drop %n `Block.LightBlueConcrete`"
    export function summonColoredBlockLightBlue(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon Yellow Block
     */
    //% block="drop %n `Block.YellowConcrete`"
    export function summonColoredBlockYellow(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon Green Block
     */
    //% block="drop %n `Block.LimeConcrete`"
    export function summonColoredBlockLime(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LimeConcrete, placeBlockMechanicsCommunicationPos);
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Summon Chicken Weight
     */
    //% block="summon %n `Custom.WeightedChicken`"
    export function summonWeightChicken(n: number): void {
        for (let i = 0; i < n; i++) {
            mobs.spawn(Weight.CHICKEN, weightDropPosition);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon Cow Weight
     */
    //% block="summon %n `Custom.WeightedCow`"
    export function summonWeightCow(n: number): void {
        for (let i = 0; i < n; i++) {
            mobs.spawn(Weight.COW, weightDropPosition);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon Sheep Weight
     */
    //% block="summon %n `Custom.WeightedSheep`"
    export function summonWeightSheep(n: number): void {
        for (let i = 0; i < n; i++) {
            mobs.spawn(Weight.SHEEP, weightDropPosition);
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Agent Move 
     */
    //% block="agent move %d by %n"
    export function agentMove(d: SixDirection, n: number): void {
        agent.move(d, n)
    }

    /**
     * Clay Ball Move
     */
    //% block="clay ball move %d by %n"
    export function clayBallMove(d: SixDirection, n: number): void {
        agent.move(d, n)
    }

    /**
     * Place Block
     */
    //% block="place block"
    export function placeBlock(): void {
        placeBlockSignal(Block.LimeConcrete)
    }

    /**
    * Place Magenta Concrete
    */
    //% block="place `Block.MagentaConcrete` block"
    export function placeMagentaBlock(): void {
        placeBlockSignal(Block.LimeConcrete)
    }
    /**
     * Place Lime Concrete
     */
    //% block="place `Block.LimeConcrete` block"
    export function placeLimeBlock(): void {
        placeBlockSignal(Block.PinkConcrete)
    }
    /**
     * Place Yellow Concrete
     */
    //% block="place `Block.YellowConcrete` block"
    export function placeYellowBlock(): void {
        placeBlockSignal(Block.GrayConcrete)
    }
    /**
     * Place Light Blue
     */
    //% block="place `Block.LightBlueConcrete` block"
    export function placeLightBlueBlock(): void {
        placeBlockSignal(Block.LightGrayConcrete)
    }



    /**
     * Clay Golem Move Forward
     */
    //% block="move clay golem forward by %n"
    export function clayGolemMoveForward(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.OrangeConcrete)
        }
    }

    /**
     * Enderman Butler Move Forward
     */
    //% block="move enderman by %n"
    export function endermanButlerMoveForward(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.OrangeConcrete)
        }
    }

    /**
     * Wait for Block
     */
    //% block="wait for block"
    export function waitForBlock(): void {
        placeBlockSignal(Block.MagentaConcrete)
    }

    /**
     * Teleport to Diamond Block
     */
    //% block="teleport enderman to `Block.DiamondBlock`"
    export function superJump(): void {
        placeBlockSignal(Block.MagentaConcrete)
    }

    /**
     * Activate Yellow Cannon
     */
    //% block="activate `Block.YellowConcrete` cannon"
    export function yellowCannon(): void {
        placeBlockSignal(Block.YellowConcrete)
    }

    /**
     * Activate Lime Cannon
     */
    //% block="activate `Block.LimeConcrete` cannon"
    export function limeCannon(): void {
        placeBlockSignal(Block.LimeConcrete)
    }

    /**
     * Activate Yellow Cannon
     */
    //% block="activate `Block.LightBlueConcrete` cannon"
    export function lightBlueCannon(): void {
        placeBlockSignal(Block.LightBlueConcrete)
    }

    /**
     * Activate Magenta Cannon
     */
    //% block="activate `Block.MagentaConcrete` cannon"
    export function magentaCannon(): void {
        placeBlockSignal(Block.MagentaConcrete)
    }

    /**
     * Rotate Outer Ring Clockwise
     */
    //% block="rotate outer-ring clockwise by %n"
    export function outerRingClockwise(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.OrangeConcrete)
        }
    }

    /**
     * Rotate Outer Ring Counterclockwise
     */
    //% block="rotate outer-ring counterclockwise by %n"
    export function outerRingCounterclockwise(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.MagentaConcrete)
        }
    }

    /**
     * Rotate Middle Ring Clockwise
     */
    //% block="rotate middle-ring clockwise by %n"
    export function middleRingClockwise(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.LightBlueConcrete)
        }
    }

    /**
     * Rotate Middle Ring Counterclockwise
     */
    //% block="rotate middle-ring counterclockwise by %n"
    export function middleRingCounterclockwise(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.YellowConcrete)
        }
    }

    /**
     * Rotate Inner Ring Clockwise
     */
    //% block="rotate inner-ring clockwise by %n"
    export function innerRingClockwise(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.LimeConcrete)
        }
    }

    /**
     * Rotate Inner Ring Counterclockwise
     */
    //% block="rotate inner-ring counterclockwise by %n"
    export function innerRingCounterclockwise(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.PinkConcrete)
        }
    }

    /**
     * Pull Lever Down
     */
    //% block="pull lever down"
    export function pullLeverDown(): void {
        placeBlockSignal(Block.LightBlueConcrete)
    }

    /**
     * Pull Lever Down
     */
    //% block="pull lever down"
    export function pullLeverDownLime(): void {
        placeBlockSignal(Block.LimeConcrete)
    }

    /**
     * Move Enderman Forward
     */
    //% block="move enderman forward by %n"
    export function npcMoveForward(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.OrangeConcrete)
        }
    }
    /**
     * Move Enderman Butler Back
     */
    //% block="move enderman back by %n"
    export function npcMoveBack(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.MagentaConcrete)
        }
    }
    /**
     * Move Enderman Butler Left
     */
    //% block="move enderman left by %n"
    export function npcMoveLeft(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.LightBlueConcrete)
        }
    }
    /**
     * Move Enderman Butler Right
     */
    //% block="move enderman right by %n"
    export function npcMoveRight(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.YellowConcrete)
        }
    }

    /**
     * Move Enderman Butler to Light Blue
     */
    //% block="move enderman butler to `Block.LightBlueGlazedTerracotta`"
    export function npcMoveLightBlue(): void {
        placeBlockSignal(Block.LightBlueConcrete)
    }
    /**
     * Move Enderman Butler to Pink
     */
    //% block="move enderman butler to `Block.PinkGlazedTerracotta`"
    export function npcMovePink(): void {
        placeBlockSignal(Block.PinkConcrete)
    }
    /**
     * Move Enderman Butler to Lime
     */
    //% block="move enderman butler to `Block.LimeGlazedTerracotta`"
    export function npcMoveLime(): void {
        placeBlockSignal(Block.LimeConcrete)
    }
    /**
     * Move Enderman Butler to Yellow
     */
    //% block="move enderman butler to `Block.YellowGlazedTerracotta`"
    export function npcMoveYellow(): void {
        placeBlockSignal(Block.YellowConcrete)
    }

    /**
     * Slide Row: Green
     */
    //% block="slide `Block.LimeStainedGlass` %d by %n"
    export function slideGreenRow(d: TwoDirection, n: number): void {
        let selectedBlock = Block.WhiteConcrete

        switch (d) {
            case TwoDirection.Left:
                selectedBlock = Block.OrangeConcrete
                break;
            case TwoDirection.Right:
                selectedBlock = Block.MagentaConcrete
                break;
        }
        for (let i = 0; i < n; i++) {
            placeBlockSignal(selectedBlock);
        }
    }
    /**
     * Slide Row: Yellow
     */
    //% block="slide `Block.YellowStainedGlass` %d by %n"
    export function slideYellowRow(d: TwoDirection, n: number): void {
        let selectedBlock = Block.WhiteConcrete

        switch (d) {
            case TwoDirection.Left:
                selectedBlock = Block.LightBlueConcrete
                break;
            case TwoDirection.Right:
                selectedBlock = Block.YellowConcrete
                break;
        }
        for (let i = 0; i < n; i++) {
            placeBlockSignal(selectedBlock);
        }
    }
    /**
     * Slide Row: Red
     */
    //% block="slide `Block.RedStainedGlass` %d by %n"
    export function slideRedRow(d: TwoDirection, n: number): void {
        let selectedBlock = Block.WhiteConcrete

        switch (d) {
            case TwoDirection.Left:
                selectedBlock = Block.LimeConcrete
                break;
            case TwoDirection.Right:
                selectedBlock = Block.PinkConcrete
                break;
        }
        for (let i = 0; i < n; i++) {
            placeBlockSignal(selectedBlock);
        }
    }

    /**
     * Turn On Redstone Lamp
     */
    //% block="turn on `Block.RedstoneLamp`"
    export function toggleLight(): void {
        placeBlockSignal(Block.LimeConcrete)
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
    //% block="mill wheat `Custom.BreadBakeTwo`"
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
     * Move Armor to Light Blue
     */
    //% block="flip `Block.LightBlueCarpet` lever"
    export function teleportLightBlueLever(): void {
        placeBlockSignal(Block.LightBlueConcrete)
    }
    /**
     * Move Armor to Magenta
     */
    //% block="flip `Block.MagentaCarpet` lever"
    export function teleportMagentaLever(): void {
        placeBlockSignal(Block.MagentaConcrete)
    }
    /**
     * Move Armor to Yellow
     */
    //% block="flip `Block.YellowCarpet` lever"
    export function teleportYellowLever(): void {
        placeBlockSignal(Block.YellowConcrete)
    }
    /**
     * Move Armor to Orange
     */
    //% block="flip `Block.OrangeCarpet` lever"
    export function teleportOrangeLever(): void {
        placeBlockSignal(Block.OrangeConcrete)
    }
    /**
      * Feed The House Apple
      */
    //% block="feed house %n `Item.Apple`"
    export function feedHouseApple(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
      * Feed The House Salmon
      */
    //% block="feed house %n `Item.RawSalmon`"
    export function feedHouseSalmon(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }

    }
    /**
      * Feed The House Mushroom Stew
      */
    //% block="feed house %n `Item.MushroomStew`"
    export function feedHouseMushroomStew(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
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
     * Move King
     */
    //% block="move king %direction by %n"
    export function kingMove(direction: Custom, n: number): void {
        let block = Block.WhiteConcrete
        switch (direction) {
            case Custom.ArrowUpOrange:
                block = Block.OrangeConcrete
                break;
            case Custom.ArrowDownMagenta:
                block = Block.MagentaConcrete
                break;
            case Custom.ArrowLeftBlue:
                block = Block.LightBlueConcrete
                break;
            case Custom.ArrowRightYellow:
                block = Block.YellowConcrete
                break;
        }

        for (let i = 0; i < n; i++) {
            blocks.place(block, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Move Queen
     */
    //% block="move queen %direction by %n"
    export function queenMove(direction: Custom, n: number): void {
        let block = Block.WhiteConcrete
        switch (direction) {
            case Custom.ArrowUpOrange:
                block = Block.LimeConcrete
                break;
            case Custom.ArrowDownMagenta:
                block = Block.PinkConcrete
                break;
            case Custom.ArrowLeftBlue:
                block = Block.GrayConcrete
                break;
            case Custom.ArrowRightYellow:
                block = Block.LightGrayConcrete
                break;
        }

        for (let i = 0; i < n; i++) {
            blocks.place(block, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
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
        placeBlockSignal(Block.LimeConcrete)
    }

    /**
     * Open Trapdoor
     */
    //% block="open trapdoor"
    export function openTrapdoor(): void {
        placeBlockSignal(Block.LimeConcrete)
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
    //% block="sort %n `Custom.ZombieFace`"
    export function minecraftSortingZombie(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
      * Lab Minecart Sorting Skeleton
      */
    //% block="sort %n `Custom.SkeletonFace`"
    export function minecraftSortingSkeleton(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
      * Lab Minecart Sorting Creeper
      */
    //% block="sort %n `Custom.CreeperFace`"
    export function minecraftSortingCreeper(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    //% block="`Custom.PhantomMembrane`"
    export function phantomMembrane(): void { }

    // helper functions

    function placeBlockSignal(block: Block): void {
        blocks.place(block, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

}