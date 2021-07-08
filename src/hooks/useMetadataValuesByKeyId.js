import { useMemo } from "react"

export const useMetadataValuesByKeyId = metadataValues => {

  const metadataValuesByKeyId = useMemo(
    () => {
      const byKeyId = {}
      ;(metadataValues || []).forEach(({ metadata_key_id, value }) => {
        byKeyId[metadata_key_id] = value
      })
      return byKeyId
    },
    [ metadataValues ],
  )

  return metadataValuesByKeyId
}

export default useMetadataValuesByKeyId