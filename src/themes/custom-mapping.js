import Constants from 'expo-constants'
import { cloneObj } from '../utils/toolbox'

const {
  MAPPING_CUSTOMIZATION={},
} = Constants.manifest.extra

const getCustomComponentSetup = () => cloneObj({
  meta: {
    parameters: {},
    variantGroups: {},
    states: {},
    appearances: {
      default: {
        default: true,
      },
    },
  },
  appearances: {
    default: {},
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
    HeaderIcon: getCustomComponentSetup(),
  },
  
  // TODO: I need to lay this over top at each level of the object
  // ...MAPPING_CUSTOMIZATION,
}

export default mapping