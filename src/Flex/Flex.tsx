import React, { FC, forwardRef } from 'react';
import { Box, BoxType } from '../Box';

export const Flex: FC<BoxType> = forwardRef(({ ...props }, ref) => {
  return <Box ref={ref} display="flex" {...props} />;
});

export const Flex1: FC<BoxType> = forwardRef(({ ...props }, ref) => {
  return <Box ref={ref} flexGrow={1} {...props} />;
});
