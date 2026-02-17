"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { Difficulty, GameState, Question, generateQuestion, calculateScore, GAME_CONFIG } from '../lib/gameLogic';

interface GameContextType {
    gameState: 'MENU' | 'PLAYING' | 'GAME_OVER';
    difficulty: Difficulty;
    score: number;
    highScore: number;
    currentQuestion: Question | null;
    timeRemaining: number;
    streak: number;
    setDifficulty: (diff: Difficulty) => void;
    startGame: () => void;
    submitAnswer: (answer: string) => void;
    resetGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
    const [gameState, setGameState] = useState<'MENU' | 'PLAYING' | 'GAME_OVER'>('MENU');
    const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.EASY);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useLocalStorage<number>('lexicon-quest-highscore', 0);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [timeRemaining, setTimeRemaining] = useState(GAME_CONFIG[Difficulty.EASY].timeLimit);
    const [streak, setStreak] = useState(0);

    // Load new question helper
    const loadNewQuestion = () => {
        const question = generateQuestion(difficulty);
        setCurrentQuestion(question);
        setTimeRemaining(GAME_CONFIG[difficulty].timeLimit);
    };

    const startGame = () => {
        setScore(0);
        setStreak(0);
        setGameState('PLAYING');
        loadNewQuestion();
    };

    const submitAnswer = (answer: string) => {
        if (!currentQuestion) return;

        const isCorrect = answer.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase().trim();

        if (isCorrect) {
            const points = calculateScore(difficulty, timeRemaining);
            setScore(prev => prev + points);
            setStreak(prev => prev + 1);
            loadNewQuestion();
        } else {
            // Game Over on wrong answer? Or just penalty?
            // Let's go with Game OVER for high stakes like "Who wants to be a millionaire" style if that fits mom's persona, 
            // but "3 lives" or "penalty" is friendlier.
            // Re-reading request: "Give her more points the faster she answers." 
            // Doesn't specify failure condition. Let's assume Game Over on wrong answer for now to keep it simple and arcade-y, 
            // OR maybe 3 strikes. Let's stick to Game Over on timeout or wrong answer for strict "Hard" mode feel, 
            // but maybe just a penalty for Easy/Medium?
            // actually, let's just end the game for now to keep scope small, or maybe just subtract time?
            // Let's do GAME OVER on wrong answer for simplicity and high stakes fun.
            endGame();
        }
    };

    const endGame = () => {
        setGameState('GAME_OVER');
        if (score > highScore) {
            setHighScore(score);
        }
    };

    const resetGame = () => {
        setGameState('MENU');
        setScore(0);
        setStreak(0);
    };

    // Timer logic
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (gameState === 'PLAYING' && timeRemaining > 0) {
            timer = setInterval(() => {
                setTimeRemaining(prev => {
                    if (prev <= 1) {
                        endGame();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [gameState, timeRemaining]);

    return (
        <GameContext.Provider value={{
            gameState,
            difficulty,
            score,
            highScore,
            currentQuestion,
            timeRemaining,
            streak,
            setDifficulty,
            startGame,
            submitAnswer,
            resetGame
        }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => {
    const context = useContext(GameContext);
    if (context === undefined) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
};
