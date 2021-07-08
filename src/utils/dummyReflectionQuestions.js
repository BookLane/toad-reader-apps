const orderedQuestions = [
  {
    uid: "aaa",
    title: "Chapter 1 Reflection",
    question: "What was the most impactful point made in this chapter?",
  },
  {
    uid: "bbb",
    title: "Chapter 2 Reflection",
    question: "Summarize this chapter in 1-2 sentences?",
  },
  {
    uid: "ccc",
    title: "Chapter 3 Reflection",
    question: "Based on what has been presented so far, how do you think the author will answer the big question?",
  },
  {
    uid: "ddd",
    title: "Chapter 4 Reflection",
    question: "What is a point in this chapter that you disagree with?",
  },
  {
    uid: "eee",
    title: "Chapter 5 Reflection",
    question: "How would you compare the arguments made in this chapter to other books you have read?",
  },
  {
    uid: "fff",
    title: "Chapter 6 Reflection",
    question: "How have the author’s conclusions changed the way you think?",
  },
]

const answers = {
  "aaa": {
    "1": "The point made about not assuming the status quo thinking to be correct.",
    "3": "While I disagree with it, I found the author’s first point most thought-provoking.",
    "8": "The three principles that the author laid out for weighing an argument.",
  },
  "bbb": {
    "1": "Change cannot happen in a society apart from courage.",
    "4": "A civil society requies struggle to maintain its freedom.",
  },
  "ccc": {
    "4": "I think the author with argue that the Bible ought to be the first foundation or ordering a society.",
  },
}

const reflectionQuestions = {
  orderedQuestions,
  answers,
  isDummy: true,
}

export default reflectionQuestions