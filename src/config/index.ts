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
  XX01: "XX01",
  XX02: "XX02",
  XX03: "XX03",
  XX04: "XX04",
  XX05: "XX05",
  XX06: "XX06",
  SELECT: "選択",
} as const;

// MEMO: 各授業名とそれに対応するZoomIDを設定する
const zoomIds = {
  [lessonNames.XX01]: "100-000-0000",
  [lessonNames.XX02]: "200-000-0000",
  [lessonNames.XX03]: "300-000-0000",
  [lessonNames.XX04]: "400-000-0000",
  [lessonNames.XX05]: "500-000-0000",
  [lessonNames.XX06]: "600-000-0000",
  [lessonNames.SELECT]: "700-000-0000",
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
    { name: lessonNames.XX01, id: zoomIds[lessonNames.XX01] },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
  ],
  [
    { name: "", id: "" },
    { name: lessonNames.XX02, id: zoomIds[lessonNames.XX02] },
    { name: lessonNames.XX02, id: zoomIds[lessonNames.XX02] },
    { name: "", id: "" },
    { name: "", id: "" },
  ],
  [
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: lessonNames.SELECT, id: zoomIds[lessonNames.SELECT] },
  ],
  [
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
  ],
  [
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
  ],
  [
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
    { name: "", id: "" },
  ],
];
