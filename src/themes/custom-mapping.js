import Constants from 'expo-constants'
import deepmerge from 'deepmerge'

import { objectMap } from '../utils/toolbox'

const {
  MAPPING_CUSTOMIZATION=[],
} = Constants.manifest.extra

const getComponentSetup = ({ parameters={}, appearance="default", variantGroups={}, isCustom=true }={}) => {

  let { state, ...parametersIncludingFromVariantGroups } = parameters
  const states = {}

  const addToStates = stateValue => {
    if(!states[stateValue]) {
      states[stateValue] = {
        default: false,
        priority: Object.keys(states).length,
        scope: 'all',
      }
    }
  }

  const addToParametersAndStates = state => {
    for(let stateValue in state) {
      parametersIncludingFromVariantGroups = {
        ...parametersIncludingFromVariantGroups,
        ...state[stateValue],
      }

      addToStates(stateValue)
    }
  }

  addToStates('none')  // It is unclear why this is needed, but it is.
  addToParametersAndStates(state)

  for(let group in variantGroups) {
    for(let groupValue in variantGroups[group]) {

      const { state={}, ...params } = variantGroups[group][groupValue]

      parametersIncludingFromVariantGroups = {
        ...parametersIncludingFromVariantGroups,
        ...params,
      }

      addToParametersAndStates(state)
    }
  }

  return {
    meta: {
      parameters: objectMap(parametersIncludingFromVariantGroups, val => ({
        type: typeof val,
      })),
      ...(!isCustom ? {} : {
        variantGroups: objectMap(variantGroups, group => (
          objectMap(group, (val, key, index) => ({
            default: false,
          }))
        )),
        states,
        appearances: {
          [appearance]: {
            default: appearance === 'default',
          },
        },  
      }),
    },
    appearances: {
      [appearance]: {
        mapping: parameters,
        variantGroups,
      },
    },
  }
}

const getComponentMapping = componentInfos => (
  deepmerge.all(
    componentInfos.map(({ component, ...info }) => ({
      [component]: getComponentSetup(info),
    }))
  )
)

const mapping = {

  // See https://github.com/eva-design/eva/blob/master/packages/eva/mapping.json  

  // Eg.
  // components: {
  //   TopNavigation: {
  //     appearances: {
  //       default: {
  //         mapping: {
  //           titleLineHeight: 150,
  //         },
  //       },
  //     },
  //   },
  // },
  
  components: getComponentMapping([
    {
      component: 'Input',
      variantGroups: {
        status: {
          basic: {
            labelMarginBottom: 8,
            labelFontSize: 15,
            labelFontWeight: 'normal',
          },
        },
      },
      isCustom: false,
    },
    {
      component: 'Select',
      variantGroups: {
        status: {
          basic: {
            labelMarginBottom: 8,
            labelFontSize: 15,
            labelFontWeight: 'normal',
          },
        },
      },
      isCustom: false,
    },
    {
      component: 'Datepicker',
      variantGroups: {
        status: {
          basic: {
            labelMarginBottom: 8,
            labelFontSize: 15,
            labelFontWeight: 'normal',
            iconWidth: 22,
            iconHeight: 22,
            textColor: 'black',
          },
        },
      },
      isCustom: false,
    },
    {
      component: 'Layout',
      parameters: {
        flex: 1,
      },
      isCustom: false,
    },
    {
      component: 'OverflowMenu',
      parameters: {
        borderWidth: 1,
        borderColor: "border-basic-color-3",
        borderRadius: 0,
      },
      isCustom: false,
    },
    {
      component: 'HeaderIcon',
      variantGroups: {
        uiStatus: {
          faded: {
            iconTintColor: "color-basic-600",
            state: {
              hover: {
                iconTintColor: "color-basic-1100",
              },
            },
          },
          disabled: {
            iconTintColor: "color-basic-500",
          },
          error: {
            iconTintColor: "color-danger-600",
            state: {
              hover: {
                iconTintColor: "color-danger-800",
              },
            },
          },
          offline: {
            iconTintColor: "color-warning-400",
            state: {
              hover: {
                iconTintColor: "color-warning-600",
              },
            },
          },
        },
      },
    },
    {
      component: 'FAB',
    },
    {
      component: 'ToolChip',
      parameters: {
        backgroundColor: 'background-alternative-color-4',
        iconTintColor: 'color-primary-300',
        labelColor: 'text-alternate-color',
      },
      variantGroups: {
        status: {
          published: {},
          draft: {
            labelFontStyle: 'italic',
          },
        },
        type: {
          button: {
            state: {
              hover: {
                backgroundColor: 'color-primary-500',
              },
            },
          },
        },
      },
    },
    {
      component: 'AppHeader',
      parameters: {
        backgroundColor: 'background-basic-color-1',
      },
      variantGroups: {
        uiStatus: {
          faded: {
            labelColor: "color-basic-600",
            labelFontWeight: '200',
          },
        }
      },
    },
    {
      component: 'GroupedToolsChip',
      parameters: {
        backgroundColor: 'background-alternative-color-4',
        labelColor: 'text-alternate-color',
        alt0BackgroundColor: 'color-primary-transparent-400',
        alt1Color: 'color-basic-1100',
        state: {
          hover: {
            backgroundColor: 'color-primary-500',
            borderColor: 'color-primary-500',
          },
        },
      },
      variantGroups: {
        status: {
          published: {},
          draft: {
            fontStyle: 'italic',
          },
        },
      },
    },
    {
      component: 'ActionText',
      parameters: {
        state: {
          hover: {
            color: 'color-primary-active',
            textDecorationLine: 'underline',
          },
        },
      },
    },
    {
      component: 'ToolFlipperButton',
      parameters: {
        iconTintColor: '#888',
        state: {
          hover: {
            backgroundColor: '#dbdbdb',
            iconTintColor: '#444',
          },
        },
      },
    },
    {
      component: 'BookContentsLine',
      variantGroups: {
        uiStatus: {
          unselected: {
            state: {
              hover: {
                backgroundColor: 'color-primary-transparent-hover',
              },
            },
          },
          selected: {
            backgroundColor: 'color-primary-transparent-active',
          },
        },
      },
    },
    {
      component: 'EnhancedHeader',
      parameters: {
        backgroundColor: 'rgb(211, 218, 230)',
        alt0BackgroundColor: 'rgb(224, 231, 241)',
      },
    },
    {
      component: 'EnhancedHeaderLine',
      variantGroups: {
        status: {
          published: {},
          draft: {
            fontStyle: 'italic',
          },
        },
        uiStatus: {
          frontMatterUnselected: {
            state: {
              hover: {
                backgroundColor: 'color-primary-transparent-hover',
              },
            },
          },
          unselected: {
            state: {
              hover: {
                backgroundColor: 'color-primary-transparent-hover',
              },
            },
          },
          selected: {
            backgroundColor: 'color-primary-transparent-active',
          },
          disabled: {

          },
        },
      },
    },
    {
      component: 'EnhancedEditButton',
      variantGroups: {
        status: {
          on: {
            backgroundColor: 'color-basic-transparent-500',
            iconTintColor: 'color-primary-500',
            state: {
              hover: {
                backgroundColor: 'color-basic-transparent-300',
              },
            },
          },
          off: {
            iconTintColor: "color-basic-600",
            state: {
              hover: {
                backgroundColor: 'color-basic-transparent-300',
              },
            },
          },
        },
      },
    },
    {
      component: 'InstructorsHighlightLabel',
      parameters: {
        iconTintColor: 'color-warning-400',
      },
    },
    {
      component: 'BookInfoAuthor',
    },
    {
      component: 'BookInfoTrial',
      parameters: {
        color: 'color-warning-active',
      },
    },
    {
      component: 'BookInfoMetadata',
    },
    {
      component: 'BookInfoSize',
    },
    {
      component: 'BookInfoId',
    },
    {
      component: 'MetadataFilterChip',
      parameters: {
        backgroundColor: 'color-primary-500',
        state: {
          hover: {
            backgroundColor: 'color-primary-300',
          },
        },
      },
    },
    {
      component: 'LinkLikeText',
      parameters: {
        color: 'color-primary-500',  // linkThemedStyle
        state: {
          hover: {
            color: 'color-primary-300',
          },
        },
      },
    },
    ...MAPPING_CUSTOMIZATION,
  ]),
  
}

export default mapping