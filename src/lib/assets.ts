/**
 * Central asset URL map for Julian Voss | Legacy Estates.
 * Maps friendly asset names to their generated R2 URLs.
 */

const ASSET_URLS: Record<string, string> = {
  hero_villa_dusk: "https://r2-pub.rork.com/projects/tydf2k1vhxh3obttzd93z/assets/bb5e6c2c-97a0-491e-9a1d-a7ff2d8e967b.png",
  property_contemporary_palace: "https://r2-pub.rork.com/projects/tydf2k1vhxh3obttzd93z/assets/a38b8a35-014b-4382-b166-ba52bbf151be.png",
  property_private_island: "https://r2-pub.rork.com/projects/tydf2k1vhxh3obttzd93z/assets/db873185-151f-4d6d-bd17-11af7c83da5c.png",
  property_chateau_vineyard: "https://r2-pub.rork.com/projects/tydf2k1vhxh3obttzd93z/assets/5a5d510f-da33-4479-9bb2-ad5b00ed0557.png",
  property_penthouse_skyline: "https://r2-pub.rork.com/projects/tydf2k1vhxh3obttzd93z/assets/bdb4e859-5fe7-495e-abda-b07acb565620.png",
  property_mountain_lodge: "https://r2-pub.rork.com/projects/tydf2k1vhxh3obttzd93z/assets/492a2166-541c-485f-8e11-d9fbddce2dc6.png",
  advisor_portrait_julian: "https://r2-pub.rork.com/projects/tydf2k1vhxh3obttzd93z/assets/553134e7-dc77-4e78-bda1-0f671dcc93a4.png",
  lifestyle_library_detail: "https://r2-pub.rork.com/projects/tydf2k1vhxh3obttzd93z/assets/3acc5ba8-cddf-4f20-93a7-afaa0dbc7ff0.png",
  lifestyle_yacht_marina: "https://r2-pub.rork.com/projects/tydf2k1vhxh3obttzd93z/assets/46c0019b-8302-4006-9838-51dcc9db72d8.png",
  collection_modern_art_loft: "https://r2-pub.rork.com/projects/tydf2k1vhxh3obttzd93z/assets/8f3f6558-127c-41a0-9dfe-b37e1337518e.png",
  collection_historic_estate_interior: "https://r2-pub.rork.com/projects/tydf2k1vhxh3obttzd93z/assets/ba327a36-8db7-411b-819a-837f5e8fa530.png",
};

/** Resolve a friendly asset name to its generated URL. Falls back to the hero image. */
export function assetUrl(name: string): string {
  return ASSET_URLS[name] ?? ASSET_URLS.hero_villa_dusk;
}

