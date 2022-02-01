type Period = {
  start: string;
  end: string;
};

// MEMO: 授業時間を設定する
export const periods: Period[] = [
  {
    start: "9:30",
    end: "11:00",
  },
  {
    start: "11:15",
    end: "12:45",
  },
  {
    start: "13:00",
    end: "14:30",
  },
  {
    start: "14:40",
    end: "16:10",
  },
  {
    start: "16:20",
    end: "17:50",
  },
  {
    start: "18:00",
    end: "19:30",
  },
];

// MEMO: 授業名を設定する
const lessonNames = {
  SV42: "SV42",
  GP41: "GP41",
  BC41: "BC41",
  FX41: "FX41",
  WA43: "WA43",
  MA42: "MA42",
  SELECT: "選択",
} as const;

// MEMO: 各授業名とそれに対応するZoomIDを設定する
const zoomIds = {
  [lessonNames.SV42]: "684-322-4894",
  [lessonNames.GP41]: "707-958-9006",
  [lessonNames.BC41]: "300-000-0000",
  [lessonNames.FX41]: "707-958-9006",
  [lessonNames.WA43]: "892-784-8092",
  [lessonNames.MA42]: "892-784-8092",
  [lessonNames.SELECT]: "658-074-6464",
} as const;

type LessonName = keyof typeof zoomIds;
type LessonZoomID = typeof zoomIds[LessonName];
type Lesson = Readonly<{
  name: LessonName | "";
  id: LessonZoomID | "";
}>;

type Timetable = Lesson[][];

// MEMO: 時間割を設定する
export const timetable: Timetable = [
  [
    { name: "", id: "" },
    { name: lessonNames.GP41, id: zoomIds[lessonNames.GP41] },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
  ],
  [
    { name: "", id: "" },
    { name: lessonNames.GP41, id: zoomIds[lessonNames.GP41] },
    { name: lessonNames.FX41, id: zoomIds[lessonNames.FX41] },
    { name: "", id: "" },
    { name: "", id: "" },
  ],
  [
    { name: "", id: "" },
    { name: lessonNames.BC41, id: zoomIds[lessonNames.BC41] },
    { name: lessonNames.WA43, id: zoomIds[lessonNames.WA43] },
    { name: "", id: "" },
    { name: lessonNames.SELECT, id: zoomIds[lessonNames.SELECT] },
  ],
  [
    { name: lessonNames.SV42, id: zoomIds[lessonNames.SV42] },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: lessonNames.GP41, id: zoomIds[lessonNames.GP41] },
    { name: lessonNames.MA42, id: zoomIds[lessonNames.MA42] },
  ],
  [
    { name: lessonNames.SV42, id: zoomIds[lessonNames.SV42] },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: lessonNames.GP41, id: zoomIds[lessonNames.GP41] },
    { name: lessonNames.MA42, id: zoomIds[lessonNames.MA42] },
  ],
  [
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: lessonNames.GP41, id: zoomIds[lessonNames.GP41] },
    { name: "", id: "" },
  ],
];
