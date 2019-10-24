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
    TopNavigation: {
      appearances: {
        default: {
          mapping: {
            titleFontSize: 19,
            titleFontWeight: "400",
            subtitleFontSize: 13,
            subtitleFontWeight: "400",
          },
        },
      },
    },
    TopNavigationAction: {
      appearances: {
        default: {
          mapping: {
            iconMarginHorizontal: 16,
          },
        },
      },
    },
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
          mapping: {
            fontSize: 22,
          },
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