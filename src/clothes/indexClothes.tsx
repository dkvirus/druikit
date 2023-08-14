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
}: {
  clothes?: string;
  targetGroup?: string;
}) => {
  if (['Men', 'All Options'].includes(targetGroup) && clothes === 'Accessories')
    return <MenAccessories />;
  if (['Men', 'All Options'].includes(targetGroup) && clothes === 'Body Wear')
    return <MenBodywear />;
  if (['Men', 'All Options'].includes(targetGroup) && clothes === 'Bottoms')
    return <MenBottoms />;
  if (['Men', 'All Options'].includes(targetGroup) && clothes === 'T-Shirts')
    return <MenTshirts />;
  if (['Men', 'All Options'].includes(targetGroup) && clothes === 'Tops')
    return <MenTops />;
  if (['Men', 'All Options'].includes(targetGroup) && clothes === 'Outerwear')
    return <MenOuterwear />;
  if (
    ['Men', 'All Options'].includes(targetGroup) &&
    FootWears.includes(clothes)
  )
    return <MenFootwear />;
  if (['Men', 'All Options'].includes(targetGroup) && Jeans.includes(clothes))
    return <MenJeans />;
  if (['Men', 'All Options'].includes(targetGroup) && Suits.includes(clothes))
    return <MenSuitBlazers />;

  if (targetGroup === 'Women' && clothes === 'Accessories')
    return <WomenAccessories />;
  if (targetGroup === 'Women' && clothes === 'Body Wear')
    return <WomenBodywear />;
  if (targetGroup === 'Women' && clothes === 'Bottoms') return <WomenBottoms />;
  if (targetGroup === 'Women' && clothes === 'T-Shirts')
    return <WomenTshirts />;
  if (targetGroup === 'Women' && clothes === 'Tops') return <WomenTops />;
  if (targetGroup === 'Women' && clothes === 'Outerwear')
    return <WomenOuterwear />;
  if (targetGroup === 'Women' && FootWears.includes(clothes))
    return <WomenFootwear />;
  if (targetGroup === 'Women' && Jeans.includes(clothes)) return <WomenJeans />;
  if (targetGroup === 'Women' && Suits.includes(clothes))
    return <WomenSuitBlazers />;

  if (targetGroup === 'Children' && clothes === 'Accessories')
    return <ChildrenAccessories />;
  if (targetGroup === 'Children' && clothes === 'Body Wear')
    return <ChildrenBodywear />;
  if (targetGroup === 'Children' && clothes === 'Product Sets')
    return <ChildrenProductSets />;
  if (targetGroup === 'Children' && clothes === 'Bodies')
    return <ChildrenBodies />;
  if (targetGroup === 'Children' && clothes === 'T-Shirts')
    return <ChildrenShirts />;
  if (targetGroup === 'Children' && clothes === 'Tops') return <ChildrenTops />;
  if (targetGroup === 'Children' && clothes === 'Outerwear')
    return <ChildrenOuterwear />;
  if (targetGroup === 'Children' && Dresses.includes(clothes))
    return <ChildrenDresses />;

  if (Bags.includes(clothes)) return <MarimekkoBags />;
  if (MCoats.includes(clothes)) return <MarimekkoCoats />;
  if (MDresses.includes(clothes)) return <MarimekkoDresses />;
  if (MGloves.includes(clothes)) return <MarimekkoGloves />;
  if (MHeadwears.includes(clothes)) return <MarimekkoHeadwears />;
  if (MJackets.includes(clothes)) return <MarimekkoJackets />;
  if (MMarket.includes(clothes)) return <MarimekkoMarket />;
  if (MOthers.includes(clothes)) return <MarimekkoOthers />;
  if (MShorts.includes(clothes)) return <MarimekkoShorts />;
  if (MTrousers.includes(clothes)) return <MarimekkoTrousers />;
  if (MAnkleTrousers.includes(clothes)) return <MarimekkoAnkleTrousers />;
  if (MSwimwears.includes(clothes)) return <MarimekkoSwimwears />;
  if (MSocks.includes(clothes)) return <MarimekkoSocks />;
  if (MScarves.includes(clothes)) return <MarimekkoScarves />;
  if (MOtherBags.includes(clothes)) return <MarimekkoOtherBags />;
  if (MOtherAccessories.includes(clothes)) return <MarimekkoOtherAccessories />;
  if (MShoes.includes(clothes)) return <MarimekkoShoes />;
  if (MSkirts.includes(clothes)) return <MarimekkoSkirts />;
  if (MTops.includes(clothes)) return <MarimekkoTops />;

  if (clothes === 'Trousers') return <CommonTrousers />;
  if (clothes === 'Tops') return <CommonTops />;
  if (clothes === 'Blouses') return <CommonBlousers />;
  if (clothes === 'Jersey Tops') return <CommonJerseyTops />;
  if (clothes === 'Outdoor') return <CommonOutdoor />;
  if (clothes === 'Shoes') return <CommonShoes />;
  if (clothes === 'Skirts') return <CommonSkirts />;
  if (clothes === 'Shirts') return <MenShirts />;
  if (clothes === 'Others') return <CommonOthers />;
  if (clothes === 'Waistcoats') return <CommonWaistcoats />;
  if (clothes === 'Swimwear') return <MarimekkoSwimwears />;
  if (clothes === 'Socks/Tights') return <CommonSocksTights />;
  if (clothes === 'Shorts') return <CommonShorts />;
  if (clothes === 'Layer') return <CommonLayer />;
  if (clothes === 'Bodies/Overalls') return <CommonBodiesOverall />;
  if (Nightwear.indexOf(clothes)) return <CommonNightwear />;
  if (Bags.includes(clothes)) return <CommonBags />;
  if (Knits.includes(clothes)) return <CommonKnitTops />;
  if (Dresses.includes(clothes)) return <WomenDresses />;
  if (CategoryTotal.includes(clothes)) return <CommonTotal />;

  return <CommonOthers />;
};

export default ClothesIcon;
