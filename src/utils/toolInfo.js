import { i18n } from "inline-i18n"
import { nonEmpty, validUrl, validLTIUrl } from './toolbox'

export const getToolInfo = () => {
  const toolTypes = [
    {
      toolType: 'NOTES_INSERT',
      name: 'lead-pencil',
      pack: 'materialCommunity',
      text: i18n("Notes insert", "", "enhanced"),
      dataStructure: [
        {
          name: 'content',
          type: 'text',
          placeholder: i18n("Enter your notes here.", "", "enhanced"),
        },
      ],
      readyToPublish: ({ data: { content } }) => nonEmpty(content),
    },
    {
      toolType: 'QUIZ',
      name: 'md-checkbox',
      text: i18n("Quiz", "", "enhanced"),
      dataStructure: [
        {
          name: 'questions',
          type: [
            {
              name: 'question',
              type: 'string',
              label: i18n("Question", "", "enhanced"),
            },
            {
              name: 'answers',
              type: ['choice'],
              label: i18n("Answers", "", "enhanced"),
              maxItems: 10,
            },
            {
              name: 'shuffle',
              type: 'boolean',
              label: i18n("Shuffle answers on each attempt", "", "enhanced"),
            },
          ],
          addLabel: i18n("Add a question", "", "enhanced"),
          maxItems: 50,
        },
        {
          name: 'shuffle',
          type: 'boolean',
          label: i18n("Shuffle questions on each attempt", "", "enhanced"),
        },
      ],
      readyToPublish: ({ data: { questions=[] } }) => (
        questions.length > 0
        && questions.every(({ question, answers=[], answersSelection }) => (
          nonEmpty(question)
          && answers.length > 0
          && answers.every(answer => nonEmpty(answer))
          && typeof answersSelection === 'number'
          && answersSelection >= 0
          && answersSelection < answers.length
        ))
      ),
    },
    {
      toolType: 'LTI',
      name: 'wrench',
      pack: 'materialCommunity',
      text: i18n("Learning (LTI) tool", "", "enhanced"),
      dataStructure: [
        {
          name: 'url',
          type: 'string',
          label: i18n("Launch URL", "", "enhanced"),
          isHiddenWithMessage: ({ data, isDefaultClassroom }) => {
            const { fromDefaultClassroom } = data || {}

            return (
              fromDefaultClassroom
              && !isDefaultClassroom
              && i18n("Created by the publisher. You may remove this tool, but you may not edit it.")
            )
          },
        },
      ],
      transformData: ({ data, isDefaultClassroom }) => {
        if(isDefaultClassroom) {
          data.fromDefaultClassroom = true
        }
      },
      readyToPublish: ({ data: { url, fromDefaultClassroom }, classroom }) => (
        validLTIUrl({ url, fromDefaultClassroom, classroom })
      ),
    },
    {
      toolType: 'VIDEO',
      name: 'youtube-play',
      pack: 'fontAwesome',
      text: i18n("Video", "", "enhanced"),
      dataStructure: [
        {
          name: 'videoLink',
          type: 'string',
          label: i18n("YouTube, Vimeo, MP4 or WebM link", "", "enhanced"),
        },
        {
          name: 'startTime',
          type: 'string',
          variant: 'short',
          label: i18n("Start time (optional)", "", "enhanced"),
          placeholder: 'Eg. 3:12',
        },
        {
          name: 'endTime',
          type: 'string',
          variant: 'short',
          label: i18n("End time (optional)", "", "enhanced"),
          placeholder: 'Eg. 12:14',
        },
      ],
      readyToPublish: ({ data: { videoLink } }) => validUrl(videoLink),
    },
    // {
    //   toolType: 'DISCUSSION_QUESTION',
    //   name: 'question-answer',
    //   pack: 'material',
    //   text: i18n("Discussion question", "", "enhanced"),
    //   dataStructure: [
    //     {
    //       name: 'question',
    //       type: 'string',
    //       label: i18n("Question", "", "enhanced"),
    //     },
    //   ],
    // },
    {
      toolType: 'REFLECTION_QUESTION',
      name: 'comment-question',
      pack: 'materialCommunity',
      text: i18n("Reflection question", "", "enhanced"),
      dataStructure: [
        {
          name: 'question',
          type: 'string',
          label: i18n("Question", "", "enhanced"),
        },
      ],
      readyToPublish: ({ data: { question } }) => nonEmpty(question),
    },
    // {
    //   toolType: 'POLL',
    //   name: 'poll',
    //   pack: 'materialCommunity',
    //   text: i18n("Poll question", "", "enhanced"),
    //   dataStructure: [
    //     {
    //       name: 'question',
    //       type: 'string',
    //       label: i18n("Question", "", "enhanced"),
    //     },
    //     {
    //       name: 'choices',
    //       type: ['string'],
    //       label: i18n("Choices", "", "enhanced"),
    //     },
    //   ],
    // },
    // {
    //   toolType: 'DOCUMENT',
    //   name: 'md-document',
    //   text: i18n("Document", "", "enhanced"),
    //   dataStructure: [
    //     {
    //       name: 'filename',
    //       type: 'file',
    //       fileTypes: [
    //         'application/pdf',
    //         'application/msword',
    //         'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    //       ],
    //     },
    //   ],
    // },
    // {
    //   toolType: 'IMAGES',
    //   name: 'md-image',
    //   text: i18n("Images", "", "enhanced"),
    //   dataStructure: [
    //     {
    //       name: 'filenames',
    //       type: 'files',
    //       fileTypes: [
    //         'image/png',
    //         'image/jpeg',
    //         'image/gif',
    //         'image/svg+xml',
    //         'image/webp',
    //       ],
    //     },
    //   ],
    // },
    // {
    //   toolType: 'AUDIO',
    //   name: 'audiotrack',
    //   pack: 'material',
    //   text: i18n("Audio", "", "enhanced"),
    //   dataStructure: [
    //     {
    //       name: 'filename',
    //       type: 'file',
    //       fileTypes: [
    //         'audio/mpeg',
    //       ],
    //     },
    //   ],
    // },
    {
      toolType: 'INSTRUCTOR_HIGHLIGHT',
      name: 'marker',
      pack: 'materialCommunity',
      text: i18n("Instructor’s highlight", "", "enhanced"),
    },
  ]

  const toolInfoByType = {}

  toolTypes.forEach(({ toolType, ...otherParams }) => {
    toolInfoByType[toolType] = otherParams
  })

  return {
    toolTypes: toolTypes.filter(({ toolType }) => toolType !== 'INSTRUCTOR_HIGHLIGHT'),
    toolInfoByType,
  }
}