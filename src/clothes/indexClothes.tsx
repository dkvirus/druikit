import React from 'react';
import {
  ChildrenAccessories,
  ChildrenBodies,
  ChildrenBodywear,
  ChildrenDresses,
  ChildrenOuterwear,
  ChildrenProductSets,
  ChildrenShirts,
  ChildrenTops,
  CommonBags,
  CommonBlousers,
  CommonBodiesOverall,
  CommonJerseyTops,
  CommonKnitTops,
  CommonLayer,
  CommonNightwear,
  CommonOthers,
  CommonOutdoor,
  CommonShoes,
  CommonShorts,
  CommonSkirts,
  CommonSocksTights,
  CommonTops,
  CommonTotal,
  CommonTrousers,
  CommonWaistcoats,
  MarimekkoAnkleTrousers,
  MarimekkoBags,
  MarimekkoCoats,
  MarimekkoDresses,
  MarimekkoGloves,
  MarimekkoHeadwears,
  MarimekkoJackets,
  MarimekkoMarket,
  MarimekkoOtherAccessories,
  MarimekkoOtherBags,
  MarimekkoOthers,
  MarimekkoScarves,
  MarimekkoShoes,
  MarimekkoShorts,
  MarimekkoSkirts,
  MarimekkoSocks,
  MarimekkoSwimwears,
  MarimekkoTops,
  MarimekkoTrousers,
  MenAccessories,
  MenBodywear,
  MenBottoms,
  MenFootwear,
  MenJeans,
  MenOuterwear,
  MenShirts,
  MenSuitBlazers,
  MenTops,
  MenTshirts,
  WomenAccessories,
  WomenBodywear,
  WomenBottoms,
  WomenDresses,
  WomenFootwear,
  WomenJeans,
  WomenOuterwear,
  WomenSuitBlazers,
  WomenTops,
  WomenTshirts,
} from './index';

const FootWears = ['Foot Wear', 'Footwear'];
const Dresses = ['Dresses/Skirts', 'Dresses'];
const Jeans = ['Denim', 'Jeans'];
const Suits = ['Suits', 'Suits & Blazers', 'Blazers'];
const Knits = ['Knit Tops', 'Knitwear', 'Jersey tops'];
const Nightwear = ['Nightwear', 'Underwear'];
const CategoryTotal = ['All categories', 'Selected categories'];
const Bags = [
  'Bags',
  'Bags & wallets',
  'Leather bags',
  'Leather tote bags',
  'Leather backpacks',
  'Leather purses',
  'Other leather bags',
  'Leather cross body bags',
  'Canvas bags',
  'Canvas cross body bags',
  'Canvas tote bags',
  'Canvas backpacks',
  'Canvas purses',
  'Shopper bags',
  'Other canvas bags',
];
const MCoats = [
  'Coats',
  'Wool coats',
  'Puffer coats',
  'Trenchcoats',
  'Other coats',
];
const MDresses = [
  'Dresses',
  'Knit dresses, short',
  'Knit dresses, midi',
  'Knit dresses, maxi',
  'Other dresses, short',
  'Other dresses, midi',
  'Other dresses, maxi',
];
const MGloves = ['Gloves'];
const MHeadwears = ['Headwear', 'Hat', 'Cap', 'Beanies', 'Bucket'];
const MJackets = ['Jackets & Blazers'];
const MMarket = ['Market'];
const MOthers = ['Others'];
const MShorts = ['Trousers & Shorts', 'Shorts'];
const MTrousers = ['Trouser'];
const MAnkleTrousers = ['Ankle trouser'];
const MSwimwears = ['Swimwear', 'Swimsuit', 'Bikini'];
const MSocks = ['Socks', 'Wool socks', 'Cotton socks', 'Sneaker socks'];
const MScarves = [
  'Scarves',
  'Wool scarves',
  'Cotton scarves',
  'Silk scarves',
  'Viscose scarves',
];
const MOtherBags = [
  'Other bags',
  'Other backpacks',
  'Other bag',
  'Other cross body bags',
  'Other purse',
  'Other shopper bags',
  'Other tote bags',
];
const MOtherAccessories = [
  'Other accessories',
  'Keyring',
  'Hair accessories',
  'Umbrella',
  'Sunglasses',
  'Jewelry',
];
const MShoes = [
  'Shoes',
  'Cotton sneaker',
  'Leather sneaker',
  'Boots',
  'Sandal',
  'Heels',
  'Other shoes',
];
const MSkirts = [
  'Skirts',
  'Knit skirts, short',
  'Knit skirts, midi',
  'Knit skirts, maxi',
  'Other skirts, short',
  'Other skirts, midi',
  'Other skirts, maxi',
];
const MTops = [
  'Tops',
  'Blouses & Tunics sl',
  'Blouses & Tunics ls',
  'Blouses & Tunics ss',
  'T-shirts',
  'Sweatshirts',
  'Hoodies',
  'Straptop/singlet',
  'Cardigan',
  'Pullover',
];

const ClothesIcon = ({
  clothes = '',
  targetGroup = '',
  size = 12,
  ...props
}: {
  clothes?: string;
  targetGroup?: string;
  size?: number;
}) => {
  if (['Men', 'All Options'].includes(targetGroup) && clothes === 'Accessories')
    return <MenAccessories size={size} {...props} />;
  if (['Men', 'All Options'].includes(targetGroup) && clothes === 'Body Wear')
    return <MenBodywear size={size} {...props} />;
  if (['Men', 'All Options'].includes(targetGroup) && clothes === 'Bottoms')
    return <MenBottoms size={size} {...props} />;
  if (['Men', 'All Options'].includes(targetGroup) && clothes === 'T-Shirts')
    return <MenTshirts size={size} {...props} />;
  if (['Men', 'All Options'].includes(targetGroup) && clothes === 'Tops')
    return <MenTops size={size} {...props} />;
  if (['Men', 'All Options'].includes(targetGroup) && clothes === 'Outerwear')
    return <MenOuterwear size={size} {...props} />;
  if (
    ['Men', 'All Options'].includes(targetGroup) &&
    FootWears.includes(clothes)
  )
    return <MenFootwear size={size} {...props} />;
  if (['Men', 'All Options'].includes(targetGroup) && Jeans.includes(clothes))
    return <MenJeans size={size} {...props} />;
  if (['Men', 'All Options'].includes(targetGroup) && Suits.includes(clothes))
    return <MenSuitBlazers size={size} {...props} />;

  if (targetGroup === 'Women' && clothes === 'Accessories')
    return <WomenAccessories size={size} {...props} />;
  if (targetGroup === 'Women' && clothes === 'Body Wear')
    return <WomenBodywear size={size} {...props} />;
  if (targetGroup === 'Women' && clothes === 'Bottoms')
    return <WomenBottoms size={size} {...props} />;
  if (targetGroup === 'Women' && clothes === 'T-Shirts')
    return <WomenTshirts size={size} {...props} />;
  if (targetGroup === 'Women' && clothes === 'Tops')
    return <WomenTops size={size} {...props} />;
  if (targetGroup === 'Women' && clothes === 'Outerwear')
    return <WomenOuterwear size={size} {...props} />;
  if (targetGroup === 'Women' && FootWears.includes(clothes))
    return <WomenFootwear size={size} {...props} />;
  if (targetGroup === 'Women' && Jeans.includes(clothes))
    return <WomenJeans size={size} {...props} />;
  if (targetGroup === 'Women' && Suits.includes(clothes))
    return <WomenSuitBlazers size={size} {...props} />;

  if (targetGroup === 'Children' && clothes === 'Accessories')
    return <ChildrenAccessories size={size} {...props} />;
  if (targetGroup === 'Children' && clothes === 'Body Wear')
    return <ChildrenBodywear size={size} {...props} />;
  if (targetGroup === 'Children' && clothes === 'Product Sets')
    return <ChildrenProductSets size={size} {...props} />;
  if (targetGroup === 'Children' && clothes === 'Bodies')
    return <ChildrenBodies size={size} {...props} />;
  if (targetGroup === 'Children' && clothes === 'T-Shirts')
    return <ChildrenShirts size={size} {...props} />;
  if (targetGroup === 'Children' && clothes === 'Tops')
    return <ChildrenTops size={size} {...props} />;
  if (targetGroup === 'Children' && clothes === 'Outerwear')
    return <ChildrenOuterwear size={size} {...props} />;
  if (targetGroup === 'Children' && Dresses.includes(clothes))
    return <ChildrenDresses size={size} {...props} />;

  if (Bags.includes(clothes)) return <MarimekkoBags size={size} {...props} />;
  if (MCoats.includes(clothes))
    return <MarimekkoCoats size={size} {...props} />;
  if (MDresses.includes(clothes))
    return <MarimekkoDresses size={size} {...props} />;
  if (MGloves.includes(clothes))
    return <MarimekkoGloves size={size} {...props} />;
  if (MHeadwears.includes(clothes))
    return <MarimekkoHeadwears size={size} {...props} />;
  if (MJackets.includes(clothes))
    return <MarimekkoJackets size={size} {...props} />;
  if (MMarket.includes(clothes))
    return <MarimekkoMarket size={size} {...props} />;
  if (MOthers.includes(clothes))
    return <MarimekkoOthers size={size} {...props} />;
  if (MShorts.includes(clothes))
    return <MarimekkoShorts size={size} {...props} />;
  if (MTrousers.includes(clothes))
    return <MarimekkoTrousers size={size} {...props} />;
  if (MAnkleTrousers.includes(clothes))
    return <MarimekkoAnkleTrousers size={size} {...props} />;
  if (MSwimwears.includes(clothes))
    return <MarimekkoSwimwears size={size} {...props} />;
  if (MSocks.includes(clothes))
    return <MarimekkoSocks size={size} {...props} />;
  if (MScarves.includes(clothes))
    return <MarimekkoScarves size={size} {...props} />;
  if (MOtherBags.includes(clothes))
    return <MarimekkoOtherBags size={size} {...props} />;
  if (MOtherAccessories.includes(clothes))
    return <MarimekkoOtherAccessories size={size} {...props} />;
  if (MShoes.includes(clothes))
    return <MarimekkoShoes size={size} {...props} />;
  if (MSkirts.includes(clothes))
    return <MarimekkoSkirts size={size} {...props} />;
  if (MTops.includes(clothes)) return <MarimekkoTops size={size} {...props} />;

  if (clothes === 'Trousers') return <CommonTrousers size={size} {...props} />;
  if (clothes === 'Tops') return <CommonTops size={size} {...props} />;
  if (clothes === 'Blouses') return <CommonBlousers size={size} {...props} />;
  if (clothes === 'Jersey Tops')
    return <CommonJerseyTops size={size} {...props} />;
  if (clothes === 'Outdoor') return <CommonOutdoor size={size} {...props} />;
  if (clothes === 'Shoes') return <CommonShoes size={size} {...props} />;
  if (clothes === 'Skirts') return <CommonSkirts size={size} {...props} />;
  if (clothes === 'Shirts') return <MenShirts size={size} {...props} />;
  if (clothes === 'Others') return <CommonOthers size={size} {...props} />;
  if (clothes === 'Waistcoats')
    return <CommonWaistcoats size={size} {...props} />;
  if (clothes === 'Swimwear')
    return <MarimekkoSwimwears size={size} {...props} />;
  if (clothes === 'Socks/Tights')
    return <CommonSocksTights size={size} {...props} />;
  if (clothes === 'Shorts') return <CommonShorts size={size} {...props} />;
  if (clothes === 'Layer') return <CommonLayer size={size} {...props} />;
  if (clothes === 'Bodies/Overalls')
    return <CommonBodiesOverall size={size} {...props} />;
  if (Nightwear.indexOf(clothes))
    return <CommonNightwear size={size} {...props} />;
  if (Bags.includes(clothes)) return <CommonBags size={size} {...props} />;
  if (Knits.includes(clothes)) return <CommonKnitTops size={size} {...props} />;
  if (Dresses.includes(clothes)) return <WomenDresses size={size} {...props} />;
  if (CategoryTotal.includes(clothes))
    return <CommonTotal size={size} {...props} />;

  return <CommonOthers size={size} {...props} />;
};

export default ClothesIcon;
