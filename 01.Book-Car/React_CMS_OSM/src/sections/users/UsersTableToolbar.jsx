import Iconify from '@/components/common/Iconify';
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import React from 'react';

const OrdersTableToolbar = ({
  numSelected,
  filterName,
  onFilterName,
  onOptionFilter
}) => {
  return (
    <Toolbar
      sx={{
        height: 96,
        display: 'flex',
        justifyContent: 'space-between',
        gap: '16px',
        p: theme => theme.spacing(0, 1, 0, 3),
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter'
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography component='div' variant='subtitle1'>
          {numSelected} selected
        </Typography>
      ) : (
        <OutlinedInput
          value={filterName}
          onChange={onFilterName}
          placeholder='Tìm kiếm khách hàng...'
          sx={{
            width: '100%'
          }}
          startAdornment={
            <InputAdornment position='start'>
              <Iconify
                icon='eva:search-fill'
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          }
        />
      )}

      {numSelected > 0 ? (
        <Tooltip title='Delete'>
          <IconButton>
            <Iconify icon='eva:trash-2-fill' />
          </IconButton>
        </Tooltip>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </Toolbar>
  );
};

export default OrdersTableToolbar;
