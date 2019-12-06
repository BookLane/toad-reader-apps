import { i18n } from "inline-i18n"

export const getToolInfo = () => {
  const toolTypes = [
    // {
    //   toolType: 'NOTES_INSERT',
    //   name: 'lead-pencil',
    //   pack: 'materialCommunity',
    //   text: i18n("Notes insert"),
    //   dataStructure: [
    //     {
    //       name: 'content',
    //       type: 'flip',
    //     },
    //   ],
    // },
    // {
    //   toolType: 'QUIZ',
    //   name: 'md-checkbox',
    //   text: i18n("Quiz"),
    //   dataStructure: [
    //     {
    //       name: 'questions',
    //       type: [
    //         {
    //           name: 'question',
    //           type: 'string',
    //           label: i18n("Question"),
    //         },
    //         {
    //           name: 'choices',
    //           type: [
    //             {
    //               name: 'choice',
    //               type: 'string',
    //               label: i18n("Choice"),
    //             },
    //             {
    //               name: 'isRightAnswer',
    //               type: 'boolean',
    //               label: i18n("This is a correct answer"),
    //             },
    //           ],
    //           label: i18n("Choices"),
    //         },
    //         {
    //           name: 'shuffle',
    //           type: 'boolean',
    //           label: i18n("Shuffle answers on each attempt"),
    //         },
    //       ],
    //     },
    //     {
    //       name: 'shuffle',
    //       type: 'boolean',
    //       label: i18n("Shuffle questions on each attempt"),
    //     },
    //   ],
    // },
    {
      toolType: 'LTI',
      name: 'wrench',
      pack: 'materialCommunity',
      text: i18n("Learning (LTI) tool"),
      dataStructure: [
        {
          name: 'url',
          type: 'string',
          label: i18n("URL"),
        },
        {
          name: 'secret',
          type: 'string',
          label: i18n("Secret"),
        },
        {
          name: 'key',
          type: 'string',
          label: i18n("Key"),
        },
      ],
    },
    {
      toolType: 'VIDEO',
      name: 'youtube-play',
      pack: 'fontAwesome',
      text: i18n("Video"),
      dataStructure: [
        {
          name: 'videoLink',
          type: 'string',
          label: i18n("YouTube, Vimeo, MP4 or WebM link"),
        },
        {
          name: 'startTime',
          type: 'string',
          variant: 'short',
          label: i18n("Start time (optional)"),
          placeholder: 'Eg. 3:12',
        },
        {
          name: 'endTime',
          type: 'string',
          variant: 'short',
          label: i18n("End time (optional)"),
          placeholder: 'Eg. 12:14',
        },
      ],
    },
    // {
    //   toolType: 'DISCUSSION_QUESTION',
    //   name: 'question-answer',
    //   pack: 'material',
    //   text: i18n("Discussion question"),
    //   dataStructure: [
    //     {
    //       name: 'question',
    //       type: 'string',
    //       label: i18n("Question"),
    //     },
    //   ],
    // },
    {
      toolType: 'REFLECTION_QUESTION',
      name: 'comment-question',
      pack: 'materialCommunity',
      text: i18n("Reflection question"),
      dataStructure: [
        {
          name: 'question',
          type: 'string',
          label: i18n("Question"),
        },
      ],
    },
    // {
    //   toolType: 'POLL',
    //   name: 'poll',
    //   pack: 'materialCommunity',
    //   text: i18n("Poll question"),
    //   dataStructure: [
    //     {
    //       name: 'questions',
    //       type: [
    //         {
    //           name: 'question',
    //           type: 'string',
    //           label: i18n("Question"),
    //         },
    //         {
    //           name: 'choices',
    //           type: ['string'],
    //           label: i18n("Choices"),
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   toolType: 'DOCUMENT',
    //   name: 'md-document',
    //   text: i18n("Document"),
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
    //   text: i18n("Images"),
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
    //   text: i18n("Audio"),
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
  ]

  const toolInfoByType = {}

  toolTypes.forEach(({ toolType, ...otherParams }) => {
    toolInfoByType[toolType] = otherParams
  })

  return {
    toolTypes,
    toolInfoByType,
  }
}