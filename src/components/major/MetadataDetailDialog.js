import React, { useState, useCallback, useMemo } from "react"
import { StyleSheet, View, Text } from "react-native"
import { i18n } from "inline-i18n"
import { RadioGroup, Radio } from "@ui-kitten/components"

import useInstanceValue from "../../hooks/useInstanceValue"

import Dialog from "./Dialog"
import Input from "../basic/Input"

const styles = StyleSheet.create({
  expl:  {
    marginBottom: 15,
  },
  error:  {
    marginBottom: 15,
    color: 'red',
  },
  typeLabel: {
    color: 'rgb(143, 155, 179)',
    fontSize: 15,
    marginTop: 15,
    marginBottom: 8,
  },
  optionInput: {
    marginLeft: 30,
  },
})

const MetadataDetailDialog = ({
  open,
  editIndex,
  metadataKeyData,
  updateMetadataKey,
  onClose,
}) => {

  const [ editedMetadataKeyData, setEditedMetadataKeyData ] = useState(metadataKeyData || {})
  const [ typeIndex, setTypeIndex ] = useState((metadataKeyData || {}).options ? 1 : 0)

  const getEditedMetadataKeyData = useInstanceValue(editedMetadataKeyData)
  const getTypeIndex = useInstanceValue(typeIndex)

  const updateName = useCallback(
    name => {
      setEditedMetadataKeyData({
        ...getEditedMetadataKeyData(),
        name,
      })
    },
    [],
  )

  const updateOption = useCallback(
    ({ idx, text }) => {
      const editedMetadataKeyData = getEditedMetadataKeyData()
      const options = [ ...(editedMetadataKeyData.options || []) ]
      options[idx] = text
      setEditedMetadataKeyData({
        ...editedMetadataKeyData,
        options,
      })
    },
    [],
  )

  const onConfirm = useCallback(
    async () => {
      // TODO: name cannot be blank
      // TODO: options cannot be blank
      const metadataKeyData = getEditedMetadataKeyData()
      if(getTypeIndex() === 0) {
        delete metadataKeyData.options
      } else {
        // dedup options, no blanks
        metadataKeyData.options = [ ...new Set((metadataKeyData.options || []).map(option => option.trim()).filter(Boolean)) ]
      }
      updateMetadataKey({
        editIndex,
        metadataKeyData,
      })
      onClose()
    },
    [ updateMetadataKey, onClose, editIndex ],
  )

  const { name="", options } = editedMetadataKeyData

  const optionsWithAddlEmpty = useMemo(
    () => ([
      ...(options || []),
      ...((options || []).slice(-1) ? [""] : []),
    ]),
    [ options ]
  )

  const disabledConfirm = !(
    name.trim()
    && (
      typeIndex === 0
      || [ ...new Set(optionsWithAddlEmpty.filter(option => option.trim())) ].length > 0
    ) 
  )

  return (

    <Dialog
      open={open}
      title={i18n("Edit metadata key details")}
      onCancel={onClose}
      onConfirm={onConfirm}
      confirmButtonText={metadataKeyData ? i18n("Update") : i18n("Add")}
      confirmButtonDisabled={disabledConfirm}
      type={"confirm"}
      message={
        <View style={styles.container}>

          <Input
            label={i18n("Metadata key name")}
            placeholder={i18n("Eg. Description, Genre")}
            value={name}
            onChangeText={updateName}
            style={styles.nameInput}
          />

          <Text style={styles.typeLabel}>
            {i18n("Metadata key type")}
          </Text>

          <RadioGroup
            style={styles.radioGroup}
            selectedIndex={typeIndex}
            onChange={setTypeIndex}
          >
            <Radio
              style={styles.radio}
            >
              {i18n("Free form text")}
            </Radio>
            <Radio
              style={styles.radio}
            >
              {i18n("Predefined list")}
            </Radio>
          </RadioGroup>

          {typeIndex === 1 && optionsWithAddlEmpty.map((option, idx) => (
            <View key={idx} style={styles.line}>
              <Input
                placeholder={i18n("List option")}
                value={option}
                onChangeText={text => updateOption({ idx, text })}
                style={styles.optionInput}
              />
            </View>
          ))}

        </View>
      }
    />
  )
}

export default MetadataDetailDialog
