import Constants from 'expo-constants'

const {
  MAPPING_CUSTOMIZATION={},
} = Constants.manifest.extra

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
    HeaderIcon: {
      meta: {
        parameters: {
          fontSize: {
            type: "number",
          },
        },
        variantGroups: {},
        states: {},
        appearances: {
          default: {
            default: true,
          },
        },
      },
      appearances: {
        default: {
          mapping: {},
        },
      },
    },
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
  },
  
  // TODO: I need to lay this over top at each level of the object
  // ...MAPPING_CUSTOMIZATION,
}

export default mapping