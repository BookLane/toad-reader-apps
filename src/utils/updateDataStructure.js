import { AsyncStorage } from "react-native"

// When a data structure change requires conversion to existing data, add on the update function here.
// IMPORTANT: Never remove an update function which has been made live. If it turns out to be buggy,
// instead add a new update function to reverse it.
const dataStructureUpdateFunctions = [
  // async () => {
  //   // Add a data structure update in here
  //   console.log("This is what this data structure update does...")
  //   // IMPORTANT: never remove a data update function like this that has previous gone live!!
  // },
  // async () => {
  //   // Add a data structure update in here
  //   console.log("This is what this data structure update does...")
  //   // IMPORTANT: never remove a data update function like this that has previous gone live!!
  // },
  // async () => {
  //   // Add a data structure update in here
  //   console.log("This is what this data structure update does...")
  //   // IMPORTANT: never remove a data update function like this that has previous gone live!!
  // },
  // async () => {
  //   // Add a data structure update in here
  //   console.log("This is what this data structure update does...")
  //   // IMPORTANT: never remove a data update function like this that has previous gone live!!
  // },
]

const updateDataStructure = async () => {

  console.log(`Check data structure...`)
  
  const currentDataStructureVersionIndex = parseInt(await AsyncStorage.getItem('dataStructureVersionIndex'), 10) || 0

  for(let i = currentDataStructureVersionIndex; i < dataStructureUpdateFunctions.length; i++) {
    console.log(`Executing data structure update ${i+1}...`)
    await dataStructureUpdateFunctions[i]()
    await AsyncStorage.setItem('dataStructureVersionIndex', `${i+1}`)
    console.log(`Data structure update ${i+1} executed successfully.`)
  }

  console.log(`Data structure up-to-date (${dataStructureUpdateFunctions.length} updates to date).`)

}    
        
export default updateDataStructure