export const chapter1 = {
    start: {
        scenes: [
            {
                speaker: "내레이션",
                text: "20XX년 XX월 XX일 오전11시.",
                background: "chapter1.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "평화로운 일요일 아침, 태영은 늦잠을 자고 있었다.",
                background: "chapter1.jpg",
                choices: null
            },
            {
                speaker: "(밖)",
                text: "쿵!",
                background: "chapter1.jpg",
                choices: null
            },
            {
                speaker: "태영",
                text: "으음... 주말인데 조용히 좀 더 자고 싶은데...",
                background: "chapter1.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "쿵! 쾅! 쿵쾅!",
                background: "chapter1.jpg",
                choices: null
            },
            {
                speaker: "태영",
                text: "뭐야! 이 시간에 무슨 소리야?",
                background: "chapter1.jpg",
                choices: [
                    {
                        text: "창문을 열어본다",
                        route: "windowRoute",
                        setFlag: "meetJiyoung"
                    },
                    {
                        text: "아파트 관리실에 전화한다",
                        route: "phoneRoute",
                        setFlag: "meetNayoung"
                    }
                ]
            }
        ]
    },
    windowRoute: {
        scenes: [
            {
                speaker: "내레이션",
                text: "태영은 소리가 나는 쪽으로 다가가 창문을 열었다.",
                background: "chapter1.jpg",
                choices: null
            },
            {
                speaker: "(힘차게 밀며)",
                text: "끼...끼이익",
                background: "window.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "바쁘게 돌아가고 있는 공사장이 보였다.",
                background: "construction.jpg",
                choices: null
            },
            {
                speaker: "태영",
                text: "어? 저기 공사장에서...",
                background: "construction.jpg",
                choices: null
            },
            {
                speaker: "???",
                text: "앗! 죄송합니다! 시끄럽게 해서...",
                background: "construction.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "창밖을 보니 공사장 안전모를 쓴 여성이 미안한 표정으로 손을 흔들고 있었다.",
                background: "jiyoung.jpg",
                choices: [
                    {
                        text: "괜찮다고 웃으며 손을 흔든다",
                        nextScene: 6
                    },
                    {
                        text: "별말 없이 창문을 닫는다",
                        nextScene: 10
                    }
                ]
            },
            // 6번 인덱스 시작
            {
                speaker: "태영",
                text: "아니에요~ 괜찮습니다!",
                background: "taeyoung.jpg",
                choices: null
            },
            {
                speaker: "???",
                text: "정말 죄송해요! 저희가 좀 조심했어야 했는데...",
                background: "jiyoung.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "그녀는 미안한 듯 고개를 숙였다.",
                background: "jiyoung.jpg",
                choices: null
            },
            {
                speaker: "태영",
                text: "(음... 생각보다 귀여운데?)",
                background: "taeyoung.jpg",
                nextChapter: "chapter2", // 다음 챕터로 전환
                choices: null
            },
            // 10번 인덱스 시작 (창문을 닫는 경우)
            {
                speaker: "내레이션",
                text: "태영은 별다른 말없이 창문을 닫았다.",
                background: "window.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "이렇게 태영의 첫 인연은 그렇게 스쳐지나갔다...",
                background: "ending.jpg",
                isEnding: true,
                //아래 두개가 있으면 진 엔딩
                //endingType: "true", // 진 엔딩 표시
                //bgm: "ending_theme.mp3"
            }
        ]
    },
    phoneRoute: {
        scenes: [
            {
                speaker: "내레이션",
                text: "태영은 핸드폰을 집어들어 관리실 번호를 눌렀다.",
                background: "chapter1.jpg",
                choices: null
            },
            {
                speaker: "관리사무소",
                text: "네, 관리사무소입니다.",
                background: "chapter1.jpg",
                choices: null
            }
            // ... 더 많은 전화 루트 씬들
        ]
    }
};