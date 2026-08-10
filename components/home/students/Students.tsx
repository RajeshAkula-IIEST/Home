"use client";

import { useMemo, useState } from "react";

import {
  GraduationCap,
  Users,
  Briefcase,
  FlaskConical,
  UserRound,
} from "lucide-react";

import Section from "@/components/ui/Section";

import {
  students,
  StudentCategory,
  StudentStatus,
} from "@/data/students";

const categories: {
  value: StudentCategory;
  label: string;
  icon: typeof GraduationCap;
}[] = [
  {
    value: "Ph.D.",
    label: "Ph.D.",
    icon: GraduationCap,
  },
  {
    value: "M.Tech",
    label: "M.Tech",
    icon: GraduationCap,
  },
  {
    value: "B.Tech",
    label: "B.Tech",
    icon: Users,
  },
  {
    value: "Minor Projects",
    label: "Minor Projects",
    icon: FlaskConical,
  },
  {
    value: "Intern",
    label: "Intern",
    icon: Briefcase,
  },
];

export default function Students() {
  const [category, setCategory] =
    useState<StudentCategory>("M.Tech");

  const [status, setStatus] =
    useState<StudentStatus>("current");

  const filteredStudents = useMemo(
    () =>
      students.filter(
        (student) =>
          student.category === category &&
          student.status === status
      ),
    [category, status]
  );

  return (
    <Section id="students">

      <div className="w-full min-w-0">

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            STUDENTS
          </p>

          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Student Supervision
          </h1>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 sm:mt-5 sm:w-24" />

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Academic guidance and research supervision across
            undergraduate, postgraduate, minor project and internship
            programs.
          </p>

        </div>


        {/* ===================================================== */}
        {/* CATEGORY SELECTOR */}
        {/* ===================================================== */}

        <div className="mt-8 w-full overflow-x-auto pb-2">

          <div className="flex min-w-max justify-center gap-2">

            {categories.map((item) => {
              const Icon = item.icon;
              const active = category === item.value;

              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setCategory(item.value)}
                  className={`
                    flex
                    shrink-0
                    items-center
                    gap-2
                    rounded-xl
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    transition-all
                    duration-200
                    sm:px-5
                    sm:py-3
                    sm:text-base
                    ${
                      active
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                    }
                  `}
                >
                  <Icon size={17} />
                  {item.label}
                </button>
              );
            })}

          </div>

        </div>


        {/* ===================================================== */}
        {/* CURRENT / PAST SELECTOR */}
        {/* ===================================================== */}

        <div className="mt-5 flex justify-center">

          <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-100 p-1 shadow-sm">

            <button
              type="button"
              onClick={() => setStatus("current")}
              className={`
                rounded-xl
                px-6
                py-2.5
                text-sm
                font-semibold
                transition-all
                sm:px-8
                sm:py-3
                sm:text-base
                ${
                  status === "current"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:text-blue-600"
                }
              `}
            >
              Current
            </button>

            <button
              type="button"
              onClick={() => setStatus("past")}
              className={`
                rounded-xl
                px-6
                py-2.5
                text-sm
                font-semibold
                transition-all
                sm:px-8
                sm:py-3
                sm:text-base
                ${
                  status === "past"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:text-blue-600"
                }
              `}
            >
              Past
            </button>

          </div>

        </div>


        {/* ===================================================== */}
        {/* RESULT COUNT */}
        {/* ===================================================== */}

        <div className="mt-6 text-center">

          <p className="text-sm font-medium text-slate-500">
            {filteredStudents.length === 0
              ? "No students"
              : filteredStudents.length === 1
              ? "1 student"
              : `${filteredStudents.length} students`}
          </p>

        </div>


        {/* ===================================================== */}
        {/* STUDENT CONTENT */}
        {/* ===================================================== */}

        <div className="mt-4">

          {filteredStudents.length === 0 ? (

            <EmptyState
              category={category}
              status={status}
            />

          ) : category === "B.Tech" ||
            category === "Minor Projects" ? (

            <ProjectStudents
              students={filteredStudents}
            />

          ) : (

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {filteredStudents.map((student) => (
                <StudentCard
                  key={`${student.category}-${student.name}-${student.rollNo}`}
                  student={student}
                />
              ))}

            </div>

          )}

        </div>

      </div>

    </Section>
  );
}


/* =============================================================
   STANDARD STUDENT CARD
============================================================= */

function StudentCard({
  student,
}: {
  student: (typeof students)[number];
}) {
  return (
    <div
      className="
        min-w-0
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        sm:p-6
      "
    >

      <div className="flex items-start gap-4">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
          <UserRound size={21} />
        </div>

        <div className="min-w-0">

          <h3 className="break-words text-lg font-bold text-slate-900">
            {student.name}
          </h3>

          {student.rollNo && (
            <p className="mt-1 text-sm font-medium text-blue-600">
              {student.rollNo}
            </p>
          )}

        </div>

      </div>

      <div className="mt-5 space-y-2 text-sm text-slate-600">

        {student.duration && (
          <p>
            <span className="font-semibold text-slate-800">
              Duration:
            </span>{" "}
            {student.duration}
          </p>
        )}

        {student.role && (
          <p>
            <span className="font-semibold text-slate-800">
              Role:
            </span>{" "}
            {student.role}
          </p>
        )}

        {student.institution && (
          <p className="break-words">
            <span className="font-semibold text-slate-800">
              Institution:
            </span>{" "}
            {student.institution}
          </p>
        )}

      </div>

    </div>
  );
}


/* =============================================================
   PROJECT STUDENTS
============================================================= */

function ProjectStudents({
  students: studentList,
}: {
  students: (typeof students)[number][];
}) {
  const groups = Array.from(
    new Map(
      studentList.map((student) => [
        student.group,
        {
          group: student.group,
          title: student.projectTitle,
          duration: student.duration,
          students: studentList.filter(
            (item) => item.group === student.group
          ),
        },
      ])
    ).values()
  );

  return (
    <div className="grid gap-5">

      {groups.map((group) => (

        <div
          key={group.group}
          className="
            min-w-0
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
            sm:p-6
          "
        >

          {/* Project heading */}

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
              <FlaskConical size={21} />
            </div>

            <div className="min-w-0">

              <p className="text-sm font-semibold text-violet-600">
                {group.group}
              </p>

              <h3 className="mt-1 break-words text-lg font-bold leading-7 text-slate-900 sm:text-xl">
                {group.title}
              </h3>

              {group.duration && (
                <p className="mt-2 text-sm text-slate-500">
                  {group.duration}
                </p>
              )}

            </div>

          </div>


          {/* Students */}

          <div className="mt-5 grid gap-2 sm:grid-cols-2">

            {group.students.map((student) => (

              <div
                key={student.rollNo}
                className="
                  flex
                  min-w-0
                  items-center
                  gap-3
                  rounded-xl
                  bg-slate-50
                  px-4
                  py-3
                "
              >

                <Users
                  size={17}
                  className="shrink-0 text-blue-600"
                />

                <div className="min-w-0">

                  <p className="break-words text-sm font-semibold text-slate-800">
                    {student.name}
                  </p>

                  {student.rollNo && (
                    <p className="text-xs text-slate-500">
                      {student.rollNo}
                    </p>
                  )}

                </div>

              </div>

            ))}

          </div>

        </div>

      ))}

    </div>
  );
}


/* =============================================================
   EMPTY STATE
============================================================= */

function EmptyState({
  category,
  status,
}: {
  category: StudentCategory;
  status: StudentStatus;
}) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-dashed
        border-slate-300
        bg-slate-50
        px-6
        py-12
        text-center
      "
    >

      <GraduationCap className="mx-auto h-10 w-10 text-slate-300" />

      <h3 className="mt-4 text-lg font-semibold text-slate-700">
        No {status === "current" ? "current" : "past"}{" "}
        {category} students
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        No student records are currently listed in this category.
      </p>

    </div>
  );
}