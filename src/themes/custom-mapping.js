import Constants from 'expo-constants'
import { objectMap } from '../utils/toolbox'

const {
  MAPPING_CUSTOMIZATION={},
} = Constants.manifest.extra

const getComponentSetup = ({ parameters={}, state="default", isCustom=true }={}) => ({
  meta: {
    parameters: objectMap(parameters, val => ({
      type: typeof val,
    })),
    ...(!isCustom ? {} : {
      variantGroups: {},
      states: {},
      appearances: {
        [state]: {
          default: true,
        },
      },  
    }),
  },
  appearances: {
    [state]: {
      mapping: parameters,
    },
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
    Layout: getComponentSetup({
      parameters: {
        flex: 1,
      },
      isCustom: false,
    }),
    OverflowMenu: getComponentSetup({
      parameters: {
        borderWidth: 1,
        borderColor: "border-basic-color-3",
        borderRadius: 0,
      },
      isCustom: false,
    }),
    HeaderIcon: getComponentSetup(),
    FAB: getComponentSetup({ state: 'filled' }),
    ToolChip: getComponentSetup({
      parameters: {
        backgroundColor: 'background-alternative-color-4',
        iconTintColor: 'color-primary-300',
      },
    }),
    AppHeader: getComponentSetup({
      parameters: {
        backgroundColor: 'background-basic-color-1',
      },
    }),
    GroupedToolsChip: getComponentSetup({
      parameters: {
        backgroundColor: 'background-alternative-color-4',
        color: 'background-basic-color-1',
      },
    }),
  },
  
  // TODO: I need to lay this over top at each level of the object
  // ...MAPPING_CUSTOMIZATION,
}

export default mapping