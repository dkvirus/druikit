import React, { ReactNode } from 'react';
import {
  AccentLogo,
  AcnestudiosLogo,
  ActionLogo,
  AdidasLogo,
  AdolfodominguezLogo,
  AhlensLogo,
  AliceOliviaLogo,
  AninebingLogo,
  ArcteryxLogo,
  ArketLogo,
  BaAndShLogo,
  BaumundpferdgartenLogo,
  BimbaylolaLogo,
  BognerFashionLogo,
  BognerFireIceLogo,
  BognerKidsLogo,
  BognerLogo,
  BognerSelectedLogo,
  BognerSportLogo,
  BognerTotalLogo,
  BossLogo,
  BottegavenetaLogo,
  BrunellocucinelliLogo,
  BurberryLogo,
  BymalinaLogo,
  CalidaLogo,
  CalvinkleinLogo,
  CanadagooseLogo,
  CAndALogo,
  CareofcarlLogo,
  CarinwesterLogo,
  ClosedLogo,
  CoachLogo,
  ColmarLogo,
  CosLogo,
  CubusLogo,
  CwLogo,
  DagmarLogo,
  DidriksonsLogo,
  DressmannLogo,
  ELeclerkLogo,
  EllosLogo,
  ElpalaciodehierroLogo,
  EtonLogo,
  FilippakLogo,
  FrauenschuhLogo,
  FurlaLogo,
  FusalpLogo,
  GanniLogo,
  GapLogo,
  GinatricotLogo,
  HanroLogo,
  HemaLogo,
  HmLogo,
  HunkemollerLogo,
  HunkydoryLogo,
  IsabelmarantLogo,
  JilsanderLogo,
  JlindebergLogo,
  JohnhenricLogo,
  JosephLogo,
  KappahlLogo,
  KatespadeLogo,
  KenzoLogo,
  KiabiLogo,
  KjusLogo,
  LevisLogo,
  LindexLogo,
  LivlyLogo,
  LululemonLogo,
  MaisonKitsuneLogo,
  MajeLogo,
  MangoLogo,
  MarimekkoLogo,
  MarniLogo,
  MassimoduttiLogo,
  MaxmaraLogo,
  MeyLogo,
  MichaelkorsLogo,
  MonclerLogo,
  MorrisLogo,
  NameitLogo,
  NewbieLogo,
  NikeLogo,
  OddmollyLogo,
  OscarjacobsonLogo,
  PatagoniaLogo,
  PeakperformanceLogo,
  PerfectmomentLogo,
  PolarnopyretLogo,
  PradaLogo,
  PurificaciongarciaLogo,
  ReimaLogo,
  RodebjerLogo,
  SalsajeansLogo,
  SandroLogo,
  SchiesserLogo,
  SelectedVendorsLogo,
  SezaneLogo,
  StadiumLogo,
  StenstromsLogo,
  StenstromsoutletLogo,
  StoriesLogo,
  SuitsupplyLogo,
  TigerofswedenLogo,
  TommyhilfigerLogo,
  TotemeLogo,
  TriumphLogo,
  UniqloLogo,
  VictoriassecretLogo,
  WeekdayLogo,
  WeraLogo,
  ZadigEtVoltaireLogo,
  ZaraLogo,
  ZzegnaLogo,
} from './index';

/**
    // apc: <APCLogo />,   // img
    // ami: <AmiParisLogo />,  // img
    // 'b-and-m': <BMLogo />,   // img
    // columbia: <ColumbiaLogo />,  // img
    // fjallraven: <FjallravenLogo />,   // img
    // framestore: <FrameLogo />,   // img
    // haglofs: <HaglofsLogo />,   // img
    // herno: <HernoLogo />,   // img
    // 'Other H&M brands@hm': <HmOtherBrandsLogo />,   // img
    // 'Hugo@boss': <HugoLogo />,   // img
    // hellyhansen: <HellyhansenLogo />,   // img
    // joyshop: <JoyshopLogo />,   // img
    // khaite: <KhaiteLogo />,   // img
    // karllagerfeld: <KarlLagerfeldLogo />,    // img
    // 'KappAhl other brands@kappahl': <KappahlOtherBrandsLogo />,    // img
    // 'KappAhl XLNT@kappahl': <XlntLogo />,   // img
    // 'KappAhl Minories@kappahl': <MinoriesLogo />,   // img
    // 'KappAhl Kayday@kappahl': <KappahlKaydayLogo />,   // img
    // 'Kappahl Selected': <KappahlSelectedLogo />,   // img
    // lahalle: <LaHalleLogo />,  // img
    // mackage: <MackageLogo />,   // img
    // mooseknuckles: <MooseKnucklesLogo />,   // img
    // marmot: <MarmotLogo />,  // img
    // 'Maxmara Weekend@maxmara': <MaxmaraWeekendLogo />,  // img
    // marcjacobs: <MarcJacobsLogo />,  // img
    // northface: <NorthfaceLogo />,  // img
    // norrona: <NorronaLogo />,   // img
    // ortovox: <OrtovoxLogo />,  // img
    // primark: <PrimarkLogo />,   // img
    // reformation: <ReformationLogo />,   // img
    // stinegoya: <StineGoyaLogo />,   // img
    // stoneisland: <StoneIslandLogo />,   // img
    // therow: <TherowLogo />,   // img
    // toryburch: <ToryBurchLogo />,  // img
    // 'Terrex@adidas': <TerrexAdidasLogo />,   // img
    // zeeman: <ZeemanLogo />,   // img
 */
const VendorLogo = ({ vendorCode = '' }: { vendorCode?: string }) => {
  let logoEl: ReactNode = null;
  switch (vendorCode) {
    case 'a':
    case 'ahlens':
      logoEl = <AhlensLogo />;
      break;
    case 'accent':
      logoEl = <AccentLogo />;
      break;
    case 'aninebing':
      logoEl = <AninebingLogo />;
      break;
    case 'arcteryx':
      logoEl = <ArcteryxLogo />;
      break;
    case 'acnestudios':
      logoEl = <AcnestudiosLogo />;
      break;
    case 'arket':
      logoEl = <ArketLogo />;
      break;
    case 'adidas':
      logoEl = <AdidasLogo />;
      break;
    case 'adolfodominguez':
      logoEl = <AdolfodominguezLogo />;
      break;
    case 'action':
      logoEl = <ActionLogo />;
      break;
    case 'aliceandolivia':
      logoEl = <AliceOliviaLogo />;
      break;
    case 'bymalina':
      logoEl = <BymalinaLogo />;
      break;
    case 'bottegaveneta':
      logoEl = <BottegavenetaLogo />;
      break;
    case 'ba-and-sh':
    case 'ba&sh@elpalaciodehierro':
      logoEl = <BaAndShLogo />;
      break;
    case 'boss':
    case 'Boss@boss':
      logoEl = <BossLogo />;
      break;
    case 'baumundpferdgarten':
      logoEl = <BaumundpferdgartenLogo />;
      break;
    case 'brunellocucinelli':
      logoEl = <BrunellocucinelliLogo />;
      break;
    case 'bogner':
      logoEl = <BognerTotalLogo />;
      break;
    case 'BOGNER@bogner':
      logoEl = <BognerLogo />;
      break;
    case 'BOGNER Fashion@bogner':
      logoEl = <BognerFashionLogo />;
      break;
    case 'BOGNER Kids@bogner':
      logoEl = <BognerKidsLogo />;
      break;
    case 'BOGNER Sport@bogner':
      logoEl = <BognerSportLogo />;
      break;
    case 'FIRE+ICE@bogner':
      logoEl = <BognerFireIceLogo />;
      break;
    case 'Bogner Selected':
      logoEl = <BognerSelectedLogo />;
      break;
    case 'bimbaylola':
      logoEl = <BimbaylolaLogo />;
      break;
    case 'burberry':
      logoEl = <BurberryLogo />;
      break;
    case 'cos':
      logoEl = <CosLogo />;
      break;
    case 'careofcarl':
      logoEl = <CareofcarlLogo />;
      break;
    case 'c-and-a':
      logoEl = <CAndALogo />;
      break;
    case 'coach':
      logoEl = <CoachLogo />;
      break;
    case 'calida':
      logoEl = <CalidaLogo />;
      break;
    case 'canadagoose':
    case 'Canada Goose@mrporter':
    case 'Canada Goose@net-a-porter':
    case 'Canada Goose@farfetch':
    case 'Canada Goose@24s':
    case 'Canada Goose@mytheresa':
    case 'Canada Goose@luisaviaroma':
    case 'Canada Goose@selfridges':
    case 'Canada Goose@brownsfashion':
    case 'Canada Goose@flannels':
    case 'Canada Goose@harveynichols':
    case 'Canada Goose@cettire':
    case 'Canada Goose@breuninger':
    case 'Canada Goose@engelhorn':
    case 'Canada Goose@bergfreunde':
    case 'Canada Goose@kadewe':
    case 'Canada Goose@careofcarl':
    case 'Canada Goose@lodenfrey':
    case 'Canada Goose@miinto':
    case 'Canada Goose@debijenkorf':
    case 'Canada Goose@galerieslafayette':
    case 'Canada Goose@printemps':
    case 'Canada Goose@rinascente':
    case 'Canada Goose@yoox':
      logoEl = <CanadagooseLogo />;
      break;
    case 'Coach@elpalaciodehierro':
      logoEl = <CoachLogo />;
      break;
    case 'colmar':
      logoEl = <ColmarLogo />;
      break;
    case 'cw':
      logoEl = <CwLogo />;
      break;
    case 'closed':
      logoEl = <ClosedLogo />;
      break;
    case 'carinwester':
      logoEl = <CarinwesterLogo />;
      break;
    case 'calvinklein':
      logoEl = <CalvinkleinLogo />;
      break;
    case 'cubus':
      logoEl = <CubusLogo />;
      break;
    case 'dagmar':
      logoEl = <DagmarLogo />;
      break;
    case 'didriksons':
      logoEl = <DidriksonsLogo />;
      break;
    case 'dressmann':
      logoEl = <DressmannLogo />;
      break;
    case 'ellos':
      logoEl = <EllosLogo />;
      break;
    case 'eleclerc':
      logoEl = <ELeclerkLogo />;
      break;
    case 'eton':
      logoEl = <EtonLogo />;
      break;
    case 'elpalaciodehierro':
      logoEl = <ElpalaciodehierroLogo />;
      break;
    case 'filippak':
      logoEl = <FilippakLogo />;
      break;
    case 'furla':
      logoEl = <FurlaLogo />;
      break;
    case 'fusalp':
      logoEl = <FusalpLogo />;
      break;
    case 'frauenschuh':
      logoEl = <FrauenschuhLogo />;
      break;
    case 'ganni':
      logoEl = <GanniLogo />;
      break;
    case 'gap':
      logoEl = <GapLogo />;
      break;
    case 'ginatricot':
      logoEl = <GinatricotLogo />;
      break;
    case 'hunkemoller':
      logoEl = <HunkemollerLogo />;
      break;
    case 'hm':
    case 'H&M@hm':
      logoEl = <HmLogo />;
      break;
    case 'hema':
      logoEl = <HemaLogo />;
      break;
    case 'hanro':
      logoEl = <HanroLogo />;
      break;
    case 'hunkydory':
      logoEl = <HunkydoryLogo />;
      break;
    case 'isabelmarant':
      logoEl = <IsabelmarantLogo />;
      break;
    case 'jilsander':
      logoEl = <JilsanderLogo />;
      break;
    case 'jlindeberg':
      logoEl = <JlindebergLogo />;
      break;
    case 'johnhenric':
      logoEl = <JohnhenricLogo />;
      break;
    case 'joseph':
      logoEl = <JosephLogo />;
      break;
    case 'kenzo':
      logoEl = <KenzoLogo />;
      break;
    case 'kjus':
      logoEl = <KjusLogo />;
      break;
    case 'kiabi':
      logoEl = <KiabiLogo />;
      break;
    case 'kappahl':
      logoEl = <KappahlLogo />;
      break;
    case 'KappAhl Newbie@kappahl':
    case 'newbie':
      logoEl = <NewbieLogo />;
      break;
    case 'katespade':
    case 'Kate Spade@elpalaciodehierro':
      logoEl = <KatespadeLogo />;
      break;
    case 'livly':
      logoEl = <LivlyLogo />;
      break;
    case 'lindex':
      logoEl = <LindexLogo />;
      break;
    case 'levis':
      logoEl = <LevisLogo />;
      break;
    case 'lululemon':
      logoEl = <LululemonLogo />;
      break;
    case 'marimekko':
      logoEl = <MarimekkoLogo />;
      break;
    case 'marni':
      logoEl = <MarniLogo />;
      break;
    case 'maxmara':
    case 'Maxmara@maxmara':
      logoEl = <MaxmaraLogo />;
      break;
    case 'moncler':
    case 'Moncler@mrporter':
    case 'Moncler@net-a-porter':
    case 'Moncler@farfetch':
    case 'Moncler@24s':
    case 'Moncler@mytheresa':
    case 'Moncler@luisaviaroma':
    case 'Moncler@selfridges':
    case 'Moncler@brownsfashion':
    case 'Moncler@flannels':
    case 'Moncler@harveynichols':
    case 'Moncler@cettire':
    case 'Moncler@breuninger':
    case 'Moncler@engelhorn':
    case 'Moncler@careofcarl':
    case 'Moncler@lodenfrey':
    case 'Moncler@miinto':
    case 'Moncler@debijenkorf':
    case 'Moncler@printemps':
    case 'Moncler@yoox':
      logoEl = <MonclerLogo />;
      break;
    case 'maje':
      logoEl = <MajeLogo />;
      break;
    case 'morris':
      logoEl = <MorrisLogo />;
      break;
    case 'mango':
      logoEl = <MangoLogo />;
      break;
    case 'michaelkors':
    case 'Michael Kors@elpalaciodehierro':
      logoEl = <MichaelkorsLogo />;
      break;
    case 'mey':
      logoEl = <MeyLogo />;
      break;
    case 'massimodutti':
      logoEl = <MassimoduttiLogo />;
      break;
    case 'maisonkitsune':
      logoEl = <MaisonKitsuneLogo />;
      break;
    case 'nameit':
      logoEl = <NameitLogo />;
      break;
    case 'nike':
      logoEl = <NikeLogo />;
      break;
    case 'oscarjacobson':
      logoEl = <OscarjacobsonLogo />;
      break;
    case 'oddmolly':
      logoEl = <OddmollyLogo />;
      break;
    case 'polarnopyret':
      logoEl = <PolarnopyretLogo />;
      break;
    case 'patagonia':
      logoEl = <PatagoniaLogo />;
      break;
    case 'purificaciongarcia':
      logoEl = <PurificaciongarciaLogo />;
      break;
    case 'peakperformance':
      logoEl = <PeakperformanceLogo />;
      break;
    case 'perfectmoment':
      logoEl = <PerfectmomentLogo />;
      break;
    case 'prada':
      logoEl = <PradaLogo />;
      break;
    case 'reima':
      logoEl = <ReimaLogo />;
      break;
    case 'rodebjer':
      logoEl = <RodebjerLogo />;
      break;
    case 'stenstroms':
      logoEl = <StenstromsLogo />;
      break;
    case 'stenstromsoutlet':
      logoEl = <StenstromsoutletLogo />;
      break;
    case 'sezane':
      logoEl = <SezaneLogo />;
      break;
    case 'stadium':
      logoEl = <StadiumLogo />;
      break;
    case 'suitsupply':
      logoEl = <SuitsupplyLogo />;
      break;
    case 'stories':
      logoEl = <StoriesLogo />;
      break;
    case 'schiesser':
      logoEl = <SchiesserLogo />;
      break;
    case 'salsajeans':
      logoEl = <SalsajeansLogo />;
      break;
    case 'sandro':
      logoEl = <SandroLogo />;
      break;
    case 'Selected vendors':
      logoEl = <SelectedVendorsLogo />;
      break;
    case 'tommyhilfiger':
      logoEl = <TommyhilfigerLogo />;
      break;
    case 'tigerofsweden':
      logoEl = <TigerofswedenLogo />;
      break;
    case 'triumph':
      logoEl = <TriumphLogo />;
      break;
    case 'toteme':
      logoEl = <TotemeLogo />;
      break;
    case 'uniqlo':
      logoEl = <UniqloLogo />;
      break;
    case 'victoriassecret':
      logoEl = <VictoriassecretLogo />;
      break;
    case 'weekday':
      logoEl = <WeekdayLogo />;
      break;
    case 'wera':
      logoEl = <WeraLogo />;
      break;
    case 'zadig-et-voltaire':
    case 'Zadig & Voltaire@elpalaciodehierro':
      logoEl = <ZadigEtVoltaireLogo />;
      break;
    case 'zara':
      logoEl = <ZaraLogo />;
      break;
    case 'zzegna':
      logoEl = <ZzegnaLogo />;
      break;
    default:
      logoEl = <>{vendorCode}</>;
  }
  return logoEl;
};

export default VendorLogo;
