import { i18n } from "inline-i18n"
import { nonEmpty, validUrl, validLTIUrl } from './toolbox'
import { youtubeRegex, shortYoutubeRegex } from '../components/major/VideoTool'

const hasErrorWithMessageForTime = time => (
  nonEmpty(time)
  && !/^(?:[0-9]+)(?::[0-9]+)$/.test(time)
  && i18n("Invalid time.", "", "enhanced")
)

const videoStartEndTimesAreHidden = ({ dataSegment: { videoLink='' } }) => !(
  youtubeRegex.test(videoLink)
  || shortYoutubeRegex.test(videoLink)
)

export const getToolInfo = () => {
  const toolTypes = [
    {
      toolType: 'NOTES_INSERT',
      icon: {
        name: 'lead-pencil',
        pack: 'materialCommunity',
      },
      text: i18n("Notes insert", "", "enhanced"),
      dataStructure: [
        {
          name: 'content',
          type: 'text',
          placeholder: i18n("Enter your notes here.", "", "enhanced"),
          required: true,
        },
      ],
      readyToPublish: ({ data: { content } }) => nonEmpty(content),
    },
    {
      toolType: 'QUIZ',
      icon: {
        name: 'md-checkbox',
      },
      text: i18n("Quiz", "", "enhanced"),
      dataStructure: [
        {
          name: 'questions',
          type: [
            {
              name: 'question',
              type: 'string',
              label: i18n("Question", "", "enhanced"),
              required: true,
            },
            {
              name: 'answers',
              type: ['choice'],
              label: i18n("Answers", "", "enhanced"),
              required: true,
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
      icon: {
        name: 'wrench',
        pack: 'materialCommunity',
      },
      text: i18n("Learning (LTI) tool", "", "enhanced"),
      dataStructure: [
        {
          name: 'url',
          type: 'string',
          label: i18n("Launch URL", "", "enhanced"),
          placeholder: i18n("Eg. {{example}}", "", "enhanced", { example: "https://www.some-lti-tool-provider.com/tools/123" }),
          isHiddenWithMessage: ({ data, isDefaultClassroom }) => {
            const { fromDefaultClassroom } = data || {}

            return (
              fromDefaultClassroom
              && !isDefaultClassroom
              && i18n("Created by the publisher. You may remove this tool, but you may not edit it.", "", "enhanced")
            )
          },
          required: true,
          hasErrorWithMessage: ({ data: { url, fromDefaultClassroom }, classroom }) => (
            nonEmpty(url)
            && (
              !validUrl(url)
                ? (
                  i18n("Invalid URL. (Note: https required.)", "", "enhanced")
                )
                : (
                  !validLTIUrl({ url, fromDefaultClassroom, classroom })
                    ? i18n("There is not a published LTI configuration for this domain.", "", "enhanced")
                    : false
                )
            )
          ),
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
      icon: {
        name: 'youtube-play',
        pack: 'fontAwesome',
      },
      text: i18n("Video", "", "enhanced"),
      dataStructure: [
        {
          name: 'videoLink',
          type: 'string',
          label: i18n("YouTube, Vimeo, MP4 or WebM link", "", "enhanced"),
          placeholder: i18n("Eg. {{example}}", "", "enhanced", { example: "https://www.youtube.com/watch?v=Y80wHFoYrrQ" }),
          required: true,
          hasErrorWithMessage: ({ data: { videoLink } }) => (
            nonEmpty(videoLink)
            && (
              !validUrl(videoLink)
                ? i18n("Invalid URL. (Note: https required.)", "", "enhanced")
                : false
            )
          ),
        },
        {
          name: 'startTime',
          type: 'string',
          variant: 'short',
          label: i18n("Start time (optional)", "", "enhanced"),
          placeholder: i18n("Eg. {{example}}", "", "enhanced", { example: "3:12" }),
          hasErrorWithMessage: ({ data: { startTime } }) => hasErrorWithMessageForTime(startTime),
          isHidden: videoStartEndTimesAreHidden,
        },
        {
          name: 'endTime',
          type: 'string',
          variant: 'short',
          label: i18n("End time (optional)", "", "enhanced"),
          placeholder: i18n("Eg. {{example}}", "", "enhanced", { example: "12:14" }),
          hasErrorWithMessage: ({ data: { endTime } }) => hasErrorWithMessageForTime(endTime),
          isHidden: videoStartEndTimesAreHidden,
        },
      ],
      readyToPublish: ({ data: { videoLink, startTime, endTime } }) => (
        validUrl(videoLink)
        && !hasErrorWithMessageForTime(startTime)
        && !hasErrorWithMessageForTime(endTime)
      ),
    },
    {
      toolType: 'QUESTION',
      icon: ({ isDiscussion }={}) => ({
        name: isDiscussion ? 'question-answer' : 'comment-question',
        pack: isDiscussion ? 'material' : 'materialCommunity',
      }),
      text: i18n("Question", "", "enhanced"),
      dataStructure: [
        {
          name: 'question',
          type: 'string',
          label: ({ dataSegment }) => (
            dataSegment.isDiscussion
              ? i18n("Discussion question", "", "enhanced")
              : i18n("Reflection question", "", "enhanced")
          ),
          required: true,
        },
        {
          name: 'isDiscussion',
          type: 'boolean',
          label: i18n("Classroom discussion style", "", "enhanced"),
          isHiddenWithMessage: ({ isDefaultClassroom }) => (
            isDefaultClassroom
            && i18n("Classrooms will also have the option of turning this reflection question into a discussion.", "", "enhanced")
          ),
        },
      ],
      readyToPublish: ({ data: { question } }) => nonEmpty(question),
    },
    {
      toolType: 'POLL',
      icon: {
        name: 'poll',
        pack: 'materialCommunity',
      },
      text: i18n("Poll", "", "enhanced"),
      dataStructure: [
        {
          name: 'question',
          type: 'string',
          label: i18n("Question", "", "enhanced"),
          required: true,
        },
        {
          name: 'choices',
          type: ['freechoice'],
          label: i18n("Choices", "", "enhanced"),
          required: true,
          maxItems: 20,
        },
      ],
      readyToPublish: ({ data: { question, choices=[] } }) => (
        nonEmpty(question)
        && choices.length >= 2
        && choices.every(choice => nonEmpty(choice))
      ),
    },
    {
      toolType: 'DOCUMENT',
      icon: {
        name: 'md-document',
      },
      text: i18n("Document", "", "enhanced"),
      dataStructure: [
        {
          name: 'document',
          type: 'file',
          fileTypes: [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          ],
          required: true,
        },
      ],
      readyToPublish: ({ data: { document } }) => !!document,
    },
    {
      toolType: 'IMAGES',
      icon: {
        name: 'md-image',
      },
      text: i18n("Images", "", "enhanced"),
      dataStructure: [
        {
          name: 'images',
          type: 'files',
          fileTypes: [
            'image/png',
            'image/jpeg',
            'image/gif',
            'image/svg+xml',
            'image/webp',
          ],
          required: true,
        },
      ],
      readyToPublish: ({ data: { images } }) => (images || []).length > 0,
    },
    {
      toolType: 'AUDIO',
      icon: {
        name: 'md-musical-note',
      },
      text: i18n("Audio", "", "enhanced"),
      dataStructure: [
        {
          name: 'audioFile',
          type: 'file',
          fileTypes: [
            'audio/mpeg',
          ],
          required: true,
        },
      ],
      readyToPublish: ({ data: { audioFile } }) => !!audioFile,
    },
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