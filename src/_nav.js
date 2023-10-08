import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cibWhatsapp,
  cilCalculator,
  cilCursor,
  cilNotes,
  cilPuzzle,
  cilSpeedometer,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  {
    component: CNavItem,
    name: 'WhatsApp',
    to: '/theme/colors',
    icon: <CIcon icon={cibWhatsapp} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Account Manager',
    to: '/theme/typography',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavTitle,
  //   name: 'Components',
  // },
  {
    component: CNavGroup,
    name: 'FEATURES',
    to: '/features',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Report',
        to: '/features/report',
      },
      {
        component: CNavItem,
        name: 'Profile',
        to: 'features/profile',
      },
      {
        component: CNavItem,
        name: 'Bulk messaging',
        to: '/features/bulk',
      },
      {
        component: CNavItem,
        name: 'Autoresponder',
        to: '/features/autoresponder',
      },
      {
        component: CNavItem,
        name: 'Export participants',
        to: '/features/export',
      },
      {
        component: CNavItem,
        name: 'API',
        to: '/features/api',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'TEMPLATE',
    to: '/template',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Button template',
        to: '/template/buttons',
      },
      {
        component: CNavItem,
        name: 'List message template',
        to: '/template/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/template/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  },
]

export default _nav
