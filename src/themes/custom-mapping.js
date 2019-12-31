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
            borderColor: "rgb(237, 241, 247)",
            borderRadius: 8,
          },
        },
      },
    },
    HeaderIcon: getCustomComponentSetup(),
    FAB: getCustomComponentSetup({ defaultKey: 'filled' }),
    ToolChip: getCustomComponentSetup({ defaultKey: 'filled' }),
  },
  
  // TODO: I need to lay this over top at each level of the object
  // ...MAPPING_CUSTOMIZATION,
}

export default mapping