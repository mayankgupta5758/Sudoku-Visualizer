# Sudoku Solver

## Overview

This project is a **Sudoku Solver** built using JavaScript. The solver takes a partially completed Sudoku board, solves it step by step, and highlights the grid based on correct or incorrect placements. The Sudoku board is solved using a backtracking algorithm, which tries to fill the board while checking for valid entries in each row, column, and 3x3 subgrid.

The project also allows users to interact with the board manually by inputting their own numbers, and it will automatically solve the puzzle when the "Start" button is clicked.

## Features

- **Interactive Sudoku Board**: Users can input numbers (1–9) into the grid and solve the puzzle automatically.
- **Highlighting**: The solver will highlight cells that are correctly filled (green) or incorrectly filled (red).
- **Pause/Resume**: The solver can be paused and resumed with the "Pause" button.
- **Speed Control**: Adjust the speed at which the solver progresses through the puzzle.
- **Random Puzzle Generation**: You can load a Sudoku puzzle with random zeros on the grid.

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-repository/sudoku-solver.git
cd sudoku-solver
