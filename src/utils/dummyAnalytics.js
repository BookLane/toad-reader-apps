import { getDateLine, getTimeLine } from "./toolbox"

const now = Date.now()
const oneDay = 1000 * 60 * 60 * 24

const readingBySpine = [
  {
    spine: 'Introduction',
    minutes: 52,
  },
  {
    spine: 'Chapter 1',
    minutes: 521,
  },
  {
    spine: 'Chapter 2',
    minutes: 431,
  },
  {
    spine: 'Chapter 3',
    minutes: 732,
  },
  {
    spine: 'Chapter 4',
    minutes: 682,
  },
  {
    spine: 'Chapter 5',
    minutes: 332,
  },
  {
    spine: 'Chapter 6',
    minutes: 882,
  },
  {
    spine: 'Appendix I',
    minutes: 12,
  },
  {
    spine: 'Appendix II',
    minutes: 22,
  },
]

const readingOverTime = {
  totals: [120, 35, 187, 23, 21, 189, 304, 354, 293, 289, 52, 71, 289, 204, 254, 273, 105, 42, 7, 95, 138, 321],
  numReaders: [2, 5, 4, 1, 2, 8, 4, 5, 7, 8, 2, 7, 8, 4, 5, 7, 5, 2, 1, 5, 3, 3],
  startTime: now - 21 * oneDay,
}

const readingScheduleStatuses = [
  {
    dueAtText: `${getDateLine({ timestamp: now - 19 * oneDay, short: true })}\n${getTimeLine({ timestamp: now - 19 * oneDay, short: true })}`,
    ontime: 7,
    late: 1,
  },
  {
    dueAtText: `${getDateLine({ timestamp: now - 15 * oneDay, short: true })}\n${getTimeLine({ timestamp: now - 15 * oneDay, short: true })}`,
    ontime: 6,
    late: 2,
  },
  {
    dueAtText: `${getDateLine({ timestamp: now - 12 * oneDay, short: true })}\n${getTimeLine({ timestamp: now - 12 * oneDay, short: true })}`,
    ontime: 6,
    late: 1,
  },
  {
    dueAtText: `${getDateLine({ timestamp: now - 8 * oneDay, short: true })}\n${getTimeLine({ timestamp: now - 8 * oneDay, short: true })}`,
    ontime: 4,
    late: 3,
  },
  {
    dueAtText: `${getDateLine({ timestamp: now - 5 * oneDay, short: true })}\n${getTimeLine({ timestamp: now - 5 * oneDay, short: true })}`,
    ontime: 5,
    late: 2,
  },
  {
    dueAtText: `${getDateLine({ timestamp: now - 1 * oneDay, short: true })}\n${getTimeLine({ timestamp: now - 1 * oneDay, short: true })}`,
    ontime: 5,
    late: 1,
  },
  {
    dueAtText: `${getDateLine({ timestamp: now + 2 * oneDay, short: true })}\n${getTimeLine({ timestamp: now + 2 * oneDay, short: true })}`,
    ontime: 2,
    late: 0,
  },
  {
    dueAtText: `${getDateLine({ timestamp: now + 6 * oneDay, short: true })}\n${getTimeLine({ timestamp: now + 6 * oneDay, short: true })}`,
    ontime: 0,
    late: 0,
  },
]

const completionsByQuiz = [
  {
    name: "Quiz: Chapter 1",
    completions: 8,
  },
  {
    name: "Quiz: Chapter 2",
    completions: 7,
  },
  {
    name: "Quiz: Chapter 3",
    completions: 7,
  },
  {
    name: "Quiz: Chapter 4",
    completions: 6,
  },
  {
    name: "Quiz: Chapter 5",
    completions: 2,
  },
  {
    name: "Quiz: Chapter 6",
    completions: 0,
  },
]

const averageScoresByQuiz = [
  {
    name: "Quiz: Chapter 1",
    avgFirstScore: .85,
    avgBestScore: .92,
  },
  {
    name: "Quiz: Chapter 2",
    avgFirstScore: .95,
    avgBestScore: 1,
  },
  {
    name: "Quiz: Chapter 3",
    avgFirstScore: .58,
    avgBestScore: .91,
  },
  {
    name: "Quiz: Chapter 4",
    avgFirstScore: .34,
    avgBestScore: .87,
  },
  {
    name: "Quiz: Chapter 5",
    avgFirstScore: .88,
    avgBestScore: .91,
  },
  {
    name: "Quiz: Chapter 6",
    avgFirstScore: .0,
    avgBestScore: .0,
  },
]

const analytics = {
  readingBySpine,
  readingOverTime,
  readingScheduleStatuses,
  completionsByQuiz,
  averageScoresByQuiz,
  isDummy: true,
}

export default analytics