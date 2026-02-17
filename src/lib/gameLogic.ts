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
const SAMPLE_WORDS: Word[] = [
    { term: 'Serendipity', definition: 'The occurrence and development of events by chance in a happy or beneficial way.', partOfSpeech: 'noun' },
    { term: 'Ephemeral', definition: 'Lasting for a very short time.', partOfSpeech: 'adjective' },
    { term: 'Ubiquitous', definition: 'Present, appearing, or found everywhere.', partOfSpeech: 'adjective' },
    { term: 'Mellifluous', definition: '(of a voice or words) sweet or musical; pleasant to hear.', partOfSpeech: 'adjective' },
    { term: 'Quixotic', definition: 'Exceedingly idealistic; unrealistic and impractical.', partOfSpeech: 'adjective' },
    { term: 'Pernicious', definition: 'Having a harmful effect, especially in a gradual or subtle way.', partOfSpeech: 'adjective' },
    { term: 'Sycophant', definition: 'A person who acts obsequiously toward someone important in order to gain advantage.', partOfSpeech: 'noun' },
    { term: 'Obfuscate', definition: 'Render obscure, unclear, or unintelligible.', partOfSpeech: 'verb' },
    { term: 'Cacophony', definition: 'A harsh, discordant mixture of sounds.', partOfSpeech: 'noun' },
    { term: 'Ennui', definition: 'A feeling of listlessness and dissatisfaction arising from a lack of occupation or excitement.', partOfSpeech: 'noun' },
];

export const getRandomWord = (): Word => {
    return SAMPLE_WORDS[Math.floor(Math.random() * SAMPLE_WORDS.length)];
};

export const generateQuestion = (difficulty: Difficulty): Question => {
    const target = getRandomWord();
    let options: string[] = [];

    if (difficulty === Difficulty.HARD) {
        options = []; // No options for hard mode
    } else {
        // Select 2 distractors
        const distractors = SAMPLE_WORDS
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
