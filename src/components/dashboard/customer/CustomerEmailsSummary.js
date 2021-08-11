// import { useState, useCallback, useEffect } from 'react';
// import { format } from 'date-fns';
import {
  // Box,
  // Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  // Table,
  // TableBody,
  // TableCell,
  // TableRow,
  // TextField,
  // Typography
} from '@material-ui/core';
import CustomerProgress from './CustomerProgress';

const CustomerEmailsSummary = (props) => (
  <Card {...props}>
    <CardHeader title="Customer's Timeline" />
    <Divider />
    <CardContent>
      <CustomerProgress />
    </CardContent>
  </Card>
);

export default CustomerEmailsSummary;
