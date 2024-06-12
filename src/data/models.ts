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
  id: number;
  name: string;
  examiner_id: number;
  sold_id: string | null;
  final_opinion: string | null;
  final_hospital_result: string | null;
  examiner_status: string | null;
};

export type ExaminerExam = {
  examiner: Examiner;
  exams: Exam[];
};

export type Exam = {
  id: number;
  value: string;
};
