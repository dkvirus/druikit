import React, { type FC } from 'react';
import { Box, BoxType } from '../Box';

export const Flex: FC<BoxType> = ({ ...props }) => {
  return <Box display="flex" {...props} />;
};

export const Flex1: FC<BoxType> = ({ ...props }) => {
  return <Box flexGrow={1} {...props} />;
};
