import { prisma } from "@/utils/db";
import { Datasource } from "./datasource";
import { Case, Examiner, ExaminerExam } from "./models";

class Sqlite implements Datasource {
  async getAllExaminersWithExams(): Promise<ExaminerExam[]> {
    const examiners = await this.getExaminers();
    const exams = await prisma.customExam.findMany({
      where: {
        exam_id: {
          in: [28, 35, 39, 40, 46],
        },
      },
    });

    return examiners.map((examiner) => {
      const exam = exams.find((exam) => exam.examiner_id === examiner.id);
      return {
        examiner: examiner,
        exams: exams,
      };
    });
  }
  async makeNoticeable(id: number): Promise<void> {
    await prisma.examiners.updateMany({
      where: {
        id: id,
      },
      data: {
        again: true,
      },
    });
  }
  async getNumberOfQuestionsAnswered(): Promise<Map<number, number>> {
    const answers = await prisma.answers.findMany();

    const questions = new Map<number, number>();

    answers.forEach((answer) => {
      if (questions.has(answer.question_id)) {
        questions.set(answer.question_id, questions.get(answer.question_id)! + 1);
      } else {
        questions.set(answer.question_id, 1);
      }
    });

    return questions;
  }
  async getSoldiersByCityCode(code: number): Promise<Examiner[]> {
    return await prisma.examiners.findMany({
      where: {
        mohafza_code: code,
        sold_id: {
          not: null,
        },
      },
    });
  }
  async getSoldiersNumberByCity(): Promise<Map<string, number>> {
    const examiners = await prisma.examiners.findMany({
      where: {
        mohafza_code: {
          not: null,
        },
        sold_id: {
          not: null,
        },
      },
    });

    const cityCodes = new Map<string, number>();

    examiners.forEach((examiner) => {
      const code = examiner.mohafza_code!.toString();

      if (cityCodes.has(code)) {
        cityCodes.set(code, cityCodes.get(code)! + 1);
      } else {
        cityCodes.set(code, 1);
      }
    });

    return cityCodes;
  }
  async makeStage(stage: string): Promise<void> {
    await prisma.examiners.updateMany({
      data: {
        stage: stage,
      },
    });
  }
  async makeCaseGood(id: number): Promise<void> {
    const interview = await prisma.interview.findUnique({
      where: {
        id: id,
      },
    });

    if (!interview) return;

    await prisma.interview.update({
      where: {
        id: id,
      },
      data: {
        final_hospital_result: null,
        final_opinion: "لا يعاني من أي مشاكل",
        examiner_status: null,
      },
    });
  }

  async getCases(): Promise<Case[]> {
    const interviews = await prisma.interview.findMany({
      where: {
        examiner_status: {
          not: null,
        },
        final_hospital_result: {
          not: null,
        },
      },
    });

    const examiners = await this.getExaminers();

    return interviews.map((interview) => {
      const examiner = examiners.find((examiner) => examiner.id === interview.examiner_id);
      return {
        id: interview.id,
        name: examiner?.name || "",
        examiner_id: interview.examiner_id,
        sold_id: examiner?.sold_id || "",
        final_opinion: interview.final_opinion,
        final_hospital_result: interview.final_hospital_result,
        examiner_status: interview.examiner_status,
      };
    });
  }

  async getExaminer(id: number): Promise<Examiner | null> {
    return await prisma.examiners.findUnique({
      where: {
        id: id,
      },
    });
  }
  getTechnicians(): Promise<Examiner[]> {
    return prisma.examiners.findMany({
      where: {
        sold_id: {
          contains: "470",
        },
      },
    });
  }
  async getNoticeableSoldiers(): Promise<Examiner[]> {
    return await prisma.examiners.findMany({
      where: {
        again: true,
        sold_id: {
          not: null,
        },
      },
    });
  }
  async getExaminers(): Promise<Examiner[]> {
    return await prisma.examiners.findMany({
      where: {
        sold_id: {
          not: null,
        },
      },
    });
  }
}

export const db = new Sqlite();
