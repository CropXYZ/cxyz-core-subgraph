import { BigInt } from "@graphprotocol/graph-ts";

import {
  Paused,
  Unpaused,
  AddedTimeBreakdown,
  UpdatedTimeBreakdownAddress,
  UpdatedTimeBreakdown,
  ActivatedTimeBreakdown,
  DeactivatedTimeBreakdown
} from "../generated/TimeBreakdown/TimeBreakdown";
import { AddressMapping, Crop, GameState, GrowthTimeTable } from "../generated/schema";

export function handlePause(event: Paused): void {
  let gameState = GameState.load("TimeBreakdown");

  if (gameState == null) {
    gameState = new GameState("TimeBreakdown");
  }
  gameState.address = event.address;
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpause(event: Unpaused): void {
  let gameState = GameState.load("TimeBreakdown");

  if (gameState == null) {
    gameState = new GameState("TimeBreakdown");
  }
  gameState.address = event.address;
  gameState.isPaused = false;
  gameState.save();
}


function getNameHash(stringToCheck: string): string {

  let addressToNameHashMap = new Map<string, string>();
  
  // zGOLD
  addressToNameHashMap.set("0x387d73bd8682dceb3327b940213d5de50ee2bba2", "-=-=- 0xbf7dfd9fe7717994ef8f25bfa21157b1e548e37205effc1f4eaa919e4f394774");



  // zGALAXYBLOOM
  addressToNameHashMap.set("0x9c82ca3332898bea9c9fa5f9642ba4a4628e1321", "-=-=- 0x07acfe1750b3e75dd44709cc7a40cb780dc33f59345fe77cb053f61fb7b41bee");

  // zMOONFRUIT
  addressToNameHashMap.set("0x13f349927a2acb6319f62796b3bd4e469a3c3d9c", "-=-=- 0x10e4ce6f333387a3a22984a1d77762d9ea34298572d5edb0b19b4ac6f05e699b");

  // zDWARFBERRY
  addressToNameHashMap.set("0x35bf9e216911355a46f0ce5b5aa0239cfbd9afbd", "-=-=- 0x12ecd4ec65d43b3cfb30f0dfd26592f4c8c75f5716599828337c5025b1a720de");

  // zGLOWBERRY
  addressToNameHashMap.set("0xb4961be9792dabdae991e2c8daa30797ebf22e30", "-=-=- 0x13e682d4bd8283c09feefcb53b1a8d29790724fd35075130c24a2dc15abea743");

  // zVINEBLOOM
  addressToNameHashMap.set("0x38e476f067c1d303447b4b288e13247e12080a00", "-=-=- 0x280705ad09afe832b87d125c11edf8e77feeb35e8f47eb1ddf18e441d5f4d4c1");

  // zPASTEROID
  addressToNameHashMap.set("0x08fe9fc5dbdf7e1e2e18a6ce1424df3211f2532b", "-=-=- 0x2c14f616c26b269f40263d50c9ff5283b0168638024a3396637432d4b64bb9d4");

  // zNOVABLOOM
  addressToNameHashMap.set("0xd11ec3649734db4f6fff9aeae326c3522f8f20b8", "-=-=- 0x2e18285543c20b23ca1a639d32400d1c693387e0a2de7e7354c36673d865274d");

  // zSKYBERRY
  addressToNameHashMap.set("0xf259c01b34d715ef7406c4a615c4bf5e03657ab6", "-=-=- 0x42cfa7f9b23260be6c076d9b486d30d8bb906de5bf0c1aacd91f056326a71233");

  // zMARSPOP
  addressToNameHashMap.set("0xcb2d616c214b390b2beab7dcbf31fcf0c2ed6292", "-=-=- 0x456b2b637fbb92d66644d53eedfd8a0df5cf7aca234f32a7ca05fb8dd32dcc83");

  // zMARSQUASH
  addressToNameHashMap.set("0xba668accbb210f1906417c591a103d9ec54b057e", "-=-=- 0x49bee354f560a2b005f8af479d3aeb9b9d3e2087c2c331531bded8b886051240");

  // zPLANETOID
  addressToNameHashMap.set("0x8d9e0945017316104b7757caf6e561155649de9d", "-=-=- 0x4d67f0fc1aa9a3ac80b6ab816fd536696854dec090cad83e32ed69e588bf546e");

  // zSOLARBLOOM
  addressToNameHashMap.set("0xcb58cfcb1dc3abc1132459389db4e20c2abdb9f2", "-=-=- 0x745aa6440b68f0e17e3ad2894fbf57be025d9b22f20a94ea593038d12484e17e");

  // zCLUSTERBERRY
  addressToNameHashMap.set("0xa3be8151ba8b2bc1b41d5ecbeafa17bc786a5d46", "-=-=- 0x76cb0237ad5392c6f6257054293d4ff75e5c7faa0ea6b3c71b3d867ff9664dcc");

  // zSTARBERRY
  addressToNameHashMap.set("0xedf6519922a9ed9b6e2b1432bf3ca1b9f0966514", "-=-=- 0x817208f5f3056639fd81725b5f3fdf476218da05d4cfecd54d34de15525ccc79");

  // zVOIDBERRY
  addressToNameHashMap.set("0x5f2ba0617f9211e7a4d353c33fa9de04c3684554", "-=-=- 0x865fd47079cc30871664e09fd77f408b678205039f31c0138e2dc4cbe0ec0fd2");

  // zCLOUDBLOOM
  addressToNameHashMap.set("0xa8ff5bc8db35121cdf96da983bd032fcf157f6de", "-=-=- 0x8d883ad82f1642d53d10d14b93c71bf1ba3a62d3615cf8b0754397034dfd7b1a");

  // zVOIDPOP
  addressToNameHashMap.set("0xf4a785a80d91cadc149f778ee17d35cd008203f7", "-=-=- 0x8eae690622b7ee20f1bcf678ea85a0e2ef764b725431cfd5e99b8d3f9637b124");

  // zSUNBURST
  addressToNameHashMap.set("0x6e65ba4ed2f6d20efbbd48182e0bb3944bf482c8", "-=-=- 0xa4478a9bd2b8e1ec094e85e62fdb971c000d920f6fe41787bfa319ea3d19a1cd");

  // zSUNGRASS
  addressToNameHashMap.set("0x700435cec9789011b1b8898a9eaa65222c3094cf", "-=-=- 0xbf8a6fb60f49917b30bbcb16c3377a90fcd04665e2d00b3aa22c0edc7015477b");

  // zEARTHMELON
  addressToNameHashMap.set("0x56d66d7637f5b6235ad212043d35cc5e035dac68", "-=-=- 0xcfe838e2808727480fafa1e7484380122b54d3566702fc9192a534d994bfaea4");

  // zMOONGRASS
  addressToNameHashMap.set("0x12647ceec053d386a7343b7739a1e1fddadef796", "-=-=- 0xd598ceab7da3a4ecfdca52931ed10dae7eee222fcf7e9f068df204a5b2f58245");

  // zCAPRICORN
  addressToNameHashMap.set("0xb083e82938d796247ad5f561ea9f7df4c6a5f8cf", "-=-=- 0xdab8e90fc13520181f3f61334b93063a30e82d857379c2b12e19fe575b95959a");

  // zCOSMOAT
  addressToNameHashMap.set("0x0a31dae1260a304b915df169435dc0989318eca3", "-=-=- 0xe636c1e78d9fecd1888d4af18cab23e7903a10258f8e3b46236f46e720433135");

  // zCRATERPOP
  addressToNameHashMap.set("0x5194ef3f413485c722500243a9f94f0a66c2a0d6", "-=-=- 0xea3eeef48f54a9a901f207ba86a12a263521d0cc8186f08cb7441a12b15883e7");

  return addressToNameHashMap.get(stringToCheck)|| "";
}

export function handleAddTimeBreakdown(event: AddedTimeBreakdown): void {
  // Create time table
  const timeTable = new GrowthTimeTable(
    event.params.timeBreakdownId.toString()
  );
  timeTable.isActive = event.params.isActive;

  timeTable.crop = event.params.stakedElementNameHash.toHexString();
  timeTable.deltaNothingToStart = BigInt.fromI32(event.params.nothingToStart);
  timeTable.deltaStartToEarly = BigInt.fromI32(event.params.startToEarly);
  timeTable.deltaEarlyToMature = BigInt.fromI32(event.params.earlyToMature);
  timeTable.deltaMatureToExpire = BigInt.fromI32(event.params.matureToExpire);

  timeTable.save();

  // Create crop
  let crop = Crop.load(event.params.stakedElementNameHash.toHexString());

  if (crop == null) {
    crop = new Crop(event.params.stakedElementNameHash.toHexString());
    crop.addressMapping = event.params.addressStoreNameHash.toHexString();
    crop.plotType = event.params.tokenPlotTypeId.toString();

    crop.elementName = event.params.stakedElementName;
    crop.elementNameHash = event.params.stakedElementNameHash;
    
    crop.maxSupply = event.block.number.toString();

    let addressMapping = AddressMapping.load(
      event.params.addressStoreNameHash.toHexString()
    );
  
    if (addressMapping != null) {
      // crop.maxSupply = getNameHash(addressMapping.tokenAddress.toHexString());
    }
  }
  crop.growthTimeTable = timeTable.id;

  crop.save();
}

export function handleUpdateTimeBreakdown(event: UpdatedTimeBreakdown): void {
  let timeTable = GrowthTimeTable.load(event.params.timeBreakdownId.toString());

  if (timeTable == null) {
    timeTable = new GrowthTimeTable(event.params.timeBreakdownId.toString());
  }

  timeTable.crop = event.params.stakedElementNameHash.toHexString();
  timeTable.deltaNothingToStart = BigInt.fromI32(
    event.params.newNothingToStart
  );
  timeTable.deltaStartToEarly = BigInt.fromI32(event.params.newStartToEarly);
  timeTable.deltaEarlyToMature = BigInt.fromI32(event.params.newEarlyToMature);
  timeTable.deltaMatureToExpire = BigInt.fromI32(
    event.params.newMatureToExpire
  );

  timeTable.save();

  // Create crop
  let crop = Crop.load(event.params.stakedElementNameHash.toHexString());

  if (crop == null) {
    crop = new Crop(event.params.stakedElementNameHash.toHexString());
  }
  crop.growthTimeTable = timeTable.id;

  crop.save();
}

export function handleUpdateTimeBreakdownAddress(
  event: UpdatedTimeBreakdownAddress
): void {
  // Load crop
  let crop = Crop.load(event.params.stakedElementNameHash.toHexString());

  if (crop == null) {
    crop = new Crop(event.params.stakedElementNameHash.toHexString());
  }
  crop.addressMapping = event.params.newAddressStoreNameHash.toHexString();

  crop.save();
}

export function handleActivateTimeBreakdown(
  event: ActivatedTimeBreakdown
): void {
  let timeTable = GrowthTimeTable.load(event.params.timeBreakdownId.toString());

  if (timeTable == null) {
    timeTable = new GrowthTimeTable(event.params.timeBreakdownId.toString());
  }

  timeTable.isActive = true;
  timeTable.save();
}

export function handleDeactivateTimeBreakdown(
  event: DeactivatedTimeBreakdown
): void {
  let timeTable = GrowthTimeTable.load(event.params.timeBreakdownId.toString());

  if (timeTable == null) {
    timeTable = new GrowthTimeTable(event.params.timeBreakdownId.toString());
  }

  timeTable.isActive = false;
  timeTable.save();
}
