import { Case, Examiner, ExaminerExam } from "./models";

export interface Datasource {
  // * Dashboard
  getExaminers(): Promise<Examiner[]>;
  getExaminer(id: number): Promise<Examiner | null>;
  getTechnicians(): Promise<Examiner[]>;
  getNoticeableSoldiers(): Promise<Examiner[]>;
  getAllExaminersWithExams(): Promise<ExaminerExam[]>;

  // * Cases
  getCases(): Promise<Case[]>;
  makeCaseGood(id: number): Promise<void>;

  // * Fixes
  makeStage(stage: string): Promise<void>;
  makeNoticeable(id: number): Promise<void>;

  // * Analytics
  getSoldiersNumberByCity(): Promise<Map<string, number>>;
  getSoldiersByCityCode(code: number): Promise<Examiner[]>;
  getNumberOfQuestionsAnswered(): Promise<Map<number, number>>;
  // getPredictedNoticeableSoldiers(): Promise<string>;
}
