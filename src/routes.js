import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base FEATURES
const Report = React.lazy(() => import('./views/features/report/Report'))
const Profile = React.lazy(() => import('./views/features/profile/Profile'))
const Bulk = React.lazy(() => import('./views/features/bulk/Bulk'))
const Autoresponder = React.lazy(() => import('./views/features/autoresponder/Autoresponder'))
const Export = React.lazy(() => import('./views/features/export/Export'))
const API = React.lazy(() => import('./views/features/api/API'))

// Buttons TEMPLATE
const Buttons = React.lazy(() => import('./views/template/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/template/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/template/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))


// Widgets
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },

  { path: '/features', name: 'Features', element: Report, exact: true },
  { path: '/features/report', name: 'Report', element: Report },
  { path: '/features/profile', name: 'Profile ', element: Profile },
  { path: '/features/bulk', name: 'Bulk', element: Bulk },
  { path: '/features/autoresponder', name: 'Autoresponder', element: Autoresponder },
  { path: '/features/export', name: 'Export', element: Export },
  { path: '/features/api', name: 'API', element: API },

  { path: '/template', name: 'Buttons', element: Buttons, exact: true },
  { path: '/template/buttons', name: 'Buttons', element: Buttons },
  { path: '/template/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/template/button-groups', name: 'Button Groups', element: ButtonGroups },

  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
