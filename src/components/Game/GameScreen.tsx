'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../../context/GameContext';
import { Difficulty } from '../../lib/gameLogic';
import styles from './GameScreen.module.css';

const GameScreen = () => {
    const { currentQuestion, timeRemaining, score, streak, difficulty, submitAnswer } = useGame();
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-focus input on mount for Hard mode
    useEffect(() => {
        if (difficulty === Difficulty.HARD && inputRef.current) {
            inputRef.current.focus();
        }
    }, [difficulty, currentQuestion]);

    if (!currentQuestion) return <div>Loading...</div>;

    const handleOptionClick = (option: string) => {
        submitAnswer(option);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            submitAnswer(inputValue);
            setInputValue(''); // Reset for next question
        }
    };

    // Calculate progress bar width
    // Max time varies by difficulty
    const maxTime = difficulty === Difficulty.EASY ? 30 : difficulty === Difficulty.MEDIUM ? 20 : 15;
    const progressPercentage = (timeRemaining / maxTime) * 100;

    // Timer color changes
    const timerColor = timeRemaining < 5 ? '#f44336' : timeRemaining < 10 ? '#ff9800' : '#4caf50';

    return (
        <div className={styles.container}>
            <div className={styles.statsBar}>
                <div className={styles.stat}>Score: {score}</div>
                <div className={styles.stat}>Streak: {streak} 🔥</div>
            </div>

            <div className={styles.timerContainer}>
                <div
                    className={styles.timerBar}
                    style={{ width: `${progressPercentage}%`, backgroundColor: timerColor }}
                />
            </div>

            <div className={styles.card}>
                <h3 className={styles.prompt}>What is the word for:</h3>
                <p className={styles.definition}>"{currentQuestion.targetWord.definition}"</p>
                <span className={styles.partOfSpeech}>({currentQuestion.targetWord.partOfSpeech})</span>
            </div>

            <div className={styles.interactionArea}>
                {difficulty === Difficulty.HARD ? (
                    <form onSubmit={handleFormSubmit} className={styles.inputForm}>
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type the word..."
                            className={styles.textInput}
                            autoFocus
                        />
                        <button type="submit" className={styles.submitButton}>Enter</button>
                    </form>
                ) : (
                    <div className={styles.optionsGrid}>
                        {currentQuestion.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className={styles.optionButton}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GameScreen;
