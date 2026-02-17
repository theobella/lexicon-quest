export enum Difficulty {
    EASY = 'EASY',
    MEDIUM = 'MEDIUM',
    HARD = 'HARD',
}

export type GameState = 'MENU' | 'PLAYING' | 'GAME_OVER';

export interface Word {
    term: string;
    definition: string;
    partOfSpeech: string;
    example?: string;
}

export interface Question {
    targetWord: Word;
    options: string[]; // For Easy/Medium
    correctAnswer: string;
}

export const GAME_CONFIG = {
    [Difficulty.EASY]: {
        timeLimit: 30,
        pointsPerCorrect: 10,
        penalty: 0,
    },
    [Difficulty.MEDIUM]: {
        timeLimit: 20,
        pointsPerCorrect: 20,
        penalty: 5,
    },
    [Difficulty.HARD]: {
        timeLimit: 15,
        pointsPerCorrect: 50,
        penalty: 10,
    },
};

// Small sample list for development
import { DICTIONARY } from './dictionary';

export const getRandomWord = (): Word => {
    return DICTIONARY[Math.floor(Math.random() * DICTIONARY.length)];
};

export const generateQuestion = (difficulty: Difficulty): Question => {
    const target = getRandomWord();
    let options: string[] = [];

    if (difficulty === Difficulty.HARD) {
        // HARD: Same Part of Speech
        const candidates = DICTIONARY
            .filter(w => w.term !== target.term && w.partOfSpeech === target.partOfSpeech);

        // Fallback to random if not enough matches
        const pool = candidates.length >= 2 ? candidates : DICTIONARY.filter(w => w.term !== target.term);

        const distractors = pool
            .sort(() => 0.5 - Math.random())
            .slice(0, 2)
            .map(w => w.term);

        options = [target.term, ...distractors].sort(() => 0.5 - Math.random());
    } else if (difficulty === Difficulty.EASY) {
        // EASY: Different Part of Speech & Different First Letter (if possible)
        const candidates = DICTIONARY
            .filter(w => w.term !== target.term && w.partOfSpeech !== target.partOfSpeech);

        // Fallback
        const pool = candidates.length >= 2 ? candidates : DICTIONARY.filter(w => w.term !== target.term);

        const distractors = pool
            .sort(() => 0.5 - Math.random())
            .slice(0, 2)
            .map(w => w.term);

        options = [target.term, ...distractors].sort(() => 0.5 - Math.random());
    } else {
        // MEDIUM: Random logic (existing)
        // Select 2 distractors
        const distractors = DICTIONARY
            .filter(w => w.term !== target.term)
            .sort(() => 0.5 - Math.random())
            .slice(0, 2)
            .map(w => w.term);

        options = [target.term, ...distractors].sort(() => 0.5 - Math.random());
    }

    return {
        targetWord: target,
        options,
        correctAnswer: target.term,
    };
};

export const calculateScore = (difficulty: Difficulty, timeRemaining: number): number => {
    const config = GAME_CONFIG[difficulty];
    // Base points + (Time Remaining * Multiplier)
    // Example: Easy (10) + (15s * 1) = 25 points
    // Example: Hard (50) + (10s * 5) = 100 points
    const timeMultiplier = difficulty === Difficulty.HARD ? 5 : (difficulty === Difficulty.MEDIUM ? 2 : 1);
    return config.pointsPerCorrect + (timeRemaining * timeMultiplier);
};
