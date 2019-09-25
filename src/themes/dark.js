import Constants from 'expo-constants'
import { dark as darkTheme } from '@eva-design/eva'

const {
  THEME_CUSTOMIZATION,
} = Constants.manifest.extra

const theme = {
  ...darkTheme,

  // Dark theme defaults below.
  // Check here for updates: https://github.com/eva-design/eva/blob/master/packages/eva/themes/dark.json

  // "color-basic-100": "#FFFFFF",
  // "color-basic-200": "#F7F9FC",
  // "color-basic-300": "#EDF1F7",
  // "color-basic-400": "#E4E9F2",
  // "color-basic-500": "#C5CEE0",
  // "color-basic-600": "#8F9BB3",
  // "color-basic-700": "#2E3A59",
  // "color-basic-800": "#222B45",
  // "color-basic-900": "#1A2138",
  // "color-basic-1000": "#151A30",
  // "color-basic-1100": "#101426",

  // "color-primary-100": "#F2F6FF",
  // "color-primary-200": "#D9E4FF",
  // "color-primary-300": "#A6C1FF",
  // "color-primary-400": "#598BFF",
  // "color-primary-500": "#3366FF",
  // "color-primary-600": "#274BDB",
  // "color-primary-700": "#1A34B8",
  // "color-primary-800": "#102694",
  // "color-primary-900": "#091C7A",

  // "color-secondary-100": "#F7F2FF",
  // "color-secondary-200": "#E0D1FF",
  // "color-secondary-300": "#C5A8FF",
  // "color-secondary-400": "#A375FF",
  // "color-secondary-500": "#884DFF",
  // "color-secondary-600": "#6A39DB",
  // "color-secondary-700": "#4F28B8",
  // "color-secondary-800": "#371B94",
  // "color-secondary-900": "#26117A",

  // "color-tertiary-100": "#FFDED6",
  // "color-tertiary-200": "#FFDED6",
  // "color-tertiary-300": "#FFDED6",
  // "color-tertiary-400": "#FFDED6",
  // "color-tertiary-500": "#FFDED6",
  // "color-tertiary-600": "#FFDED6",
  // "color-tertiary-700": "#FFDED6",
  // "color-tertiary-800": "#FFDED6",
  // "color-tertiary-900": "#FFDED6",

  // "color-success-100": "#F0FFF5",
  // "color-success-200": "#CCFCE3",
  // "color-success-300": "#8CFAC7",
  // "color-success-400": "#2CE69B",
  // "color-success-500": "#00D68F",
  // "color-success-600": "#00B887",
  // "color-success-700": "#00997A",
  // "color-success-800": "#007D6C",
  // "color-success-900": "#004A42",

  // "color-info-100": "#F2F8FF",
  // "color-info-200": "#C7E2FF",
  // "color-info-300": "#94CBFF",
  // "color-info-400": "#42AAFF",
  // "color-info-500": "#0095FF",
  // "color-info-600": "#006FD6",
  // "color-info-700": "#0057C2",
  // "color-info-800": "#0041A8",
  // "color-info-900": "#002885",

  // "color-warning-100": "#FFFDF2",
  // "color-warning-200": "#FFF1C2",
  // "color-warning-300": "#FFE59E",
  // "color-warning-400": "#FFC94D",
  // "color-warning-500": "#FFAA00",
  // "color-warning-600": "#DB8B00",
  // "color-warning-700": "#B86E00",
  // "color-warning-800": "#945400",
  // "color-warning-900": "#703C00",

  // "color-danger-100": "#FFF2F2",
  // "color-danger-200": "#FFD6D9",
  // "color-danger-300": "#FFA8B4",
  // "color-danger-400": "#FF708D",
  // "color-danger-500": "#FF3D71",
  // "color-danger-600": "#DB2C66",
  // "color-danger-700": "#B81D5B",
  // "color-danger-800": "#94124E",
  // "color-danger-900": "#700940",

  // "color-basic-default": "$color-basic-700",
  // "color-basic-active": "$color-basic-900",
  // "color-basic-focus": "$color-basic-1000",
  // "color-basic-disabled": "$color-basic-600",

  // "color-primary-default": "$color-primary-500",
  // "color-primary-active": "$color-primary-600",
  // "color-primary-focus": "$color-primary-700",
  // "color-primary-disabled": "$color-primary-200",

  // "color-success-default": "$color-success-500",
  // "color-success-active": "$color-success-600",
  // "color-success-focus": "$color-success-700",
  // "color-success-disabled": "$color-success-200",

  // "color-info-default": "$color-info-500",
  // "color-info-active": "$color-info-600",
  // "color-info-focus": "$color-info-700",
  // "color-info-disabled": "$color-info-300",

  // "color-warning-default": "$color-warning-500",
  // "color-warning-active": "$color-warning-600",
  // "color-warning-focus": "$color-warning-700",
  // "color-warning-disabled": "$color-warning-300",

  // "color-danger-default": "$color-danger-500",
  // "color-danger-active": "$color-danger-600",
  // "color-danger-focus": "$color-danger-700",
  // "color-danger-disabled": "$color-danger-300",

  // "background-basic-color-1": "$color-basic-800",
  // "background-basic-color-2": "$color-basic-900",
  // "background-basic-color-3": "$color-basic-1000",
  // "background-basic-color-4": "$color-basic-1100",

  // "background-alternative-color-1": "$color-basic-100",
  // "background-alternative-color-2": "$color-basic-200",
  // "background-alternative-color-3": "$color-basic-300",
  // "background-alternative-color-4": "$color-basic-400",

  // "background-primary-color-1": "$color-primary-500",
  // "background-primary-color-2": "$color-primary-600",
  // "background-primary-color-3": "$color-primary-700",
  // "background-primary-color-4": "$color-primary-800",

  // "border-basic-color-1": "$color-basic-800",
  // "border-basic-color-2": "$color-basic-900",
  // "border-basic-color-3": "$color-basic-1000",
  // "border-basic-color-4": "$color-basic-1100",
  // "border-basic-color-5": "$color-basic-1100",

  // "border-alternative-color-1": "$color-basic-100",
  // "border-alternative-color-2": "$color-basic-200",
  // "border-alternative-color-3": "$color-basic-3000",
  // "border-alternative-color-4": "$color-basic-400",
  // "border-alternative-color-5": "$color-basic-500",

  // "border-primary-color-1": "$color-primary-500",
  // "border-primary-color-2": "$color-primary-600",
  // "border-primary-color-3": "$color-primary-700",
  // "border-primary-color-4": "$color-primary-800",
  // "border-primary-color-5": "$color-primary-900",

  // "border-success-color-1": "$color-success-500",
  // "border-success-color-2": "$color-success-600",
  // "border-success-color-3": "$color-success-700",
  // "border-success-color-4": "$color-success-800",
  // "border-success-color-5": "$color-success-900",

  // "border-info-color-1": "$color-info-500",
  // "border-info-color-2": "$color-info-600",
  // "border-info-color-3": "$color-info-700",
  // "border-info-color-4": "$color-info-800",
  // "border-info-color-5": "$color-info-900",

  // "border-warning-color-1": "$color-warning-500",
  // "border-warning-color-2": "$color-warning-600",
  // "border-warning-color-3": "$color-warning-700",
  // "border-warning-color-4": "$color-warning-800",
  // "border-warning-color-5": "$color-warning-900",

  // "border-danger-color-1": "$color-danger-500",
  // "border-danger-color-2": "$color-danger-600",
  // "border-danger-color-3": "$color-danger-700",
  // "border-danger-color-4": "$color-danger-800",
  // "border-danger-color-5": "$color-danger-900",

  // "text-basic-color": "$color-basic-100",
  // "text-alternate-color": "$color-basic-900",
  // "text-control-color": "$color-basic-100",
  // "text-disabled-color": "$color-basic-700",
  // "text-hint-color": "$color-basic-600",

  // "text-primary-color": "$color-primary-default",
  // "text-primary-active-color": "$color-primary-active",
  // "text-primary-disabled-color": "$color-primary-disabled",

  // "text-success-color": "$color-success-default",
  // "text-success-active-color": "$color-success-active",
  // "text-success-disabled-color": "$color-success-disabled",

  // "text-info-color": "$color-info-default",
  // "text-info-active-color": "$color-info-active",
  // "text-info-disabled-color": "$color-info-disabled",

  // "text-warning-color": "$color-warning-default",
  // "text-warning-active-color": "$color-warning-active",
  // "text-warning-disabled-color": "$color-warning-disabled",

  // "text-danger-color": "$color-danger-default",
  // "text-danger-active-color": "$color-danger-active",
  // "text-danger-disabled-color": "$color-danger-disabled",

  // "icon-basic-color": "$color-basic-100",
  // "icon-active-color": "$color-basic-400",
  // "icon-control-color": "$color-basic-100",
  // "icon-disabled-color": "$color-basic-700",
  // "icon-hint-color": "$color-basic-600",

  // "outline-color": "$color-basic-700"

  ...THEME_CUSTOMIZATION.dark,
}

export default theme