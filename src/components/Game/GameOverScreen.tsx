'use client';

import React from 'react';
import { useGame } from '../../context/GameContext';
import styles from './GameOverScreen.module.css';

const GameOverScreen = () => {
    const { score, highScore, resetGame } = useGame();

    const handleShare = () => {
        const text = `I scored ${score} points on Lexicon Quest! Can you beat me?`;
        if (navigator.share) {
            navigator.share({
                title: 'Lexicon Quest',
                text: text,
                url: window.location.href,
            }).catch(console.error);
        } else {
            // Fallback to clipboard
            navigator.clipboard.writeText(`${text} ${window.location.href}`);
            alert('Score copied to clipboard!');
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Game Over</h2>

            <div className={styles.scoreCard}>
                <div className={styles.scoreLabel}>Final Score</div>
                <div className={styles.scoreValue}>{score}</div>
                <div className={styles.highScore}>High Score: {highScore}</div>
            </div>

            <div className={styles.actions}>
                <button onClick={resetGame} className={styles.primaryButton}>
                    Play Again
                </button>
                <button onClick={handleShare} className={styles.secondaryButton}>
                    Share Result
                </button>
            </div>
        </div>
    );
};

export default GameOverScreen;
