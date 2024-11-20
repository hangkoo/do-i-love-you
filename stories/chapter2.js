export const chapter2 = {
    start: {
        scenes: [
            {
                speaker: "내레이션",
                getText: (gameState) => {
                    return gameState.flags.meetJiyoung ? 
                        "며칠 전 창문에서 만났던 그 여자가 떠올랐다..." : 
                        "평소와 다름없는 아침이었다...";
                },
                background: "chapter2.jpg",
                choices: null
            },
            {
                speaker: "태영",
                getText: (gameState) => {
                    return gameState.flags.meetJiyoung ?
                        "그때 그 공사장 여자... 다시 만날 수 있을까?" :
                        "오늘도 평범한 하루가 시작되는구나.";
                },
                background: "chapter2.jpg",
                choices: null
            }
            // ... 이후 스토리 전개
        ]
    }
};
