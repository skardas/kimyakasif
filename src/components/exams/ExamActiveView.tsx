import React from 'react';
import { QuizSessionModal, type QuizSessionModalProps } from './QuizSessionModal';

export interface ExamActiveViewProps extends QuizSessionModalProps {}

export const ExamActiveView: React.FC<ExamActiveViewProps> = (props) => {
  return <QuizSessionModal {...props} />;
};
