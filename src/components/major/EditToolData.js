import React, { useState, useEffect, useCallback } from "react"
import { StyleSheet, View } from "react-native"
// import { i18n } from "inline-i18n"
import { cloneObj } from '../../utils/toolbox'

import Input from "../basic/Input"
import CheckBox from "../basic/CheckBox"

import useInstanceValue from '../../hooks/useInstanceValue'
import useSetTimeout from '../../hooks/useSetTimeout'

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  dataLine: {
    width: 350,
    marginBottom: 10,
  },
  input: {
    paddingLeft: 4,
    paddingRight: 4,
  },
  inputText: {
    outlineWidth: 0,
    color: 'rgb(34, 43, 69)',
  },
  inputLabel: {
    fontSize: 15,
    left: -4,
    position: 'relative',
    marginBottom: 8,
  },
})

const EditToolData = React.memo(({
  toolUidInEdit,
  dataStructure,
  data,
  goUpdateTool,
}) => {

  const [ dataInEdit, setDataInEdit ] = useState({})

  useEffect(
    () => {
      setDataInEdit(data)
    },
    [ toolUidInEdit ],
  )

  const getDataInEdit = useInstanceValue(dataInEdit)
  const [ setToolDataSaveTimeout ] = useSetTimeout()

  const onChangeInfo = useCallback(
    ({ id, text, checked }) => {
      const data = cloneObj(getDataInEdit())

      const dataNameStack = id.split('.').slice(1)
      let dataSegment = data

      while(dataNameStack.length > 1) {
        let structureSegment = dataNameStack.shift()
        let defaultValue = []
  
        if(/^[0-9]+$/.test(structureSegment)) {
          structureSegment = parseInt(structureSegment, 10)
          defaultValue = {}
        }
  
        dataSegment = dataSegment[structureSegment] = (dataSegment[structureSegment] || defaultValue)
      }

      const dataSegmentKey = dataNameStack[0]

      dataSegment[dataSegmentKey] = (
        (text !== undefined && text)
        || (checked !== undefined && checked)
        || undefined
      )

      setDataInEdit(data)
      setToolDataSaveTimeout(
        () => {
          goUpdateTool({ data })
        },
        300,
      )
    },
    [ goUpdateTool ],
  )

  if(!dataStructure || !data) return null

  const getDataStructureSet = ({ dataStructure, dataSegment, dataNameStack=[] }) => (
    <View style={styles.set}>
      {dataStructure.map(({
        name,
        type,
        label,
        placeholder,
      }) => {

        const id = ['tooldata', ...dataNameStack, name].join('.')

        switch(type) {

          case 'string': {
            return (
              <View key={id} style={styles.dataLine}>
                <Input
                  id={id}
                  placeholder={placeholder}
                  label={label}
                  value={dataSegment[name] || ""}
                  onChangeInfo={onChangeInfo}
                />
              </View>
            )
          }

          case 'boolean': {
            return (
              <View key={id} style={styles.dataLine}>
                <CheckBox
                  id={id}
                  // style={styles.checkbox}
                  text={label}
                  checked={!!dataSegment[name]}
                  onChangeInfo={onChangeInfo}
                />
              </View>
            )
          }

          default: {  // should be an array

            if(type instanceof Array) {
              
              // const simpleArray = type.length === 1 && typeof type[0] === 'string'
              // const dataArray = dataSegment[name] || [simpleArray ? "" : {}]

              // const getActionIcons = ({ idx }) => (
              //   <ArrayItemActionsContainer
              //     simpleArray={simpleArray}
              //   >
              //     {!bindNumber &&
              //       <IconButton
              //         data-itemid={`${id}.${idx}`}
              //         onClick={this.onDeleteArrayItem}
              //       >
              //         <Icon>delete</Icon>
              //       </IconButton>
              //     }
              //     {!(hideChildReorderWhen && hideChildReorderWhen({ componentData: this.props.data, childData: dataArray[idx] })) &&
              //       <React.Fragment>
              //         <IconButton
              //           data-itemid={`${id}.${idx}`}
              //           onClick={this.onArrayItemUp}
              //           disabled={idx === 0}
              //         >
              //           <Icon>arrow_upward</Icon>
              //         </IconButton>
              //         <IconButton
              //           data-itemid={`${id}.${idx}`}
              //           onClick={this.onArrayItemDown}
              //           disabled={idx === dataArray.length - 1}
              //         >
              //           <Icon>arrow_downward</Icon>
              //         </IconButton>
              //       </React.Fragment>
              //     }
              //   </ArrayItemActionsContainer>
              // )

              // return (
              //   <ArrayGroup key={id}>
              //     {!!label &&
              //       <ArrayGroupLabel>
              //         {label}
              //       </ArrayGroupLabel>
              //     }
              //     {simpleArray
              //       ? (
              //         dataArray.map((x, idx) => (
              //           <SimpleArrayContainer key={idx}>
              //             {getDataStructureSet({
              //               dataStructure: [{
              //                 name: idx,
              //                 type: type[0],
              //                 placeholder,
              //                 inputVariant,
              //                 inputOptions,
              //               }],
              //               dataSegment: dataArray,
              //               dataNameStack: [ ...dataNameStack, name ],
              //             })}
              //             {getActionIcons({ idx })}
              //           </SimpleArrayContainer>
              //         ))
              //       )
              //       : (
              //         dataArray.map((item, idx) => (
              //           <ComponentSetInArray key={idx}>
              //             {getDataStructureSet({
              //               dataStructure: type,
              //               dataSegment: item,
              //               dataNameStack: [ ...dataNameStack, name, idx ],
              //             })}
              //             {getActionIcons({ idx })}
              //           </ComponentSetInArray>
              //         ))
              //       )
              //     }
              //     {!bindNumber &&
              //       <AddIconContainer>
              //         <IconButton
              //           data-itemid={id}
              //           data-issimple={simpleArray ? `1` : ``}
              //           onClick={this.onAddArrayItem}
              //         >
              //           <Icon>add</Icon>
              //         </IconButton>
              //       </AddIconContainer>
              //     }
              //   </ArrayGroup>
              // )
            }
          }

        }
      })}
    </View>
  )

  return (
    <View style={styles.container}>
      {getDataStructureSet({ dataStructure, dataSegment: dataInEdit })}
    </View>
  )

})

export default EditToolData