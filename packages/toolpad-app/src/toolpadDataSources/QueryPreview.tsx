import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import ErrorAlert from '../toolpad/AppEditor/PageEditor/ErrorAlert';

export interface QueryPreviewProps {
  children?: React.ReactNode;
  error?: unknown;
  isLoading?: boolean;
}

export default function QueryPreview({ children, error, isLoading }: QueryPreviewProps) {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {isLoading ? <LinearProgress /> : null}
      <Box sx={{ flex: 1, minHeight: 0 }}>{error ? <ErrorAlert error={error} /> : children}</Box>
    </Box>
  );
}