import { BigInt } from "@graphprotocol/graph-ts";

import {
  ChangedPlotType,
  GameBurnedToken,
  GameMintedToken,
} from "../generated/Galaxybloom/GameToken";
import { Crop } from "../generated/schema";

export function handleChangePlotType(event: ChangedPlotType): void {
  // Get the crop
  let crop = Crop.load(event.params.tokenNameHash.toHexString());

  if (crop != null) {
    crop.plotType = event.params.newPlotType.toString();
    crop.save();
  }
}

function getNameHash(stringToCheck: string): string {

  let addressToNameHashMap = new Map<string, string>();

  // "zGOLD",
  addressToNameHashMap.set("0x387d73bd8682dceb3327b940213d5de50ee2bba2", "0xbf7dfd9fe7717994ef8f25bfa21157b1e548e37205effc1f4eaa919e4f394774");

  // "zVOIDPOP",
  addressToNameHashMap.set("0xf4a785a80d91cadc149f778ee17d35cd008203f7", "0x8eae690622b7ee20f1bcf678ea85a0e2ef764b725431cfd5e99b8d3f9637b124");
  // "zPASTEROID",
  addressToNameHashMap.set("0x08fe9fc5dbdf7e1e2e18a6ce1424df3211f2532b", "0x2c14f616c26b269f40263d50c9ff5283b0168638024a3396637432d4b64bb9d4");
  // "zPLANETOID",
  addressToNameHashMap.set("0x8d9e0945017316104b7757caf6e561155649de9d", "0x4d67f0fc1aa9a3ac80b6ab816fd536696854dec090cad83e32ed69e588bf546e");
  // "zMARSPOP",
  addressToNameHashMap.set("0xcb2d616c214b390b2beab7dcbf31fcf0c2ed6292", "0x456b2b637fbb92d66644d53eedfd8a0df5cf7aca234f32a7ca05fb8dd32dcc83");
  // "zCRATERPOP",
  addressToNameHashMap.set("0x5194ef3f413485c722500243a9f94f0a66c2a0d6", "0xea3eeef48f54a9a901f207ba86a12a263521d0cc8186f08cb7441a12b15883e7");

  // "zVOIDBERRY",
  addressToNameHashMap.set("0x5f2ba0617f9211e7a4d353c33fa9de04c3684554", "0x865fd47079cc30871664e09fd77f408b678205039f31c0138e2dc4cbe0ec0fd2");
  // "zSKYBERRY",
  addressToNameHashMap.set("0xf259c01b34d715ef7406c4a615c4bf5e03657ab6", "0x42cfa7f9b23260be6c076d9b486d30d8bb906de5bf0c1aacd91f056326a71233");
  // "zDWARFBERRY",
  addressToNameHashMap.set("0x35bf9e216911355a46f0ce5b5aa0239cfbd9afbd", "0x12ecd4ec65d43b3cfb30f0dfd26592f4c8c75f5716599828337c5025b1a720de");
  // "zGLOWBERRY",
  addressToNameHashMap.set("0xb4961be9792dabdae991e2c8daa30797ebf22e30", "0x13e682d4bd8283c09feefcb53b1a8d29790724fd35075130c24a2dc15abea743");
  // "zSTARBERRY",
  addressToNameHashMap.set("0xedf6519922a9ed9b6e2b1432bf3ca1b9f0966514", "0x817208f5f3056639fd81725b5f3fdf476218da05d4cfecd54d34de15525ccc79");

  // "zCLOUDBLOOM",
  addressToNameHashMap.set("0xa8ff5bc8db35121cdf96da983bd032fcf157f6de", "0x8d883ad82f1642d53d10d14b93c71bf1ba3a62d3615cf8b0754397034dfd7b1a");
  // "zVINEBLOOM",
  addressToNameHashMap.set("0x38e476f067c1d303447b4b288e13247e12080a00", "0x280705ad09afe832b87d125c11edf8e77feeb35e8f47eb1ddf18e441d5f4d4c1");
  // "zNOVABLOOM",
  addressToNameHashMap.set("0xd11ec3649734db4f6fff9aeae326c3522f8f20b8", "0x2e18285543c20b23ca1a639d32400d1c693387e0a2de7e7354c36673d865274d");
  // "zGALAXYBLOOM",
  addressToNameHashMap.set("0x9c82ca3332898bea9c9fa5f9642ba4a4628e1321", "0x07acfe1750b3e75dd44709cc7a40cb780dc33f59345fe77cb053f61fb7b41bee");
  // "zSOLARBLOOM",
  addressToNameHashMap.set("0xcb58cfcb1dc3abc1132459389db4e20c2abdb9f2", "0x745aa6440b68f0e17e3ad2894fbf57be025d9b22f20a94ea593038d12484e17e");

  // "zMOONFRUIT",
  addressToNameHashMap.set("0x13f349927a2acb6319f62796b3bd4e469a3c3d9c", "0x10e4ce6f333387a3a22984a1d77762d9ea34298572d5edb0b19b4ac6f05e699b");
  // "zCLUSTERBERRY",
  addressToNameHashMap.set("0xa3be8151ba8b2bc1b41d5ecbeafa17bc786a5d46", "0x76cb0237ad5392c6f6257054293d4ff75e5c7faa0ea6b3c71b3d867ff9664dcc");
  // "zMARSQUASH",
  addressToNameHashMap.set("0xba668accbb210f1906417c591a103d9ec54b057e", "0x49bee354f560a2b005f8af479d3aeb9b9d3e2087c2c331531bded8b886051240");
  // "zSUNBURST",
  addressToNameHashMap.set("0x6e65ba4ed2f6d20efbbd48182e0bb3944bf482c8", "0xa4478a9bd2b8e1ec094e85e62fdb971c000d920f6fe41787bfa319ea3d19a1cd");
  // "zEARTHMELON",
  addressToNameHashMap.set("0x56d66d7637f5b6235ad212043d35cc5e035dac68", "0xcfe838e2808727480fafa1e7484380122b54d3566702fc9192a534d994bfaea4");

  // "zCAPRICORN",
  addressToNameHashMap.set("0xb083e82938d796247ad5f561ea9f7df4c6a5f8cf", "0xdab8e90fc13520181f3f61334b93063a30e82d857379c2b12e19fe575b95959a");
  // "zCOSMOAT",
  addressToNameHashMap.set("0x0a31dae1260a304b915df169435dc0989318eca3", "0xe636c1e78d9fecd1888d4af18cab23e7903a10258f8e3b46236f46e720433135");
  // "zSUNGRASS",
  addressToNameHashMap.set("0x700435cec9789011b1b8898a9eaa65222c3094cf", "0xbf8a6fb60f49917b30bbcb16c3377a90fcd04665e2d00b3aa22c0edc7015477b");
  // "zMOONGRASS",
  addressToNameHashMap.set("0x12647ceec053d386a7343b7739a1e1fddadef796", "0xd598ceab7da3a4ecfdca52931ed10dae7eee222fcf7e9f068df204a5b2f58245");

  return addressToNameHashMap.get(stringToCheck)|| "";
}

export function handleTokenSupplyDecrease(event: GameBurnedToken): void {
  let crop = Crop.load(getNameHash(event.address.toHexString().toLowerCase()));
  // let crop = Crop.load(event.params.tokenNameHash.toHexString());
  
  if (crop != null) {
    crop.maxSupply = crop.maxSupply.minus(event.params.amount);
    crop.save();
  }
}

export function handleTokenSupplyIncrease(event: GameMintedToken): void {
  let crop = Crop.load(getNameHash(event.address.toHexString().toLowerCase()));
  // let crop = Crop.load(event.params.tokenNameHash.toHexString());
  
  if (crop != null) {
    crop.maxSupply = crop.maxSupply.plus(event.params.amount);
    crop.save();
  }
}
  
