# Clothes

衣服图标

## 图标展示

```jsx
import {
  IndexClothesTest,
  ChildrenAccessories,
  ChildrenBodies,
  ChildrenBodywear,
  ChildrenDresses,
  ChildrenOuterwear,
  ChildrenProductSets,
  ChildrenShirts,
  ChildrenTops,
  MenAccessories,
  MenBodywear,
  MenBottoms,
  MenFootwear,
  MenJeans,
  MenOthers,
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
  CommonBags,
  CommonBlousers,
  CommonJerseyTops,
  CommonKnitTops,
  CommonOutdoor,
  CommonShoes,
  CommonSkirts,
  CommonTops,
  CommonTotal,
  CommonTrousers,
  CommonBodiesOverall,
  CommonLayer,
  CommonNightwear,
  CommonOthers,
  CommonShorts,
  CommonSocksTights,
  CommonSwimwear,
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
  Flex,
  Box,
} from 'druikit';

export default () => {
  const icons = [
    {
      name: 'IndexClothesTest',
      icon: <IndexClothesTest size={40} />,
    },
    {
      name: 'ChildrenAccessories',
      icon: <ChildrenAccessories size={40} />,
    },
    {
      name: 'ChildrenBodies',
      icon: <ChildrenBodies size={40} />,
    },
    {
      name: 'ChildrenBodywear',
      icon: <ChildrenBodywear size={40} />,
    },
    {
      name: 'ChildrenDresses',
      icon: <ChildrenDresses size={40} />,
    },
    {
      name: 'ChildrenOuterwear',
      icon: <ChildrenOuterwear size={40} />,
    },
    {
      name: 'ChildrenProductSets',
      icon: <ChildrenProductSets size={40} />,
    },
    {
      name: 'ChildrenShirts',
      icon: <ChildrenShirts size={40} />,
    },
    {
      name: 'ChildrenTops',
      icon: <ChildrenTops size={40} />,
    },
    {
      name: 'MenAccessories',
      icon: <MenAccessories size={40} />,
    },
    {
      name: 'MenBodywear',
      icon: <MenBodywear size={40} />,
    },
    {
      name: 'MenBottoms',
      icon: <MenBottoms size={40} />,
    },
    {
      name: 'MenFootwear',
      icon: <MenFootwear size={40} />,
    },
    {
      name: 'MenJeans',
      icon: <MenJeans size={40} />,
    },
    {
      name: 'MenOthers',
      icon: <MenOthers size={40} />,
    },
    {
      name: 'MenOuterwear',
      icon: <MenOuterwear size={40} />,
    },
    {
      name: 'MenShirts',
      icon: <MenShirts size={40} />,
    },
    {
      name: 'MenSuitBlazers',
      icon: <MenSuitBlazers size={40} />,
    },
    {
      name: 'MenTops',
      icon: <MenTops size={40} />,
    },
    {
      name: 'MenTshirts',
      icon: <MenTshirts size={40} />,
    },
    {
      name: 'WomenAccessories',
      icon: <WomenAccessories size={40} />,
    },
    {
      name: 'WomenBodywear',
      icon: <WomenBodywear size={40} />,
    },
    {
      name: 'WomenBottoms',
      icon: <WomenBottoms size={40} />,
    },
    {
      name: 'WomenDresses',
      icon: <WomenDresses size={40} />,
    },
    {
      name: 'WomenFootwear',
      icon: <WomenFootwear size={40} />,
    },
    {
      name: 'WomenJeans',
      icon: <WomenJeans size={40} />,
    },
    {
      name: 'WomenOuterwear',
      icon: <WomenOuterwear size={40} />,
    },
    {
      name: 'WomenSuitBlazers',
      icon: <WomenJeans size={40} />,
    },
    {
      name: 'WomenTops',
      icon: <WomenTops size={40} />,
    },
    {
      name: 'WomenTshirts',
      icon: <WomenTshirts size={40} />,
    },
    {
      name: 'CommonBags',
      icon: <CommonBags size={40} />,
    },
    {
      name: 'CommonBlousers',
      icon: <CommonBlousers size={40} />,
    },
    {
      name: 'CommonJerseyTops',
      icon: <CommonJerseyTops size={40} />,
    },
    {
      name: 'CommonKnitTops',
      icon: <CommonKnitTops size={40} />,
    },
    {
      name: 'CommonOutdoor',
      icon: <CommonOutdoor size={40} />,
    },
    {
      name: 'CommonShoes',
      icon: <CommonShoes size={40} />,
    },
    {
      name: 'CommonSkirts',
      icon: <CommonSkirts size={40} />,
    },
    {
      name: 'CommonTotal',
      icon: <CommonTotal size={40} />,
    },
    {
      name: 'CommonTrousers',
      icon: <CommonTrousers size={40} />,
    },
    {
      name: 'CommonTops',
      icon: <CommonTops size={40} />,
    },
    {
      name: 'CommonBodiesOverall',
      icon: <CommonBodiesOverall size={40} />,
    },
    {
      name: 'CommonLayer',
      icon: <CommonLayer size={40} />,
    },
    {
      name: 'CommonNightwear',
      icon: <CommonNightwear size={40} />,
    },
    {
      name: 'CommonOthers',
      icon: <CommonOthers size={40} />,
    },
    {
      name: 'CommonShorts',
      icon: <CommonShorts size={40} />,
    },
    {
      name: 'CommonSocksTights',
      icon: <CommonSocksTights size={40} />,
    },
    {
      name: 'CommonSwimwear',
      icon: <CommonSwimwear size={40} />,
    },
    {
      name: 'CommonWaistcoats',
      icon: <CommonWaistcoats size={40} />,
    },
    {
      name: 'MarimekkoAnkleTrousers',
      icon: <MarimekkoAnkleTrousers size={40} />,
    },
    {
      name: 'MarimekkoBags',
      icon: <MarimekkoBags size={40} />,
    },
    {
      name: 'MarimekkoCoats',
      icon: <MarimekkoCoats size={40} />,
    },
    {
      name: 'MarimekkoDresses',
      icon: <MarimekkoDresses size={40} />,
    },
    {
      name: 'MarimekkoGloves',
      icon: <MarimekkoGloves size={40} />,
    },
    {
      name: 'MarimekkoHeadwears',
      icon: <MarimekkoHeadwears size={40} />,
    },
    {
      name: 'MarimekkoJackets',
      icon: <MarimekkoJackets size={40} />,
    },
    {
      name: 'MarimekkoMarket',
      icon: <MarimekkoMarket size={40} />,
    },
    {
      name: 'MarimekkoOtherAccessories',
      icon: <MarimekkoOtherAccessories size={40} />,
    },
    {
      name: 'MarimekkoOtherBags',
      icon: <MarimekkoOtherBags size={40} />,
    },
    {
      name: 'MarimekkoOthers',
      icon: <MarimekkoOthers size={40} />,
    },
    {
      name: 'MarimekkoScarves',
      icon: <MarimekkoScarves size={40} />,
    },
    {
      name: 'MarimekkoShoes',
      icon: <MarimekkoShoes size={40} />,
    },
    {
      name: 'MarimekkoShorts',
      icon: <MarimekkoShorts size={40} />,
    },
    {
      name: 'MarimekkoSkirts',
      icon: <MarimekkoSkirts size={40} />,
    },
    {
      name: 'MarimekkoSocks',
      icon: <MarimekkoSocks size={40} />,
    },
    {
      name: 'MarimekkoSwimwears',
      icon: <MarimekkoSwimwears size={40} />,
    },
    {
      name: 'MarimekkoTops',
      icon: <MarimekkoTops size={40} />,
    },
    {
      name: 'MarimekkoTrousers',
      icon: <MarimekkoTrousers size={40} />,
    },
  ];

  return (
    <Flex flexWrap="wrap">
      {icons.map((i) => {
        return (
          <Flex
            key={i.name}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding={20}
            width={200}
          >
            {i.icon}
            <Box height={20} />
            <Box>{i.name}</Box>
          </Flex>
        );
      })}
    </Flex>
  );
};
```
