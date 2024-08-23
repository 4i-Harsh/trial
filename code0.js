gdjs.Level_321Code = {};
gdjs.Level_321Code.localVariables = [];
gdjs.Level_321Code.GDFloorObjects1_1final = [];

gdjs.Level_321Code.GDMindyObjects1_1final = [];

gdjs.Level_321Code.GDMindyObjects1= [];
gdjs.Level_321Code.GDMindyObjects2= [];
gdjs.Level_321Code.GDMindyObjects3= [];
gdjs.Level_321Code.GDMindyObjects4= [];
gdjs.Level_321Code.GDBatObjects1= [];
gdjs.Level_321Code.GDBatObjects2= [];
gdjs.Level_321Code.GDBatObjects3= [];
gdjs.Level_321Code.GDBatObjects4= [];
gdjs.Level_321Code.GDTopBlockObjects1= [];
gdjs.Level_321Code.GDTopBlockObjects2= [];
gdjs.Level_321Code.GDTopBlockObjects3= [];
gdjs.Level_321Code.GDTopBlockObjects4= [];
gdjs.Level_321Code.GDBlockGrassObjects1= [];
gdjs.Level_321Code.GDBlockGrassObjects2= [];
gdjs.Level_321Code.GDBlockGrassObjects3= [];
gdjs.Level_321Code.GDBlockGrassObjects4= [];
gdjs.Level_321Code.GDBlockObjects1= [];
gdjs.Level_321Code.GDBlockObjects2= [];
gdjs.Level_321Code.GDBlockObjects3= [];
gdjs.Level_321Code.GDBlockObjects4= [];
gdjs.Level_321Code.GDBridgeObjects1= [];
gdjs.Level_321Code.GDBridgeObjects2= [];
gdjs.Level_321Code.GDBridgeObjects3= [];
gdjs.Level_321Code.GDBridgeObjects4= [];
gdjs.Level_321Code.GDFloorGrassObjects1= [];
gdjs.Level_321Code.GDFloorGrassObjects2= [];
gdjs.Level_321Code.GDFloorGrassObjects3= [];
gdjs.Level_321Code.GDFloorGrassObjects4= [];
gdjs.Level_321Code.GDFloorObjects1= [];
gdjs.Level_321Code.GDFloorObjects2= [];
gdjs.Level_321Code.GDFloorObjects3= [];
gdjs.Level_321Code.GDFloorObjects4= [];
gdjs.Level_321Code.GDTreeObjects1= [];
gdjs.Level_321Code.GDTreeObjects2= [];
gdjs.Level_321Code.GDTreeObjects3= [];
gdjs.Level_321Code.GDTreeObjects4= [];
gdjs.Level_321Code.GDRockObjects1= [];
gdjs.Level_321Code.GDRockObjects2= [];
gdjs.Level_321Code.GDRockObjects3= [];
gdjs.Level_321Code.GDRockObjects4= [];
gdjs.Level_321Code.GDWoodSignObjects1= [];
gdjs.Level_321Code.GDWoodSignObjects2= [];
gdjs.Level_321Code.GDWoodSignObjects3= [];
gdjs.Level_321Code.GDWoodSignObjects4= [];
gdjs.Level_321Code.GDSmallObstacleObjects1= [];
gdjs.Level_321Code.GDSmallObstacleObjects2= [];
gdjs.Level_321Code.GDSmallObstacleObjects3= [];
gdjs.Level_321Code.GDSmallObstacleObjects4= [];
gdjs.Level_321Code.GDTileRowObstacleObjects1= [];
gdjs.Level_321Code.GDTileRowObstacleObjects2= [];
gdjs.Level_321Code.GDTileRowObstacleObjects3= [];
gdjs.Level_321Code.GDTileRowObstacleObjects4= [];
gdjs.Level_321Code.GDTileColumnObstacleObjects1= [];
gdjs.Level_321Code.GDTileColumnObstacleObjects2= [];
gdjs.Level_321Code.GDTileColumnObstacleObjects3= [];
gdjs.Level_321Code.GDTileColumnObstacleObjects4= [];
gdjs.Level_321Code.GDTileObstacleObjects1= [];
gdjs.Level_321Code.GDTileObstacleObjects2= [];
gdjs.Level_321Code.GDTileObstacleObjects3= [];
gdjs.Level_321Code.GDTileObstacleObjects4= [];
gdjs.Level_321Code.GDNavMeshObjects1= [];
gdjs.Level_321Code.GDNavMeshObjects2= [];
gdjs.Level_321Code.GDNavMeshObjects3= [];
gdjs.Level_321Code.GDNavMeshObjects4= [];


gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{



}


{



}


};gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDMindyObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDMindyObjects3[i].activateBehavior("NavMeshPathfindingBehavior", true);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDMindyObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDMindyObjects3[i].getBehavior("NavMeshPathfindingBehavior").SetDestination(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDMindyObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDMindyObjects2[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDMindyObjects2[k] = gdjs.Level_321Code.GDMindyObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMindyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDMindyObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDMindyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDMindyObjects2[i].activateBehavior("NavMeshPathfindingBehavior", false);
}
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMindyObjects1Objects = Hashtable.newFrom({"Mindy": gdjs.Level_321Code.GDMindyObjects1});
gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects1);
{gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.func(runtimeScene, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMindyObjects1Objects, "NavMeshPathfindingBehavior", "TopDownMovement", "TopDownMovementAnimator", "NavMeshPathfindingAnimator", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{


gdjs.Level_321Code.eventsList1(runtimeScene);
}


{


gdjs.Level_321Code.eventsList2(runtimeScene);
}


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDSmallObstacleObjects2ObjectsGDgdjs_9546Level_9595321Code_9546GDTileRowObstacleObjects2ObjectsGDgdjs_9546Level_9595321Code_9546GDTileColumnObstacleObjects2ObjectsGDgdjs_9546Level_9595321Code_9546GDTileObstacleObjects2Objects = Hashtable.newFrom({"SmallObstacle": gdjs.Level_321Code.GDSmallObstacleObjects2, "TileRowObstacle": gdjs.Level_321Code.GDTileRowObstacleObjects2, "TileColumnObstacle": gdjs.Level_321Code.GDTileColumnObstacleObjects2, "TileObstacle": gdjs.Level_321Code.GDTileObstacleObjects2});
gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects2);
gdjs.copyArray(runtimeScene.getObjects("SmallObstacle"), gdjs.Level_321Code.GDSmallObstacleObjects2);
gdjs.copyArray(runtimeScene.getObjects("TileColumnObstacle"), gdjs.Level_321Code.GDTileColumnObstacleObjects2);
gdjs.copyArray(runtimeScene.getObjects("TileObstacle"), gdjs.Level_321Code.GDTileObstacleObjects2);
gdjs.copyArray(runtimeScene.getObjects("TileRowObstacle"), gdjs.Level_321Code.GDTileRowObstacleObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDMindyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDMindyObjects2[i].separateFromObjectsList(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDSmallObstacleObjects2ObjectsGDgdjs_9546Level_9595321Code_9546GDTileRowObstacleObjects2ObjectsGDgdjs_9546Level_9595321Code_9546GDTileColumnObstacleObjects2ObjectsGDgdjs_9546Level_9595321Code_9546GDTileObstacleObjects2Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDMindyObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMindyObjects1[i].getBehavior("SmoothCamera").MoveCameraCloser((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.func(runtimeScene, "", 0, "Level1", 0, true, true, false, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.func(runtimeScene, "", 0, "Level2", 0, true, true, false, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMindyObjects1Objects = Hashtable.newFrom({"Mindy": gdjs.Level_321Code.GDMindyObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBatObjects1Objects = Hashtable.newFrom({"Bat": gdjs.Level_321Code.GDBatObjects1});
gdjs.Level_321Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bat"), gdjs.Level_321Code.GDBatObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMindyObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBatObjects1Objects, 100, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDBatObjects1 */
/* Reuse gdjs.Level_321Code.GDMindyObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDBatObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBatObjects1[i].addForceTowardPosition((( gdjs.Level_321Code.GDMindyObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDMindyObjects1[0].getPointX("Head")), (( gdjs.Level_321Code.GDMindyObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDMindyObjects1[0].getPointY("Head")), 150, 0);
}
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMindyObjects2Objects = Hashtable.newFrom({"Mindy": gdjs.Level_321Code.GDMindyObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMindyObjects2Objects = Hashtable.newFrom({"Mindy": gdjs.Level_321Code.GDMindyObjects2});
gdjs.Level_321Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FloorGrass"), gdjs.Level_321Code.GDFloorGrassObjects2);
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CharacterMovement__IsMoving.func(runtimeScene, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMindyObjects2Objects, "NavMeshPathfindingBehavior", "TopDownMovement", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDFloorGrassObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDFloorGrassObjects2[i].isCollidingWithPoint((( gdjs.Level_321Code.GDMindyObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDMindyObjects2[0].getPointX("Foot")), (( gdjs.Level_321Code.GDMindyObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDMindyObjects2[0].getPointY("Foot"))) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDFloorGrassObjects2[k] = gdjs.Level_321Code.GDFloorGrassObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDFloorGrassObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16025372);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "grass_light_steps.mp3", 1, true, 5, 1);
}}

}


{

gdjs.Level_321Code.GDFloorObjects1.length = 0;

gdjs.Level_321Code.GDMindyObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Level_321Code.GDFloorObjects1_1final.length = 0;
gdjs.Level_321Code.GDMindyObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.Level_321Code.GDFloorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects2);
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDFloorObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDFloorObjects2[i].isCollidingWithPoint((( gdjs.Level_321Code.GDMindyObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDMindyObjects2[0].getPointX("Foot")), (( gdjs.Level_321Code.GDMindyObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDMindyObjects2[0].getPointY("Foot"))) ) {
        isConditionTrue_1 = true;
        gdjs.Level_321Code.GDFloorObjects2[k] = gdjs.Level_321Code.GDFloorObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDFloorObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_321Code.GDFloorObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_321Code.GDFloorObjects1_1final.indexOf(gdjs.Level_321Code.GDFloorObjects2[j]) === -1 )
            gdjs.Level_321Code.GDFloorObjects1_1final.push(gdjs.Level_321Code.GDFloorObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Level_321Code.GDMindyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_321Code.GDMindyObjects1_1final.indexOf(gdjs.Level_321Code.GDMindyObjects2[j]) === -1 )
            gdjs.Level_321Code.GDMindyObjects1_1final.push(gdjs.Level_321Code.GDMindyObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects2);
isConditionTrue_1 = !(gdjs.evtsExt__CharacterMovement__IsMoving.func(runtimeScene, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMindyObjects2Objects, "NavMeshPathfindingBehavior", "TopDownMovement", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_321Code.GDMindyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_321Code.GDMindyObjects1_1final.indexOf(gdjs.Level_321Code.GDMindyObjects2[j]) === -1 )
            gdjs.Level_321Code.GDMindyObjects1_1final.push(gdjs.Level_321Code.GDMindyObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDFloorObjects1_1final, gdjs.Level_321Code.GDFloorObjects1);
gdjs.copyArray(gdjs.Level_321Code.GDMindyObjects1_1final, gdjs.Level_321Code.GDMindyObjects1);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


};gdjs.Level_321Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_321Code.GDMindyObjects1.length !== 0 ? gdjs.Level_321Code.GDMindyObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Obstacle");
}
{ //Subevents
gdjs.Level_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_321Code.eventsList3(runtimeScene);
}


{


gdjs.Level_321Code.eventsList4(runtimeScene);
}


{


gdjs.Level_321Code.eventsList5(runtimeScene);
}


{


gdjs.Level_321Code.eventsList6(runtimeScene);
}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDMindyObjects1.length = 0;
gdjs.Level_321Code.GDMindyObjects2.length = 0;
gdjs.Level_321Code.GDMindyObjects3.length = 0;
gdjs.Level_321Code.GDMindyObjects4.length = 0;
gdjs.Level_321Code.GDBatObjects1.length = 0;
gdjs.Level_321Code.GDBatObjects2.length = 0;
gdjs.Level_321Code.GDBatObjects3.length = 0;
gdjs.Level_321Code.GDBatObjects4.length = 0;
gdjs.Level_321Code.GDTopBlockObjects1.length = 0;
gdjs.Level_321Code.GDTopBlockObjects2.length = 0;
gdjs.Level_321Code.GDTopBlockObjects3.length = 0;
gdjs.Level_321Code.GDTopBlockObjects4.length = 0;
gdjs.Level_321Code.GDBlockGrassObjects1.length = 0;
gdjs.Level_321Code.GDBlockGrassObjects2.length = 0;
gdjs.Level_321Code.GDBlockGrassObjects3.length = 0;
gdjs.Level_321Code.GDBlockGrassObjects4.length = 0;
gdjs.Level_321Code.GDBlockObjects1.length = 0;
gdjs.Level_321Code.GDBlockObjects2.length = 0;
gdjs.Level_321Code.GDBlockObjects3.length = 0;
gdjs.Level_321Code.GDBlockObjects4.length = 0;
gdjs.Level_321Code.GDBridgeObjects1.length = 0;
gdjs.Level_321Code.GDBridgeObjects2.length = 0;
gdjs.Level_321Code.GDBridgeObjects3.length = 0;
gdjs.Level_321Code.GDBridgeObjects4.length = 0;
gdjs.Level_321Code.GDFloorGrassObjects1.length = 0;
gdjs.Level_321Code.GDFloorGrassObjects2.length = 0;
gdjs.Level_321Code.GDFloorGrassObjects3.length = 0;
gdjs.Level_321Code.GDFloorGrassObjects4.length = 0;
gdjs.Level_321Code.GDFloorObjects1.length = 0;
gdjs.Level_321Code.GDFloorObjects2.length = 0;
gdjs.Level_321Code.GDFloorObjects3.length = 0;
gdjs.Level_321Code.GDFloorObjects4.length = 0;
gdjs.Level_321Code.GDTreeObjects1.length = 0;
gdjs.Level_321Code.GDTreeObjects2.length = 0;
gdjs.Level_321Code.GDTreeObjects3.length = 0;
gdjs.Level_321Code.GDTreeObjects4.length = 0;
gdjs.Level_321Code.GDRockObjects1.length = 0;
gdjs.Level_321Code.GDRockObjects2.length = 0;
gdjs.Level_321Code.GDRockObjects3.length = 0;
gdjs.Level_321Code.GDRockObjects4.length = 0;
gdjs.Level_321Code.GDWoodSignObjects1.length = 0;
gdjs.Level_321Code.GDWoodSignObjects2.length = 0;
gdjs.Level_321Code.GDWoodSignObjects3.length = 0;
gdjs.Level_321Code.GDWoodSignObjects4.length = 0;
gdjs.Level_321Code.GDSmallObstacleObjects1.length = 0;
gdjs.Level_321Code.GDSmallObstacleObjects2.length = 0;
gdjs.Level_321Code.GDSmallObstacleObjects3.length = 0;
gdjs.Level_321Code.GDSmallObstacleObjects4.length = 0;
gdjs.Level_321Code.GDTileRowObstacleObjects1.length = 0;
gdjs.Level_321Code.GDTileRowObstacleObjects2.length = 0;
gdjs.Level_321Code.GDTileRowObstacleObjects3.length = 0;
gdjs.Level_321Code.GDTileRowObstacleObjects4.length = 0;
gdjs.Level_321Code.GDTileColumnObstacleObjects1.length = 0;
gdjs.Level_321Code.GDTileColumnObstacleObjects2.length = 0;
gdjs.Level_321Code.GDTileColumnObstacleObjects3.length = 0;
gdjs.Level_321Code.GDTileColumnObstacleObjects4.length = 0;
gdjs.Level_321Code.GDTileObstacleObjects1.length = 0;
gdjs.Level_321Code.GDTileObstacleObjects2.length = 0;
gdjs.Level_321Code.GDTileObstacleObjects3.length = 0;
gdjs.Level_321Code.GDTileObstacleObjects4.length = 0;
gdjs.Level_321Code.GDNavMeshObjects1.length = 0;
gdjs.Level_321Code.GDNavMeshObjects2.length = 0;
gdjs.Level_321Code.GDNavMeshObjects3.length = 0;
gdjs.Level_321Code.GDNavMeshObjects4.length = 0;

gdjs.Level_321Code.eventsList7(runtimeScene);

return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
