'use client';

import React from 'react';
import { useGame } from '../../context/GameContext';
import { Difficulty, GAME_CONFIG } from '../../lib/gameLogic';
import styles from './DifficultySelection.module.css';

const DifficultySelection = () => {
    const { setDifficulty, startGame, highScore, streak } = useGame();

    const handleSelect = (diff: Difficulty) => {
        setDifficulty(diff);
        startGame();
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Choose Your Challenge</h2>
            <p className={styles.subtext}>Find the perfect word.</p>

            <div className={styles.highScore}>
                <span>High Score: {highScore}</span>
            </div>

            <div className={styles.buttonGroup}>
                <button
                    className={`${styles.button} ${styles.easy}`}
                    onClick={() => handleSelect(Difficulty.EASY)}
                >
                    <span className={styles.diffTitle}>Easy</span>
                    <span className={styles.diffDesc}>Distinct Choices • {GAME_CONFIG[Difficulty.EASY].timeLimit}s</span>
                </button>

                <button
                    className={`${styles.button} ${styles.medium}`}
                    onClick={() => handleSelect(Difficulty.MEDIUM)}
                >
                    <span className={styles.diffTitle}>Medium</span>
                    <span className={styles.diffDesc}>3 Choices • Faster • {GAME_CONFIG[Difficulty.MEDIUM].timeLimit}s</span>
                </button>

                <button
                    className={`${styles.button} ${styles.hard}`}
                    onClick={() => handleSelect(Difficulty.HARD)}
                >
                    <span className={styles.diffTitle}>Hard</span>
                    <span className={styles.diffDesc}>Similar Choices • {GAME_CONFIG[Difficulty.HARD].timeLimit}s</span>
                </button>
            </div>
        </div>
    );
};

export default DifficultySelection;
