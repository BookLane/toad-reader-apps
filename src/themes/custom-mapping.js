import Constants from 'expo-constants'
import { cloneObj } from '../utils/toolbox'

const {
  MAPPING_CUSTOMIZATION={},
} = Constants.manifest.extra

const getCustomComponentSetup = ({ defaultKey='default' }={}) => cloneObj({
  meta: {
    parameters: {},
    variantGroups: {},
    states: {},
    appearances: {
      [defaultKey]: {
        default: true,
      },
    },
  },
  appearances: {
    [defaultKey]: {},
  },
})

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
  
  components: {
    Layout: {
      meta: {
        parameters: {
          flex: {
            type: "number",
          },
        },
      },
      appearances: {
        default: {
          mapping: {
            flex: 1,
          },
        },
      },
    },
    OverflowMenu: {
      meta: {
        parameters: {
          borderWidth: {
            type: "number",
          },
          borderColor: {
            type: "string",
          },
        },
      },
      appearances: {
        default: {
          mapping: {
            borderWidth: 1,
            borderColor: "border-basic-color-3",
            borderRadius: 0,
          },
        },
      },
    },
    HeaderIcon: getCustomComponentSetup(),
    FAB: getCustomComponentSetup({ defaultKey: 'filled' }),
    ToolChip: {
      meta: {
        parameters: {
          backgroundColor: {
            type: "string",
          },
          iconTintColor: {
            type: "string",
          },
        },
        variantGroups: {},
        states: {},
        appearances: {
          filled: {
            default: true,
          },
        },
      },
      appearances: {
        filled: {
          mapping: {
            backgroundColor: 'background-alternative-color-4',
            iconTintColor: 'color-primary-300',
          },
        },
      },
    },
    AppHeader: {
      meta: {
        parameters: {
          backgroundColor: {
            type: "string",
          },
        },
        variantGroups: {},
        states: {},
        appearances: {
          filled: {
            default: true,
          },
        },
      },
      appearances: {
        filled: {
          mapping: {
            backgroundColor: 'background-basic-color-1',
          },
        },
      },
    },
    GroupedToolsChip: {
      meta: {
        parameters: {
          backgroundColor: {
            type: "string",
          },
          color: {
            type: "string",
          },
        },
        variantGroups: {},
        states: {},
        appearances: {
          filled: {
            default: true,
          },
        },
      },
      appearances: {
        filled: {
          mapping: {
            backgroundColor: 'background-alternative-color-4',
            color: 'background-basic-color-1',
          },
        },
      },
    },
  },
  
  // TODO: I need to lay this over top at each level of the object
  // ...MAPPING_CUSTOMIZATION,
}

export default mapping