import Constants from 'expo-constants'
import deepmerge from 'deepmerge'

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
    },
    {
      component: 'FAB',
      state: 'filled',
    },
    {
      component: 'ToolChip',
      parameters: {
        backgroundColor: 'background-alternative-color-4',
        iconTintColor: 'color-primary-300',
      },
    },
    {
      component: 'AppHeader',
      parameters: {
        backgroundColor: 'background-basic-color-1',
      },
    },
    {
      component: 'GroupedToolsChip',
      parameters: {
        backgroundColor: 'background-alternative-color-4',
        color: 'background-basic-color-1',
      },
    },
    ...MAPPING_CUSTOMIZATION,
  ]),
  
}

export default mapping