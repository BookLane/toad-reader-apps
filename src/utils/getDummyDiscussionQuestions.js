import { i18n } from "inline-i18n"

const getDummyDiscussionQuestions = () => ({
  orderedQuestions: [
    {
      uid: "dummy1",
      title: i18n("Example Discussion Question 1", "", "enhanced"),
      question: i18n("This classroom does not yet contain any discussion questions. Once you add one, this is where the question will appear.", "", "enhanced"),
    },
    {
      uid: "dummy2",
      title: i18n("Example Discussion Question 2", "", "enhanced"),
      question: i18n("You can monitor up to three discussions at a time.", "", "enhanced"),
    },
  ],
  responses: {
    "dummy1": [
      {
        uid: "aaa",
        text: i18n("Students are able to respond to discussion questions in a live chat with one other. If they are using the app, they will receive notifications whenever a classmate adds a comment.", "", "enhanced"),
        user_id: 1,
        fullname: "Charlie Brooks",
        submitted_at: Date.now() - 1000 * 60 * 60 * 24 * 2,
      },
      {
        uid: "bbb",
        text: i18n("As an instructor, you can monitor up to three discussions at once from your dashboard. Of course, you can also contribute to the discussions whenever you like.", "", "enhanced"),
        user_id: 2,
        fullname: "Tim Smith",
        submitted_at: Date.now() - 1000 * 60 * 5,
      },
    ],
    "dummy2": [
      {
        uid: "ccc",
        text: i18n("Discussion questions add a great interactive dynamic to your students’ learning experience.", "", "enhanced"),
        user_id: 1,
        fullname: "Charlie Brooks",
        submitted_at: Date.now() - 1000 * 60 * 1,
      },
    ],
  },
  isDummy: true,
})

export default getDummyDiscussionQuestions