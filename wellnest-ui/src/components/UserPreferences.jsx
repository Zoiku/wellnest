export const Prompts = [
  {
    id: 0,
    heading: "To continue, please help us understand your preferences",
    name: "mainTherapyReason",
    question: "What is your main reason for therapy?",
    options: ["Anxiety", "Depression", "Relationships", "Trauma", "Other"],
    supporting: {
      optionIndexTrigger: 4,
      type: "text",
      placeholder: "Please specify",
    },
  },
  {
    id: 1,
    name: "previousTherapyExperience",
    question: "Do you have any previous therapy experience?",
    options: ["Yes", "No"],
    supporting: {
      optionIndexTrigger: 0,
      type: "text",
      multiline: {
        line: 5,
      },
      placeholder: "Please briefly describe your experience",
    },
  },
  {
    id: 2,
    name: "preferredSessionFormat",
    question: "Preferred session format",
    options: ["Video", "Phone", "Text", "No Preference"],
  },
  {
    id: 3,
    name: "preferredTherapistGender",
    question: "Do you have a gender preference for your therapist",
    options: ["Male", "Female", "No Preference"],
  },
  {
    id: 4,
    name: "preferredTherapistAge",
    question: "Do you have an age preference for your therapist",
    options: ["Young", "Same Age", "Old", "No Preference"],
  },
];

export const promptNoteMessage =
  "All questions are mandatory. Carefully select an answer from each question to connect you with Therapists who might best assist you.";
