'use client';

import React from 'react';
import { useGame } from '../../context/GameContext';
import styles from './GameContainer.module.css';
import DifficultySelection from './DifficultySelection';
import GameScreen from './GameScreen';
import GameOverScreen from './GameOverScreen';

const GameContainer = () => {
    const { gameState } = useGame();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Lexicon Quest</h1>
                {/* Placeholder for small stats or user profile link */}
            </header>

            <main className={styles.main}>
                {gameState === 'MENU' && <DifficultySelection />}
                {gameState === 'PLAYING' && <GameScreen />}
                {gameState === 'GAME_OVER' && <GameOverScreen />}
            </main>
        </div>
    );
};

export default GameContainer;
