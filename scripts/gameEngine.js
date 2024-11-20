export class GameEngine {
    constructor() {
        this.currentChapter = 'chapter1';
        this.currentRoute = 'start';
        this.currentScene = 0;
        this.gameState = {
            flags: {
                meetMyungju: false,
                meetJuhee: false
            }
        };
    }

    getCurrentScene(storyData) {
        const scene = storyData[this.currentChapter][this.currentRoute].scenes[this.currentScene];
        
        // 동적 텍스트가 있는 경우 처리
        if (scene.getText) {
            return {
                ...scene,
                text: scene.getText(this.gameState)
            };
        }
        
        return scene;
    }

    nextScene(storyData) {
        const currentScene = this.getCurrentScene(storyData);
        
        // nextChapter가 있는 경우 챕터 전환만 하고 종료
        if (currentScene.nextChapter) {
            this.currentChapter = currentScene.nextChapter;
            this.currentRoute = 'start';
            this.currentScene = 0;
            return false;  // 여기서 false를 반환하여 더 이상 진행하지 않음
        }
        
        const currentChapterData = storyData[this.currentChapter];
        const currentRouteData = currentChapterData[this.currentRoute];
        
        // 일반적인 다음 씬으로 이동
        if (this.currentScene < currentRouteData.scenes.length - 1) {
            this.currentScene++;
            return true;
        }
        
        return false;
    }
    

    makeChoice(choiceIndex, storyData) {
        const currentScene = this.getCurrentScene(storyData);
        if (currentScene.choices && currentScene.choices[choiceIndex]) {
            const choice = currentScene.choices[choiceIndex];
            
            // 루트 변경이 있는 경우
            if (choice.route) {
                this.currentRoute = choice.route;
                this.currentScene = 0;
            } 
            // 다음 씬으로 이동
            else if (choice.nextScene !== undefined) {
                // 선택한 씬의 마지막 씬까지의 거리 계산
                const remainingScenes = storyData[this.currentChapter][this.currentRoute].scenes.length - choice.nextScene;
                
                // 다음 챕터로 전환해야 하는 씬이 있는지 확인
                const targetScene = storyData[this.currentChapter][this.currentRoute].scenes[choice.nextScene];
                if (targetScene.nextChapter) {
                    this.currentChapter = targetScene.nextChapter;
                    this.currentRoute = 'start';
                    this.currentScene = 0;
                } else {
                    this.currentScene = choice.nextScene;
                }
            }

            // 플래그 설정
            if (choice.setFlag) {
                this.gameState.flags[choice.setFlag] = true;
            }
        }
    }

    // 게임 저장
    saveGame() {
        const saveData = {
            currentChapter: this.currentChapter,
            currentRoute: this.currentRoute,
            currentScene: this.currentScene,
            gameState: this.gameState
        };
        localStorage.setItem('gameSave', JSON.stringify(saveData));
    }

    // 게임 불러오기
    loadGame() {
        const saveData = localStorage.getItem('gameSave');
        if (saveData) {
            const data = JSON.parse(saveData);
            this.currentChapter = data.currentChapter;
            this.currentRoute = data.currentRoute;
            this.currentScene = data.currentScene;
            this.gameState = data.gameState;
            return true;
        }
        return false;
    }
}