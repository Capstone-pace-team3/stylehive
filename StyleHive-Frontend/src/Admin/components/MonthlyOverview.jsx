// ** Icons Imports
import { AccountCircle, TrendingUp } from '@mui/icons-material'
import SettingsCellIcon from '@mui/icons-material/SettingsCell'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import React from 'react'


import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material'

const salesData = [
    {
      stats: '245k',
      title: 'Sales',
      color: 'primary',
      icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: '12.5k',
      title: 'Customers',
      color: 'success',
      icon: <AccountCircle sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: '1.54k',
      color: 'warning',
      title: 'Products',
      icon: <SettingsCellIcon sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: '$88k',
      color: 'info',
      title: 'Revenue',
      icon: <AttachMoneyIcon sx={{ fontSize: '1.75rem' }} />
    }
  ]


  const renderStats = () => {
    return salesData.map((item, index) => (
      <Grid item xs={12} sm={3} key={index}>
        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            variant='rounded'
            sx={{
              mr: 3,
              width: 44,
              height: 44,
              boxShadow: 3,
              color: 'common.white',
              backgroundColor: `${item.color}.main`
            }}
          >
            {item.icon}
          </Avatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='caption'>{item.title}</Typography>
            <Typography variant='h6'>{item.stats}</Typography>
          </Box>
        </Box>
      </Grid>
    ))
  }

const MonthlyOverview=()=> {
    return (
        <div>
    <Card sx={{bgcolor:"#242B2E", color:"white"}}>
      <CardHeader
        title='Monthly Overview'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <MoreVertIcon />
          </IconButton>
        }
        subheader={
          <Typography variant='body2'>
            <Box component='span' sx={{ fontWeight: 600, mx:2 }}>
              Total 48.5% growth
            </Box>{' '}
            😎 this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
        </div>
    )
}

export default MonthlyOverview
