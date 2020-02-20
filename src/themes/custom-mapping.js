import Constants from 'expo-constants'
import deepmerge from 'deepmerge'

import { objectMap } from '../utils/toolbox'

const {
  MAPPING_CUSTOMIZATION={},
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

  addToStates('none')  // It is unclear why this is needed, but it is.
  Object.keys(state || {}).forEach(stateValue => addToStates(stateValue))

  for(let group in variantGroups) {
    for(let groupValue in variantGroups[group]) {

      const { state={}, ...params } = variantGroups[group][groupValue]

      parametersIncludingFromVariantGroups = {
        ...parametersIncludingFromVariantGroups,
        ...params,
      }

      for(let stateValue in state) {
        parametersIncludingFromVariantGroups = {
          ...parametersIncludingFromVariantGroups,
          ...state[stateValue],
        }

        addToStates(stateValue)
      }

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
                opacity: .3,
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
        color: 'text-alternate-color',
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
      component: 'EnhancedHeaderLine',
      variantGroups: {
        status: {
          published: {},
          draft: {
            fontStyle: 'italic',
          },
        },
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
      component: 'BookInfoId',
    },
    ...MAPPING_CUSTOMIZATION,
  ]),
  
}

export default mapping