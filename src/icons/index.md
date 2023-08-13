# Icons

图标

## 图标展示

```jsx
import {
  IndexIcon,
  AccountOutlined,
  AlertAddOutlined,
  AlertOutlined,
  AnalysisFilled,
  AnalysisOutlined,
  AntiClockWiseOutlined,
  ArrowDownOutlined,
  ArrowRightOutlined,
  ArrowUpOutlined,
  BookOutlined,
  CalendarOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  CloudDownloadFilled,
  DashboardFilled,
  DeleteFilled,
  DoubleRightOutlined,
  DownloadOutlined,
  EditOutlined,
  EjectOutlined,
  ExpandOutlined,
  EyeFilled,
  InfoCircleOutlined,
  LeftOutlined,
  LoadingOutlined,
  MenuOutlined,
  PlusOutlined,
  ReleaseOutlined,
  RightOutlined,
  UserSettingOutlined,
  Flex,
  Box,
} from 'druikit';

export default () => {
  const icons = [
    {
      name: 'IndexIcon',
      icon: <IndexIcon size={40} />,
    },
    {
      name: 'AccountOutlined',
      icon: <AccountOutlined size={40} />,
    },
    {
      name: 'AlertAddOutlined',
      icon: <AlertAddOutlined size={40} />,
    },
    {
      name: 'AlertOutlined',
      icon: <AlertOutlined size={40} />,
    },
    {
      name: 'AnalysisFilled',
      icon: <AnalysisFilled size={40} />,
    },
    {
      name: 'AnalysisOutlined',
      icon: <AnalysisOutlined size={40} />,
    },
    {
      name: 'ArrowDownOutlined',
      icon: <ArrowDownOutlined size={40} />,
    },
    {
      name: 'ArrowRightOutlined',
      icon: <ArrowRightOutlined size={40} />,
    },
    {
      name: 'ArrowUpOutlined',
      icon: <ArrowUpOutlined size={40} />,
    },
    {
      name: 'BookOutlined',
      icon: <BookOutlined size={40} />,
    },
    {
      name: 'CalendarOutlined',
      icon: <CalendarOutlined size={40} />,
    },
    {
      name: 'CaretUpOutlined',
      icon: <CaretUpOutlined size={40} />,
    },
    {
      name: 'CaretDownOutlined',
      icon: <CaretDownOutlined size={40} />,
    },
    {
      name: 'CaretLeftOutlined',
      icon: <CaretLeftOutlined size={40} />,
    },
    {
      name: 'CaretRightOutlined',
      icon: <CaretRightOutlined size={40} />,
    },
    {
      name: 'CheckOutlined',
      icon: <CheckOutlined size={40} />,
    },
    {
      name: 'ClockCircleOutlined',
      icon: <ClockCircleOutlined size={40} />,
    },
    {
      name: 'AntiClockWiseOutlined',
      icon: <AntiClockWiseOutlined size={40} />,
    },
    {
      name: 'CloseOutlined',
      icon: <CloseOutlined size={40} />,
    },
    {
      name: 'CloudDownloadFilled',
      icon: <CloudDownloadFilled size={40} />,
    },
    {
      name: 'DashboardFilled',
      icon: <DashboardFilled size={40} />,
    },
    {
      name: 'DeleteFilled',
      icon: <DeleteFilled size={40} />,
    },
    {
      name: 'DoubleRightOutlined',
      icon: <DoubleRightOutlined size={40} />,
    },
    {
      name: 'DownloadOutlined',
      icon: <DownloadOutlined size={40} />,
    },
    {
      name: 'EditOutlined',
      icon: <EditOutlined size={40} />,
    },
    {
      name: 'EjectOutlined',
      icon: <EjectOutlined size={40} />,
    },
    {
      name: 'ExpandOutlined',
      icon: <ExpandOutlined size={40} />,
    },
    {
      name: 'EyeFilled',
      icon: <EyeFilled size={40} />,
    },
    {
      name: 'InfoCircleOutlined',
      icon: <InfoCircleOutlined size={40} />,
    },
    {
      name: 'LoadingOutlined',
      icon: <LoadingOutlined size={40} />,
    },
    {
      name: 'LeftOutlined',
      icon: <LeftOutlined size={40} />,
    },
    {
      name: 'RightOutlined',
      icon: <RightOutlined size={40} />,
    },
    {
      name: 'MenuOutlined',
      icon: <MenuOutlined size={40} />,
    },
    {
      name: 'PlusOutlined',
      icon: <PlusOutlined size={40} />,
    },
    {
      name: 'ReleaseOutlined',
      icon: <ReleaseOutlined size={40} />,
    },
    {
      name: 'UserSettingOutlined',
      icon: <UserSettingOutlined size={40} />,
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
