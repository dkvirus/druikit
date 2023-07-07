import React, { FC, forwardRef } from 'react';
import Box, { type BoxProps } from '../Box';

export const Flex1: FC<BoxProps> = forwardRef(({ ...props }, ref) => {
  return <Box ref={ref} flexGrow={1} {...props} />;
});

const Flex: FC<BoxProps> = forwardRef(({ ...props }, ref) => {
  return <Box ref={ref} display="flex" {...props} />;
});

export default Flex;
