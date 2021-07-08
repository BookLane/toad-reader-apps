const orderedPolls = [
  {
    name: "Your Opinion",
    question: "What do you think about the argument made in this chapter?",
    choices: [
      "I agree",
      "I disagree",
      "I partially agree",
    ],
    userIdsByChoiceIndex: [
      [1,2,3],
      [4],
      [5,6],
    ],
  },
  {
    name: "Your Experience",
    question: "Have you ever had the experience described above?",
    choices: [
      "Yes",
      "No",
      "I’d rather not say",
    ],
    userIdsByChoiceIndex: [
      [1,2,3],
      [4,5,6],
      [7],
    ],
  },
  {
    name: "Your Response",
    question: "What do you plan to do with this book now that you are done reading it?",
    choices: [
      "Reread it",
      "Give it to a friend",
      "Delete it",
      "Nothing",
    ],
    userIdsByChoiceIndex: [
      [1,2,3,4],
      [5,6],
      [7],
      [8],
    ],
  },
]

const reflectionQuestions = {
  orderedPolls,
  isDummy: true,
}

export default reflectionQuestions