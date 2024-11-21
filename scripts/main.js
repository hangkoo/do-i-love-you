import { GameEngine } from './gameEngine.js';
import { storyData } from '../stories/index.js';

const game = new GameEngine();

// 게임 초기화 및 이벤트 리스너 설정
function initializeGame() {
    // DOM 요소들 가져오기
    const sceneElement = document.querySelector('#scene');
    const dialogueBox = document.querySelector('#dialogue-box');
    const characterName = document.querySelector('.character-name');
    const dialogueText = document.querySelector('#dialogue-text');
    const playButton = document.querySelector('#play-button');
    const choiceContainer = document.querySelector('.choice-container');
    const choice1Button = document.querySelector('#choice1');
    const choice2Button = document.querySelector('#choice2');
    const saveButton = document.querySelector('#save-button');
    const loadButton = document.querySelector('#load-button');

    // 크레딧과 관련 요소들을 제거하는 함수
    function clearEndingElements() {
        // 크레딧 제거
        const credits = document.querySelector('.credits');
        if (credits) {
            credits.remove();
        }
        
        // 다시하기 버튼 제거
        const restartButton = document.querySelector('.restart-button');
        if (restartButton) {
            restartButton.remove();
        }
    }

    // 다음 버튼 클릭 이벤트
    playButton.addEventListener('click', () => {
        game.nextScene(storyData);
        updateDisplay();
    });

    // 선택지 버튼 이벤트
    choice1Button.addEventListener('click', () => {
        game.makeChoice(0, storyData);
        updateDisplay();
    });

    choice2Button.addEventListener('click', () => {
        game.makeChoice(1, storyData);
        updateDisplay();
    });

    // 저장 버튼 이벤트
    saveButton.addEventListener('click', () => {
        clearEndingElements(); // 크레딧 제거
        game.saveGame();
        alert('게임이 저장되었습니다!');
    });

    // 불러오기 버튼 이벤트
    loadButton.addEventListener('click', () => {
        if (game.loadGame()) {
            clearEndingElements(); // 크레딧 제거
            updateDisplay();
            alert('저장된 게임을 불러왔습니다!');
        } else {
            alert('저장된 게임이 없습니다.');
        }
    });

    // 초기 씬 표시
    updateDisplay();

    // 화면 업데이트 함수
    function updateDisplay() {
        const currentScene = game.getCurrentScene(storyData);
        
        // 챕터 전환 체크
        if (currentScene.nextChapter) {
            // 챕터 전환 효과
            sceneElement.style.transition = 'opacity 1.5s';
            sceneElement.style.opacity = '0';
            
            setTimeout(() => {
                // 새 챕터 시작 효과
                sceneElement.style.backgroundImage = `url('images/${currentScene.background}')`;
                sceneElement.style.opacity = '1';
                
                // 챕터 전환 알림 표시
                showChapterTransition(currentScene.nextChapter);
            }, 1500);
        }

        // 배경 이미지 업데이트
        if (currentScene.background) {
            sceneElement.style.backgroundImage = `url('images/${currentScene.background}')`;
        }

        // 대화 내용 업데이트
        characterName.textContent = currentScene.speaker;
        dialogueText.textContent = currentScene.text;

        // 엔딩인 경우
        if (currentScene.isEnding) {
            // 페이드 아웃 효과
            sceneElement.style.transition = 'opacity 2s';
            sceneElement.style.opacity = '0';
            
            setTimeout(() => {
                // 엔딩 화면으로 전환
                sceneElement.style.backgroundImage = `url('images/${currentScene.background}')`;
                sceneElement.style.opacity = '1';
                
                // 진 엔딩인 경우 특별한 효과
                if (currentScene.endingType === "true") {
                    showCredits();
                    playEndingBGM(currentScene.bgm);
                }
                
                showRestartButton();
            }, 2000);
            
            // 선택지와 다음 버튼 숨기기
            choiceContainer.style.display = 'none';
            playButton.style.display = 'none';
        } 
        // 일반 씬인 경우
        else {
            // 기존 다시하기 버튼이 있다면 제거
            const existingRestartButton = document.querySelector('.restart-button');
            if (existingRestartButton) {
                existingRestartButton.remove();
            }

            // 크레딧이 있다면 제거
            const credits = document.querySelector('.credits');
            if (credits) {
                credits.remove();
            }

            if (currentScene.choices) {
                choiceContainer.style.display = 'flex';
                playButton.style.display = 'none';
                choice1Button.textContent = currentScene.choices[0].text;
                choice2Button.textContent = currentScene.choices[1].text;
            } else {
                choiceContainer.style.display = 'none';
                playButton.style.display = 'block';
            }
        }
    }

    // 챕터 전환 알림 함수
    function showChapterTransition(nextChapter) {
        const transition = document.createElement('div');
        transition.className = 'chapter-transition';
        transition.textContent = `Chapter ${nextChapter.replace('chapter', '')}`;
        document.body.appendChild(transition);

        setTimeout(() => {
            transition.remove();
        }, 3000);
    }

    function showCredits() {
        const credits = document.createElement('div');
        credits.className = 'credits';
        credits.innerHTML = `
            <h2>The End</h2>
            <p class="credit-text">당신의 선택으로 만들어진 이야기</p>
            <p class="credit-text">Created by...</p>
            <!-- 추가 크레딧 내용 -->
        `;
        dialogueBox.appendChild(credits);
    }
    
    // BGM 재생을 위한 함수
    function playEndingBGM(bgmFile) {
        const audio = new Audio(`audio/${bgmFile}`);
        audio.volume = 0.5; // 볼륨 설정
        audio.loop = true;  // 반복 재생
        
        try {
            audio.play().catch(error => {
                console.log('BGM 재생 실패:', error);
                // BGM 재생 실패해도 게임은 계속 진행
            });
        } catch (error) {
            console.log('BGM 재생 중 오류:', error);
            // BGM 재생 실패해도 게임은 계속 진행
        }
    }

    // 다시하기 버튼 표시 함수
    function showRestartButton() {
        // 기존 다시하기 버튼이 있다면 제거
        const existingRestartButton = document.querySelector('.restart-button');
        if (existingRestartButton) {
            existingRestartButton.remove();
        }

        // 새로운 다시하기 버튼 생성
        const restartButton = document.createElement('button');
        restartButton.textContent = '다시 하기';
        restartButton.classList.add('restart-button');
        
        // 다시하기 버튼 클릭 이벤트
        restartButton.addEventListener('click', () => {
            // 게임 초기화
            game.currentChapter = 'chapter1';
            game.currentRoute = 'start';
            game.currentScene = 0;
            
            // 크레딧 제거
            const credits = document.querySelector('.credits');
            if (credits) {
                credits.remove();
            }
            
            // 화면 업데이트
            updateDisplay();
            
            // 다시하기 버튼 제거
            restartButton.remove();
        });

        // 버튼을 대화창에 추가
        dialogueBox.appendChild(restartButton);
    }

    // 게임 시작 시 Chapter 1 표시
    showChapterTransition('chapter1');

    // 초기 씬 표시 (약간의 딜레이 후)
    setTimeout(() => {
        updateDisplay();
    }, 1000);  // 챕터 표시가 보이고 난 후 씬 표시
}

// 게임 시작
document.addEventListener('DOMContentLoaded', initializeGame);

// 오류 처리
window.addEventListener('error', (error) => {
    console.error('게임 에러:', error);
    alert('게임 실행 중 오류가 발생했습니다.');
});