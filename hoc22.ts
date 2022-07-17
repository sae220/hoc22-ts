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




// global variables
const placeBlockMechanicsCommunicationPos = world(0, 64, 0);
const weightDropPosition = world(-18, 77, 162);
const communicationsTimeout = 100;
const teleportTimeout = 750;


//%  block="Hour of Code 2022" weight=200 color=#6100ff icon="\u26EB"
namespace hoc22 {

    /**
     * Summon colored blocks (POC1-a)
     */
    //% block="drop %n `Block.MagentaConcrete`"
    export function summonColoredBlockMagenta(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon colored blocks (POC1-a)
     */
    //% block="drop %n `Block.LightBlueConcrete`"
    export function summonColoredBlockLightBlue(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon colored blocks (POC1-a)
     */
    //% block="drop %n `Block.YellowConcrete`"
    export function summonColoredBlockYellow(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon colored blocks (POC1-a)
     */
    //% block="drop %n `Block.LimeConcrete`"
    export function summonColoredBlockLime(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LimeConcrete, placeBlockMechanicsCommunicationPos);
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Summon weight (POC1-b)
     */
    //% block="summon %n `Custom.WeightedChicken`"
    export function summonWeightChicken(n: number): void {
        for (let i = 0; i < n; i++){
            mobs.spawn(Weight.CHICKEN, weightDropPosition);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon weight (POC1-b)
     */
    //% block="summon %n `Custom.WeightedCow`"
    export function summonWeightCow(n: number): void {
        for (let i = 0; i < n; i++) {
            mobs.spawn(Weight.COW, weightDropPosition);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon weight (POC1-b)
     */
    //% block="summon %n `Custom.WeightedSheep`"
    export function summonWeightSheep(n: number): void {
        for (let i = 0; i < n; i++){
            mobs.spawn(Weight.SHEEP, weightDropPosition);
            loops.pause(communicationsTimeout)
        }
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
    //% block="move `Custom.ChessKing` %direction by %n"
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
    //% block="move `Custom.ChessQueen` %direction by %n"
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
        placeBlockSignal1(Block.LimeConcrete)
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
        for (let i = 0; i < n; i++){
            blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
      * Lab Minecart Sorting Skeleton
      */
    //% block="sort %n `Custom.SkeletonFace`"
    export function minecraftSortingSkeleton(n: number): void {
        for (let i = 0; i < n; i++){
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
      * Lab Minecart Sorting Creeper
      */
    //% block="sort %n `Custom.CreeperFace`"
    export function minecraftSortingCreeper(n: number): void {
        for (let i = 0; i < n; i++){
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    //% block="`Custom.PhantomMembrane`"
    export function phantomMembrane(): void{}

    // helper functions
    function resetSignal(): void {
        blocks.place(Block.WhiteConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    function placeBlockSignal(): void {
        blocks.place(Block.LimeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    function placeBlockSignal1(block: Block): void {
        blocks.place(block, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

}