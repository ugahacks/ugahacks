interface FaqQuestionProps {
  faq: {
    question: string;
    answer: string;
    open: boolean;
  };
  index: number;
  toggleFAQ: (index: number) => void;
}