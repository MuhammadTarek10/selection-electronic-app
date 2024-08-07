export type Examiner = {
  id?: number | null;
  name?: string | null;
  stage?: string | null;
  sold_id?: string | null;
  mohafza_code?: number | null | undefined;
  qualification_code?: number | null;
  again?: boolean;
  educational_degree?: string | null;
  marital_state?: string | null;
};

export type Case = {
  id?: number;
  name?: string;
  examiner_id?: number;
  sold_id?: string | null;
  final_opinion?: string | null;
  final_hospital_result?: string | null;
  examiner_status?: string | null;
  complaint?: string | null;
};

export type ExaminerExam = {
  examiner?: Examiner;
  optical?: Exam;
  hearing?: Exam;
  back_and_legs?: Exam;
  grip_right?: Exam;
  grip_left?: Exam;
  effort?: Exam;
};

export type Exam = {
  id?: number;
  value?: number;
};

export type ExaminerQuestion = {
  name?: string;
  sold_id?: string;
  qualification_code: number;
  number_of_questions?: number;
};
