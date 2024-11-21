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
                text: "무슨 일인지 확인하기 위해 태영은 밖을 주시했다.",
                background: "window.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "아파트 바로 앞, 바쁘게 돌아가고 있는 공사장이 보였다.",
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
                speaker: "내레이션",
                text: "그때 누군가 태영에게 말을 걸었다.",
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
                text: "건설 현장이 혼잡했지만 아주 또렸하게 들렸다.",
                background: "construction.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "주변을 둘러보니 공사장 안전모를 쓴 여성이 미안한 표정으로 바라보고 있었다.",
                background: "jiyoung1.jpg",
                choices: [
                    {
                        text: "괜찮다고 웃으며 손을 흔든다",
                        nextScene: 9
                    },
                    {
                        text: "별말 없이 창문을 닫는다",
                        nextScene: 19
                    }
                ]
            },
            // 9번 인덱스 시작
            {
                speaker: "내레이션",
                text: "태영은 화들짝 놀랐다. 하지만 웃음을 감출 순 없어보였다.",
                background: "taeyoung.jpg",
                choices: null
            },
            {
                speaker: "태영",
                text: "아니에요~ 괜찮습니다!",
                background: "taeyoung.jpg",
                choices: null
            },
            {
                speaker: "???",
                text: "정말 죄송해요! 저희가 좀 조심했어야 했는데...",
                background: "jiyoung1.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "그녀는 미안한 듯 고개를 숙였다.",
                background: "jiyoung1.jpg",
                choices: null
            },
            {
                speaker: "태영",
                text: "아니에요~ 진짜 괜찮습니다! 누구나 사람은 실수할 수 있죠(ㅋㅋ)",
                background: "taeyoung.jpg",
                choices: null
            },
            {
                speaker: "???",
                text: "더 조심하겠습니다!",
                background: "jiyoung1.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "그녀는 그말을 끝으로 다시 일을 하러 갔다.",
                background: "jiyoung1.jpg",
                choices: null
            },
            {
                speaker: "태영",
                text: "(으흐흐흐흐)",
                background: "taeyoung.jpg",
                choices: null
            },
            {
                speaker: "태영",
                text: "(음... 생각보다 귀여운데?)",
                background: "taeyoung.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "태영은 행복한 미소를 머금으며 다시 단잠을 시도했다.",
                background: "chapter1.jpg",
                nextChapter: "chapter2", // 챕터2로 전환
                choices: null
            },
            // 19번 인덱스 시작 (창문을 닫는 경우)
            {
                speaker: "내레이션",
                text: "태영은 별다른 말없이 창문을 닫았다.",
                background: "window.jpg",
                choices: null
            },
            {
                speaker: "태영",
                text: "(으음.. 시끄럽게 시리)",
                background: "chapter1.jpg",
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
                speaker: "(통화음)",
                text: ".....",
                background: "chapter1.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "받지 않는거 같다.",
                background: "chapter1.jpg",
                choices: null
            },
            {
                speaker: "태영",
                text: "(흠.. 어쩌지?)",
                background: "chapter1.jpg",
                choices: [
                    {
                        text: "한번 더 전화를 해본다.",
                        nextScene: 1
                    },
                    {
                        text: "관리사무소로 가볼까..?",
                        nextScene: 4
                    }
                ]
            },
            {
                speaker: "내레이션",
                text: "태영은 관리사무소로 내려가기 위해 대충 걸쳐입고 나갔다.",
                background: "chapter1.jpg",
                choices: null
            },
            {
                speaker: "(코고는 소리)",
                text: "드르렁~ 쿨.. 드르렁~ 쿨",
                background: "office.jpg",
                choices: null
            },
            {
                speaker: "(코고는 소리)",
                text: "드르렁~ 쿨.. 드르렁~ 쿨쿨쿨",
                background: "office.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "태영은 안받는 이유를 알아버려서 이마를 탁! 하고 짚었다.",
                background: "taeyoungtak.jpg",
                choices: null
            },
            {
                speaker: "태영",
                text: "(흠 깨워야 하나..?)",
                background: "taeyoungtak.jpg",
                choices: [
                    {
                        text: "깨운다",
                        nextScene: 9
                    },
                    {
                        text: "그냥 체념하고 다시 집에간다.",
                        nextScene: 23
                    }
                ]
            },
            {
                speaker: "태영",
                text: "저.. 저기",
                background: "office.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "그때 누군가가 태영에게 말했다.",
                background: "office.jpg",
                choices: null
            },
            {
                speaker: "???",
                text: "이봐요!!! 거기 당신! 자는 사람을 깨우면 어떻해요?",
                background: "office.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "태영은 놀라며 뒤를 바라보았다.",
                background: "office.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "뒤에 있던 그녀는 보조개 미소를 보이며 태영을 바라보았다.",
                background: "nayoung1.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "눈썹을 치켜세우고, 입꼬리를 말아 올리며 장난기 가득한 미소를 짓고 있다. 마치 태영을 놀려주려는 듯한 표정으로 눈을 반짝이며 말했다.",
                background: "nayoung1.jpg",
                choices: null
            },
            {
                speaker: "???",
                text: "어머! 지금지금 엄청 피곤하신데! 우리 아버지를 깨우지 마세요!",
                background: "nayoung1.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "태영은 또 놀라서 이마를 탁! 하고 짚었다.",
                background: "taeyoungtak.jpg",
                choices: null
            },
            {
                speaker: "태영",
                text: "예..? 저는 단순히 밖에 시끄러운 소리가 궁금해서...",
                background: "taeyoungnomal.jpg",
                choices: null
            },
            {
                speaker: "???",
                text: "어머! 공사니까 당연히 시끄럽지 않을까요?",
                background: "nayoung1.jpg",
                choices: null
            },
            {
                speaker: "태영",
                text: "(뭐지..)",
                background: "taeyoungnomal.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "태영은 당황스러웠지만 맞는 말이기도 해서 반박할 수 없었다..",
                background: "taeyoungtak.jpg",
                choices: null
            },
            {
                speaker: "태영",
                text: "아.. 그렇군요 수고하십쇼..",
                background: "taeyoung.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "태영은 다시 방으로 돌아왔다.",
                background: "chapter1.jpg",
                nextChapter: "chapter2", // 챕터2로 전환
                choices: null
            },
            // 23번 인덱스 시작 (그냥 체념하고 다시 집에가는 선택지)
            {
                speaker: "내레이션",
                text: "집에 돌아와 다시 침대에 누웠지만 찜찜한 느낌을 감출 수 없었다.",
                background: "chapter1.jpg",
                choices: null
            },
            {
                speaker: "태영",
                text: "(아 뭔가 진짜 찜찜한데..)",
                background: "chapter1.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "그렇게 태영은 잠이 들었다.",
                background: "chapter1.jpg",
                choices: null
            },
            {
                speaker: "내레이션",
                text: "이렇게 태영의 첫 인연은 그렇게 스쳐지나갔다...",
                background: "ending.jpg",
                isEnding: true,
            }
        ]
    }
};