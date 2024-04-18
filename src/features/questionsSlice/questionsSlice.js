import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    result: [],
    score: 0,
};

const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        addQuestion(state, action) {
            const { id, question, correctAnswer, selectedAnswer } = action.payload;
            const existingQuestion = state.result.find(o => o.id === id);
            if (existingQuestion) {
                if (existingQuestion.correctAnswer === existingQuestion.selectedAnswer) {
                    state.score = state.score - 1;
                }
                existingQuestion.correctAnswer = correctAnswer;
                existingQuestion.selectedAnswer = selectedAnswer;
                existingQuestion.question = question;

                if (correctAnswer === selectedAnswer) {
                    state.score = state.score + 1;
                }
            } else {
                state.result = [...state.result, { id, question, correctAnswer, selectedAnswer }];
                if (correctAnswer === selectedAnswer) {
                    state.score = state.score + 1;
                }
            }
        },
        deleteQuizResults(state) {
            state.result = [];
            state.selectedAnswers = {};
            state.score = 0;
        }
    },
});

export const { addQuestion, deleteQuizResults } = questionSlice.actions;
export default questionSlice.reducer;
