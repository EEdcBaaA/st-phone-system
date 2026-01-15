window.STPhone = window.STPhone || {};
window.STPhone.Apps = window.STPhone.Apps || {};

window.STPhone.Apps.Gifts = (function() {
    'use strict';

    const APP_ID = 'gifts';
    const APP_NAME = '선물하기';
    const APP_ICON = '🎁';
    const APP_DESC = '소중한 사람에게 선물을 보내세요';

    // 브랜드 및 상품 데이터
    const brands = [
        {
            id: 'luxury',
            name: '명품 브랜드',
            icon: '💎',
            color: '#1a1a2e',
            description: '최고급 럭셔리 브랜드',
            categories: [
                {
                    name: 'Louis Vuitton',
                    icon: '👜',
                    items: [
                        { name: 'LV 네버풀 MM', price: 2150000, emoji: '👜', desc: '클래식 토트백' },
                        { name: 'LV 스피디 반둘리에 25', price: 2450000, emoji: '👝', desc: '아이코닉 핸드백' },
                        { name: 'LV 모노그램 지갑', price: 890000, emoji: '👛', desc: '장지갑' },
                        { name: 'LV 키폴 50', price: 2650000, emoji: '🧳', desc: '여행용 더플백' },
                        { name: 'LV 실크 스카프', price: 650000, emoji: '🧣', desc: '모노그램 패턴' },
                    ]
                },
                {
                    name: 'Gucci',
                    icon: '🐍',
                    items: [
                        { name: '구찌 GG 마몽 숄더백', price: 3200000, emoji: '👜', desc: '퀼팅 레더' },
                        { name: '구찌 에이스 스니커즈', price: 890000, emoji: '👟', desc: '클래식 화이트' },
                        { name: '구찌 GG 벨트', price: 580000, emoji: '🎀', desc: '인터로킹 버클' },
                        { name: '구찌 플로라 향수', price: 165000, emoji: '🌸', desc: '50ml EDP' },
                        { name: '구찌 선글라스', price: 420000, emoji: '🕶️', desc: '오버사이즈 프레임' },
                    ]
                },
                {
                    name: 'Chanel',
                    icon: '🖤',
                    items: [
                        { name: '샤넬 클래식 플랩백 미디움', price: 11800000, emoji: '👜', desc: '캐비어 블랙' },
                        { name: '샤넬 N°5 향수', price: 198000, emoji: '✨', desc: '100ml EDP' },
                        { name: '샤넬 르 베르니 네일', price: 42000, emoji: '💅', desc: '피통 드레' },
                        { name: '샤넬 코코 마드모아젤', price: 185000, emoji: '🌹', desc: '50ml EDP' },
                        { name: '샤넬 진주 목걸이', price: 1250000, emoji: '📿', desc: 'CC 로고' },
                    ]
                },
                {
                    name: 'Hermès',
                    icon: '🧡',
                    items: [
                        { name: '에르메스 버킨 25', price: 15000000, emoji: '👜', desc: '토고 레더' },
                        { name: '에르메스 켈리 28', price: 13500000, emoji: '👝', desc: '엡솜 레더' },
                        { name: '에르메스 실크 스카프', price: 580000, emoji: '🧣', desc: '카레 90' },
                        { name: '에르메스 클릭 H 팔찌', price: 890000, emoji: '⌚', desc: '에나멜' },
                        { name: '에르메스 뗏르 데르메스', price: 175000, emoji: '🌍', desc: '75ml EDT' },
                    ]
                },
                {
                    name: 'Prada',
                    icon: '🔺',
                    items: [
                        { name: '프라다 리에디션 2005', price: 1850000, emoji: '👜', desc: '나일론 숄더백' },
                        { name: '프라다 사피아노 지갑', price: 750000, emoji: '👛', desc: '로고 플레이트' },
                        { name: '프라다 클라우드버스트', price: 980000, emoji: '👟', desc: '썬더 스니커즈' },
                        { name: '프라다 캔디 향수', price: 145000, emoji: '🍬', desc: '50ml EDP' },
                        { name: '프라다 선글라스', price: 380000, emoji: '🕶️', desc: '시네마 컬렉션' },
                    ]
                },
                {
                    name: 'Rolex',
                    icon: '⌚',
                    items: [
                        { name: '롤렉스 서브마리너', price: 15800000, emoji: '⌚', desc: '데이트 블랙' },
                        { name: '롤렉스 데이토나', price: 45000000, emoji: '⌚', desc: '화이트 골드' },
                        { name: '롤렉스 GMT 마스터 II', price: 18500000, emoji: '⌚', desc: '펩시 베젤' },
                        { name: '롤렉스 데이저스트 41', price: 12500000, emoji: '⌚', desc: '주빌리 브레이슬릿' },
                        { name: '롤렉스 스카이드웰러', price: 55000000, emoji: '⌚', desc: '옐로 골드' },
                    ]
                },
                {
                    name: 'Patek Philippe',
                    icon: '👑',
                    items: [
                        { name: '파텍 노틸러스 5711', price: 180000000, emoji: '⌚', desc: '블루 다이얼' },
                        { name: '파텍 아쿠아넛', price: 85000000, emoji: '⌚', desc: '스포츠 럭셔리' },
                        { name: '파텍 칼라트라바', price: 45000000, emoji: '⌚', desc: '클래식 드레스워치' },
                        { name: '파텍 그랜드 컴플리케이션', price: 550000000, emoji: '⌚', desc: '미닛 리피터' },
                    ]
                },
                {
                    name: 'Tom Ford',
                    icon: '🕴️',
                    items: [
                        { name: '톰포드 수트 재킷', price: 4500000, emoji: '🧥', desc: '울 블렌드' },
                        { name: '톰포드 옴브레 레더', price: 450000, emoji: '🌙', desc: '50ml EDP' },
                        { name: '톰포드 선글라스', price: 520000, emoji: '🕶️', desc: '아비에이터' },
                        { name: '톰포드 가죽 벨트', price: 680000, emoji: '🔲', desc: '블랙 레더' },
                        { name: '톰포드 브리프케이스', price: 3200000, emoji: '💼', desc: '서류가방' },
                    ]
                },
                {
                    name: 'Berluti',
                    icon: '👞',
                    items: [
                        { name: '베를루티 알레산드로', price: 2800000, emoji: '👞', desc: '옥스포드 슈즈' },
                        { name: '베를루티 드라이빙 슈즈', price: 1450000, emoji: '👟', desc: '베네치안 레더' },
                        { name: '베를루티 카드지갑', price: 890000, emoji: '💳', desc: '파티나 레더' },
                        { name: '베를루티 토트백', price: 4500000, emoji: '👜', desc: '스크리토 레더' },
                    ]
                },
                {
                    name: 'Brioni',
                    icon: '👔',
                    items: [
                        { name: '브리오니 비스포크 수트', price: 12000000, emoji: '🤵', desc: '맞춤 정장' },
                        { name: '브리오니 실크 넥타이', price: 380000, emoji: '👔', desc: '핸드메이드' },
                        { name: '브리오니 캐시미어 코트', price: 8500000, emoji: '🧥', desc: '오버코트' },
                        { name: '브리오니 드레스 셔츠', price: 750000, emoji: '👕', desc: '씨아일랜드 코튼' },
                    ]
                }
            ]
        },
        {
            id: 'ultra_luxury',
            name: '초고가 컬렉션',
            icon: '💰',
            color: '#FFD700',
            description: '최상위 럭셔리 아이템',
            categories: [
                {
                    name: '슈퍼카',
                    icon: '🏎️',
                    items: [
                        { name: '람보르기니 우루스', price: 280000000, emoji: '🏎️', desc: 'SUV 슈퍼카' },
                        { name: '페라리 296 GTB', price: 380000000, emoji: '🏎️', desc: 'V6 하이브리드' },
                        { name: '롤스로이스 팬텀', price: 680000000, emoji: '🚗', desc: '최고급 세단' },
                        { name: '벤틀리 컨티넨탈 GT', price: 350000000, emoji: '🚙', desc: 'W12 쿠페' },
                        { name: '부가티 시론', price: 3500000000, emoji: '🏎️', desc: '하이퍼카' },
                        { name: '맥라렌 720S', price: 450000000, emoji: '🏎️', desc: '스파이더' },
                    ]
                },
                {
                    name: '요트 & 제트',
                    icon: '🛥️',
                    items: [
                        { name: '프린세스 요트 Y85', price: 8500000000, emoji: '🛥️', desc: '85피트 모터요트' },
                        { name: '선시커 프레데터 74', price: 6500000000, emoji: '🚤', desc: '스포츠 요트' },
                        { name: '걸프스트림 G700', price: 85000000000, emoji: '✈️', desc: '프라이빗 제트' },
                        { name: '봄바디어 글로벌 7500', price: 75000000000, emoji: '✈️', desc: '장거리 비즈니스젯' },
                    ]
                },
                {
                    name: '부동산',
                    icon: '🏠',
                    items: [
                        { name: '럭셔리 펜트하우스', price: 85000000000, emoji: '🏢', desc: '최상층 복층 300평' },
                        { name: '프라이빗 단독주택', price: 45000000000, emoji: '🏠', desc: '500평 대지' },
                        { name: '오션뷰 빌라', price: 15000000000, emoji: '🏖️', desc: '프라이빗 비치' },
                        { name: '리조트 빌라', price: 35000000000, emoji: '🏝️', desc: '비치프론트' },
                    ]
                },
                {
                    name: '주얼리 & 아트',
                    icon: '💍',
                    items: [
                        { name: '해리 윈스턴 다이아몬드 링', price: 2500000000, emoji: '💍', desc: '10캐럿 D컬러' },
                        { name: '그라프 핑크 다이아', price: 8500000000, emoji: '💎', desc: '15캐럿 팬시 핑크' },
                        { name: '반클리프 아펠 네클리스', price: 1200000000, emoji: '📿', desc: '알함브라 풀세트' },
                        { name: '피카소 오리지널 회화', price: 150000000000, emoji: '🖼️', desc: '진품 보증' },
                        { name: '앤디 워홀 실크스크린', price: 45000000000, emoji: '🎨', desc: '마릴린 시리즈' },
                    ]
                }
            ]
        },
        {
            id: 'temu',
            name: 'Temu',
            icon: '🛒',
            color: '#ff6f00',
            description: '가격파괴! 엉뚱한 물건 천국',
            categories: [
                {
                    name: '기묘한 발견',
                    icon: '🤪',
                    items: [
                        { name: '애완돌멩이', price: 2900, emoji: '🪨', desc: '눈알 스티커 포함, 이름표 증정' },
                        { name: '무지개 발가락 양말', price: 1500, emoji: '🧦', desc: '5켤레 세트, 발가락 분리형' },
                        { name: 'LED 눈썹', price: 3900, emoji: '✨', desc: '파티용, 7가지 색상 변환' },
                        { name: 'USB 충전식 전기뱀', price: 8900, emoji: '🐍', desc: '리모컨 조종, 꿈틀꿈틀' },
                        { name: '손가락 헬스기구', price: 4500, emoji: '💪', desc: '손가락 식스팩 만들기' },
                        { name: '미니 낚시대 볼펜', price: 2200, emoji: '🎣', desc: '진짜 줄이 감김' },
                        { name: '감자 스트레스볼', price: 1800, emoji: '🥔', desc: '진짜 감자같은 촉감' },
                        { name: '투명 우산 드론', price: 15900, emoji: '☂️', desc: '손잡이가 필요없는 우산' },
                    ]
                },
                {
                    name: '알리 특가',
                    icon: '💰',
                    items: [
                        { name: '256GB USB (실제 4GB)', price: 3900, emoji: '💾', desc: '용량의 진실은...' },
                        { name: '1000W 무선청소기', price: 12900, emoji: '🔌', desc: '(실제 50W)' },
                        { name: '고양이 귀 헤드폰', price: 8900, emoji: '🐱', desc: 'RGB 빛남' },
                        { name: '레이저 고양이 장난감', price: 2500, emoji: '🔴', desc: '배터리 미포함' },
                        { name: '팽이 라면 포크', price: 1200, emoji: '🍜', desc: '한손으로 라면을' },
                        { name: '모기 퇴치 팔찌', price: 990, emoji: '🦟', desc: '효과는 랜덤' },
                    ]
                },
                {
                    name: '패션(?)',
                    icon: '👗',
                    items: [
                        { name: '민트초코 슬리퍼', price: 4900, emoji: '🩴', desc: '달콤한 디자인' },
                        { name: '물고기 슬리퍼', price: 5500, emoji: '🐟', desc: '실제 크기' },
                        { name: '야광 바지', price: 12900, emoji: '👖', desc: '밤에 빛남' },
                        { name: '풍선껌 핑크 가발', price: 7900, emoji: '💇', desc: '코스프레용' },
                        { name: '투명 백팩', price: 8900, emoji: '🎒', desc: '소지품 공개처형' },
                    ]
                }
            ]
        },
        {
            id: 'apple',
            name: 'Apple',
            icon: '🍎',
            color: '#333333',
            description: '혁신의 아이콘',
            categories: [
                {
                    name: 'iPhone',
                    icon: '📱',
                    items: [
                        { name: 'iPhone 16 Pro Max', price: 1900000, emoji: '📱', desc: '256GB 티타늄' },
                        { name: 'iPhone 16 Pro', price: 1550000, emoji: '📱', desc: '128GB' },
                        { name: 'iPhone 16', price: 1250000, emoji: '📱', desc: '128GB' },
                    ]
                },
                {
                    name: '악세서리',
                    icon: '🎧',
                    items: [
                        { name: 'AirPods Pro 2', price: 359000, emoji: '🎧', desc: 'USB-C' },
                        { name: 'AirPods Max', price: 769000, emoji: '🎧', desc: '스페이스 그레이' },
                        { name: 'Apple Watch Ultra 2', price: 1149000, emoji: '⌚', desc: '49mm' },
                        { name: 'Apple Watch Series 10', price: 599000, emoji: '⌚', desc: '42mm' },
                        { name: 'MagSafe 충전기', price: 55000, emoji: '🔋', desc: '15W' },
                    ]
                },
                {
                    name: 'Mac',
                    icon: '💻',
                    items: [
                        { name: 'MacBook Air 15"', price: 1890000, emoji: '💻', desc: 'M3 칩' },
                        { name: 'MacBook Pro 14"', price: 2390000, emoji: '💻', desc: 'M3 Pro' },
                        { name: 'iMac 24"', price: 1990000, emoji: '🖥️', desc: 'M3 칩' },
                        { name: 'Mac mini', price: 850000, emoji: '🖥️', desc: 'M2 칩' },
                    ]
                }
            ]
        },
        {
            id: 'starbucks',
            name: 'Starbucks',
            icon: '☕',
            color: '#00704A',
            description: '따뜻한 마음을 전하세요',
            categories: [
                {
                    name: '기프트카드',
                    icon: '🎁',
                    items: [
                        { name: '스타벅스 e카드 1만원', price: 10000, emoji: '💳', desc: '모바일 상품권' },
                        { name: '스타벅스 e카드 3만원', price: 30000, emoji: '💳', desc: '모바일 상품권' },
                        { name: '스타벅스 e카드 5만원', price: 50000, emoji: '💳', desc: '모바일 상품권' },
                    ]
                },
                {
                    name: '음료 교환권',
                    icon: '🥤',
                    items: [
                        { name: '아메리카노 Tall', price: 4500, emoji: '☕', desc: '아이스/핫 선택' },
                        { name: '카페라떼 Tall', price: 5000, emoji: '☕', desc: '아이스/핫 선택' },
                        { name: '카라멜 마끼아또 Tall', price: 5900, emoji: '🥛', desc: '시그니처' },
                        { name: '자바칩 프라푸치노 Tall', price: 6300, emoji: '🧊', desc: '블렌디드' },
                    ]
                },
                {
                    name: 'MD 상품',
                    icon: '🏪',
                    items: [
                        { name: '스타벅스 텀블러', price: 35000, emoji: '🥤', desc: '스테인리스 473ml' },
                        { name: '스타벅스 머그컵', price: 23000, emoji: '☕', desc: '시즌 리미티드' },
                        { name: '스타벅스 에코백', price: 18000, emoji: '👜', desc: '캔버스' },
                    ]
                }
            ]
        },
        {
            id: 'nike',
            name: 'Nike',
            icon: '✓',
            color: '#111111',
            description: 'Just Do It',
            categories: [
                {
                    name: '운동화',
                    icon: '👟',
                    items: [
                        { name: '에어포스 1 07', price: 139000, emoji: '👟', desc: '화이트' },
                        { name: '에어맥스 90', price: 179000, emoji: '👟', desc: '클래식' },
                        { name: '덩크 로우', price: 139000, emoji: '👟', desc: '판다 컬러' },
                        { name: '조던 1 레트로 하이', price: 209000, emoji: '👟', desc: 'OG' },
                        { name: '에어맥스 97', price: 199000, emoji: '👟', desc: '실버 불릿' },
                    ]
                },
                {
                    name: '의류',
                    icon: '👕',
                    items: [
                        { name: '나이키 테크 플리스 후디', price: 159000, emoji: '🧥', desc: '블랙' },
                        { name: '나이키 드라이핏 티셔츠', price: 45000, emoji: '👕', desc: '트레이닝' },
                        { name: '나이키 조거팬츠', price: 89000, emoji: '👖', desc: '스우시' },
                    ]
                },
                {
                    name: '가방',
                    icon: '🎒',
                    items: [
                        { name: '나이키 헤리티지 백팩', price: 55000, emoji: '🎒', desc: '25L' },
                        { name: '나이키 브라질리아 더플백', price: 49000, emoji: '👜', desc: 'M사이즈' },
                    ]
                }
            ]
        },
        {
            id: 'delivery',
            name: '배달의민족',
            icon: '🛵',
            color: '#2AC1BC',
            description: '맛있는 선물',
            categories: [
                {
                    name: '기프티콘',
                    icon: '🎫',
                    items: [
                        { name: '배민 상품권 1만원', price: 10000, emoji: '💳', desc: '모든 음식점 사용가능' },
                        { name: '배민 상품권 3만원', price: 30000, emoji: '💳', desc: '모든 음식점 사용가능' },
                        { name: '배민 상품권 5만원', price: 50000, emoji: '💳', desc: '모든 음식점 사용가능' },
                        { name: 'B마트 상품권 2만원', price: 20000, emoji: '🏪', desc: '편의점/마트' },
                    ]
                }
            ]
        },
        {
            id: 'cgv',
            name: 'CGV',
            icon: '🎬',
            color: '#E71A0F',
            description: '영화의 즐거움',
            categories: [
                {
                    name: '영화 티켓',
                    icon: '🎟️',
                    items: [
                        { name: 'CGV 영화 예매권', price: 14000, emoji: '🎫', desc: '2D 일반' },
                        { name: 'CGV 영화 예매권 2매', price: 26000, emoji: '🎫', desc: '커플 패키지' },
                        { name: 'IMAX 영화 예매권', price: 18000, emoji: '🎬', desc: '프리미엄' },
                        { name: '4DX 영화 예매권', price: 22000, emoji: '🎢', desc: '체감형' },
                    ]
                },
                {
                    name: '콤보',
                    icon: '🍿',
                    items: [
                        { name: '팝콘 콤보 M', price: 9500, emoji: '🍿', desc: '팝콘+음료' },
                        { name: '팝콘 콤보 L', price: 11500, emoji: '🍿', desc: '라지 사이즈' },
                        { name: '더블콤보', price: 16000, emoji: '🍿', desc: '팝콘2+음료2' },
                    ]
                }
            ]
        },
        {
            id: 'beauty',
            name: '뷰티 브랜드',
            icon: '💄',
            color: '#FF69B4',
            description: '아름다움을 선물하세요',
            categories: [
                {
                    name: 'MAC',
                    icon: '💋',
                    items: [
                        { name: 'MAC 립스틱', price: 38000, emoji: '💄', desc: '루비 우' },
                        { name: 'MAC 파운데이션', price: 52000, emoji: '🪞', desc: '스튜디오 픽스' },
                    ]
                },
                {
                    name: '설화수',
                    icon: '🌸',
                    items: [
                        { name: '윤조에센스', price: 125000, emoji: '✨', desc: '90ml' },
                        { name: '자음생크림', price: 180000, emoji: '🫧', desc: '60ml' },
                        { name: '퍼펙팅쿠션', price: 65000, emoji: '💫', desc: '15g*2' },
                    ]
                },
                {
                    name: '이솝',
                    icon: '🍃',
                    items: [
                        { name: '레저렉션 핸드밤', price: 37000, emoji: '🖐️', desc: '75ml' },
                        { name: '이솝 테싯 향수', price: 195000, emoji: '🌿', desc: '50ml' },
                        { name: '파슬리 시드 세럼', price: 85000, emoji: '💧', desc: '100ml' },
                    ]
                }
            ]
        },
        {
            id: 'dessert',
            name: '디저트 & 베이커리',
            icon: '🍰',
            color: '#FFA07A',
            description: '달콤한 선물',
            categories: [
                {
                    name: '두바이 초콜릿',
                    icon: '🍫',
                    items: [
                        { name: '두바이 쫀득 쿠키', price: 9000, emoji: '🍪', desc: '피스타치오 크림' },
                        { name: 'Fix 두바이 초콜릿', price: 35000, emoji: '🍫', desc: '카다이프 피스타치오' },
                        { name: 'N.Y.C 두바이 초콜릿', price: 28000, emoji: '🍫', desc: '헤이즐넛 크런치' },
                        { name: '수제 두바이 초콜릿 세트', price: 89000, emoji: '🎁', desc: '6개입 선물세트' },
                    ]
                },
                {
                    name: '고급 케이크',
                    icon: '🎂',
                    items: [
                        { name: '레이디 M 밀크레이프', price: 75000, emoji: '🍰', desc: '시그니처' },
                        { name: '빠띠빠띠 마카롱 세트', price: 45000, emoji: '🧁', desc: '12개입' },
                        { name: '오설록 말차 케이크', price: 38000, emoji: '🍵', desc: '제주 말차' },
                        { name: '피에르 에르메 마카롱', price: 52000, emoji: '🍬', desc: '6개입' },
                        { name: '고디바 트뤼플 박스', price: 65000, emoji: '🍫', desc: '24개입' },
                    ]
                },
                {
                    name: '명품 빵집',
                    icon: '🥐',
                    items: [
                        { name: '에릭케제르 크루아상 세트', price: 42000, emoji: '🥐', desc: '6개입' },
                        { name: '밀도 식빵', price: 15000, emoji: '🍞', desc: '프리미엄 식빵' },
                        { name: '폴 바게트 세트', price: 28000, emoji: '🥖', desc: '프랑스산 밀가루' },
                        { name: '장블랑제리 스콘 세트', price: 32000, emoji: '🧁', desc: '8개입' },
                    ]
                }
            ]
        },
        {
            id: 'flower',
            name: '꽃 & 플라워',
            icon: '💐',
            color: '#FF6B6B',
            description: '마음을 전하는 꽃다발',
            categories: [
                {
                    name: '꽃다발',
                    icon: '💐',
                    items: [
                        { name: '프리미엄 장미 100송이', price: 350000, emoji: '🌹', desc: '에콰도르산 장미' },
                        { name: '프로포즈 부케', price: 180000, emoji: '💐', desc: '99송이 장미' },
                        { name: '계절 꽃다발 M', price: 65000, emoji: '💐', desc: '제철 꽃' },
                        { name: '계절 꽃다발 L', price: 95000, emoji: '💐', desc: '풍성한 구성' },
                        { name: '카네이션 바구니', price: 75000, emoji: '🌷', desc: '50송이' },
                    ]
                },
                {
                    name: '화분 & 식물',
                    icon: '🪴',
                    items: [
                        { name: '몬스테라 화분', price: 45000, emoji: '🪴', desc: '중형' },
                        { name: '올리브 나무', price: 85000, emoji: '🌿', desc: '대형' },
                        { name: '오렌지 재스민', price: 35000, emoji: '🌼', desc: '소형' },
                        { name: '다육이 세트', price: 28000, emoji: '🌵', desc: '5종 세트' },
                    ]
                }
            ]
        }
    ];

    // 환율 정의 (KRW 기준)
    const EXCHANGE_RATES = {
        KRW: 1,
        USD: 1350,
        EUR: 1450,
        JPY: 9,
        GBP: 1700,
        CNY: 185
    };

    const CURRENCY_SYMBOLS = {
        KRW: '원',
        USD: '$',
        EUR: '€',
        JPY: '¥',
        GBP: '£',
        CNY: '¥'
    };

    const css = `
        <style>
            .st-gifts-app {
                position: absolute; top: 0; left: 0;
                width: 100%; height: 100%;
                background: var(--pt-bg-color, #f5f5f7);
                color: var(--pt-text-color, #000);
                font-family: var(--pt-font, -apple-system, sans-serif);
                display: flex; flex-direction: column;
                z-index: 999;
            }
            .st-gifts-header {
                padding: 20px;
                font-size: 28px;
                font-weight: 700;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .st-gifts-back {
                width: 36px; height: 36px;
                border-radius: 50%;
                border: none;
                background: var(--pt-card-bg, #fff);
                color: var(--pt-text-color, #000);
                font-size: 18px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .st-gifts-balance {
                margin-left: auto;
                font-size: 14px;
                font-weight: 500;
                color: var(--pt-accent, #007aff);
                background: var(--pt-card-bg, #fff);
                padding: 8px 15px;
                border-radius: 20px;
            }
            .st-gifts-content {
                flex: 1;
                overflow-y: auto;
                padding: 0 20px 100px;
            }
            .st-gifts-brand-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }
            .st-gifts-brand-card {
                background: var(--pt-card-bg, #fff);
                border-radius: 16px;
                padding: 20px;
                cursor: pointer;
                transition: transform 0.2s, box-shadow 0.2s;
                text-align: center;
            }
            .st-gifts-brand-card:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            }
            .st-gifts-brand-icon {
                font-size: 40px;
                margin-bottom: 10px;
            }
            .st-gifts-brand-name {
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 4px;
            }
            .st-gifts-brand-desc {
                font-size: 12px;
                color: var(--pt-sub-text, #86868b);
            }
            /* 카테고리 화면 */
            .st-gifts-category-list {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
            .st-gifts-category-card {
                background: var(--pt-card-bg, #fff);
                border-radius: 16px;
                padding: 20px;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 15px;
            }
            .st-gifts-category-icon {
                font-size: 30px;
            }
            .st-gifts-category-name {
                font-size: 18px;
                font-weight: 600;
            }
            /* 상품 목록 */
            .st-gifts-item-list {
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
            .st-gifts-item {
                background: var(--pt-card-bg, #fff);
                border-radius: 14px;
                padding: 16px;
                display: flex;
                align-items: center;
                gap: 15px;
            }
            .st-gifts-item-emoji {
                font-size: 36px;
                width: 50px;
                text-align: center;
            }
            .st-gifts-item-info {
                flex: 1;
            }
            .st-gifts-item-name {
                font-size: 15px;
                font-weight: 600;
                margin-bottom: 4px;
            }
            .st-gifts-item-desc {
                font-size: 12px;
                color: var(--pt-sub-text, #86868b);
                margin-bottom: 4px;
            }
            .st-gifts-item-price {
                font-size: 14px;
                font-weight: 700;
                color: var(--pt-accent, #007aff);
            }
            .st-gifts-item-btn {
                padding: 10px 20px;
                border-radius: 20px;
                border: none;
                background: var(--pt-accent, #007aff);
                color: white;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
            }
            .st-gifts-item-btn:disabled {
                background: #ccc;
                cursor: not-allowed;
            }
            /* 연락처 선택 모달 */
            .st-gifts-modal-overlay {
                position: fixed;
                top: 0; left: 0;
                width: 100%; height: 100%;
                background: rgba(0,0,0,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
            }
            .st-gifts-modal {
                background: var(--pt-bg-color, #fff);
                border-radius: 20px;
                width: 90%;
                max-width: 350px;
                max-height: 70vh;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }
            .st-gifts-modal-header {
                padding: 20px;
                font-size: 18px;
                font-weight: 600;
                border-bottom: 1px solid var(--pt-border, #e5e5e5);
                text-align: center;
            }
            .st-gifts-modal-content {
                flex: 1;
                overflow-y: auto;
                padding: 15px;
            }
            .st-gifts-contact-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 12px;
                border-radius: 12px;
                cursor: pointer;
                margin-bottom: 8px;
            }
            .st-gifts-contact-item:hover {
                background: var(--pt-card-bg, #f0f0f0);
            }
            .st-gifts-contact-avatar {
                width: 45px; height: 45px;
                border-radius: 50%;
                object-fit: cover;
            }
            .st-gifts-contact-name {
                font-size: 15px;
                font-weight: 500;
            }
            .st-gifts-modal-close {
                padding: 15px;
                text-align: center;
                border-top: 1px solid var(--pt-border, #e5e5e5);
                color: var(--pt-accent, #007aff);
                font-weight: 600;
                cursor: pointer;
            }
            /* 확인 모달 */
            .st-gifts-confirm {
                padding: 25px;
                text-align: center;
            }
            .st-gifts-confirm-item {
                font-size: 40px;
                margin-bottom: 15px;
            }
            .st-gifts-confirm-name {
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 5px;
            }
            .st-gifts-confirm-price {
                font-size: 20px;
                font-weight: 700;
                color: var(--pt-accent, #007aff);
                margin-bottom: 15px;
            }
            .st-gifts-confirm-recipient {
                font-size: 14px;
                color: var(--pt-sub-text, #86868b);
                margin-bottom: 20px;
            }
            .st-gifts-confirm-btns {
                display: flex;
                gap: 10px;
            }
            .st-gifts-confirm-btn {
                flex: 1;
                padding: 14px;
                border-radius: 12px;
                border: none;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
            }
            .st-gifts-confirm-btn.cancel {
                background: var(--pt-card-bg, #e5e5e5);
                color: var(--pt-text-color, #000);
            }
            .st-gifts-confirm-btn.confirm {
                background: var(--pt-accent, #007aff);
                color: white;
            }
                /* 기프티콘 카드 스타일 */
            .st-gift-card {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 16px;
                padding: 16px;
                max-width: 240px;
                color: white;
                box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
                position: relative;
                overflow: hidden;
            }
            .st-gift-card::before {
                content: '';
                position: absolute;
                top: -50%;
                right: -50%;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                pointer-events: none;
            }
            .st-gift-card-header {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 12px;
                font-size: 12px;
                opacity: 0.9;
            }
            .st-gift-card-header i {
                font-size: 14px;
            }
            .st-gift-card-item {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;
            }
            .st-gift-card-emoji {
                font-size: 32px;
                filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
            }
            .st-gift-card-info {
                flex: 1;
            }
            .st-gift-card-name {
                font-weight: 600;
                font-size: 15px;
                margin-bottom: 2px;
                text-shadow: 0 1px 2px rgba(0,0,0,0.2);
            }
            .st-gift-card-desc {
                font-size: 11px;
                opacity: 0.85;
            }
            .st-gift-card-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 12px;
                border-top: 1px solid rgba(255,255,255,0.2);
            }
            .st-gift-card-brand {
                font-size: 12px;
                opacity: 0.9;
            }
            .st-gift-card-price {
                font-weight: 700;
                font-size: 16px;
                text-shadow: 0 1px 2px rgba(0,0,0,0.2);
            }
            .st-gift-card-ribbon {
                position: absolute;
                top: 12px;
                right: -28px;
                background: #ff6b6b;
                color: white;
                font-size: 10px;
                font-weight: 600;
                padding: 4px 30px;
                transform: rotate(45deg);
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            }
        </style>
    `;

    // 현재 화폐 가져오기 (은행 앱에서)
    function getCurrentCurrency() {
        return window.STPhone.Apps?.Bank?.getCurrency?.() || 'KRW';
    }

    // 가격 포맷 (환율 적용)
    function formatPrice(priceKRW) {
        const currency = getCurrentCurrency();
        const rate = EXCHANGE_RATES[currency] || 1;
        const symbol = CURRENCY_SYMBOLS[currency] || '원';

        // KRW를 현재 화폐로 변환
        let convertedPrice = priceKRW / rate;

        // 소수점 처리
        if (['USD', 'EUR', 'GBP'].includes(currency)) {
            convertedPrice = Math.round(convertedPrice * 100) / 100;
            return symbol + convertedPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else if (currency === 'JPY' || currency === 'CNY') {
            convertedPrice = Math.round(convertedPrice);
            return symbol + convertedPrice.toLocaleString('ja-JP');
        } else {
            // KRW
            return priceKRW.toLocaleString('ko-KR') + symbol;
        }
    }

    // 가격 비교용 (KRW 기준)
    function convertToKRW(price) {
        const currency = getCurrentCurrency();
        const rate = EXCHANGE_RATES[currency] || 1;
        return Math.round(price * rate);
    }

    function getBalance() {
        return window.STPhone.Apps?.Bank?.getBalance?.() || 0;
    }

    // 잔액을 KRW로 환산 (비교용)
    function getBalanceInKRW() {
        const balance = getBalance();
        const currency = getCurrentCurrency();
        const rate = EXCHANGE_RATES[currency] || 1;
        return Math.round(balance * rate);
    }

    function showBrandList($content) {
        const html = `
            <div class="st-gifts-brand-grid">
                ${brands.map(brand => `
                    <div class="st-gifts-brand-card" data-brand="${brand.id}" style="border-left: 4px solid ${brand.color}">
                        <div class="st-gifts-brand-icon">${brand.icon}</div>
                        <div class="st-gifts-brand-name">${brand.name}</div>
                        <div class="st-gifts-brand-desc">${brand.description}</div>
                    </div>
                `).join('')}
            </div>
        `;
        $content.html(html);

        $('.st-gifts-brand-card').on('click', function() {
            const brandId = $(this).data('brand');
            showCategoryList($content, brandId);
        });
    }

    function showCategoryList($content, brandId) {
        const brand = brands.find(b => b.id === brandId);
        if (!brand) return;

        const html = `
            <div class="st-gifts-category-list">
                ${brand.categories.map((cat, idx) => `
                    <div class="st-gifts-category-card" data-brand="${brandId}" data-cat="${idx}">
                        <div class="st-gifts-category-icon">${cat.icon}</div>
                        <div class="st-gifts-category-name">${cat.name}</div>
                    </div>
                `).join('')}
            </div>
        `;
        $content.html(html);

        // 헤더 업데이트
        $('.st-gifts-header .st-gifts-title').text(`${brand.icon} ${brand.name}`);
        $('.st-gifts-back').data('level', 'brand').data('brand', brandId);

        $('.st-gifts-category-card').on('click', function() {
            const catIdx = $(this).data('cat');
            showItemList($content, brandId, catIdx);
        });
    }

    function showItemList($content, brandId, catIdx) {
        const brand = brands.find(b => b.id === brandId);
        if (!brand) return;
        const category = brand.categories[catIdx];
        if (!category) return;

        const balanceInKRW = getBalanceInKRW();

        const html = `
            <div class="st-gifts-item-list">
                ${category.items.map((item, idx) => `
                    <div class="st-gifts-item">
                        <div class="st-gifts-item-emoji">${item.emoji}</div>
                        <div class="st-gifts-item-info">
                            <div class="st-gifts-item-name">${item.name}</div>
                            <div class="st-gifts-item-desc">${item.desc}</div>
                            <div class="st-gifts-item-price">${formatPrice(item.price)}</div>
                        </div>
                        <button class="st-gifts-item-btn" data-brand="${brandId}" data-cat="${catIdx}" data-item="${idx}" ${item.price > balanceInKRW ? 'disabled' : ''}>
                            선물
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
        $content.html(html);

        // 헤더 업데이트
        $('.st-gifts-header .st-gifts-title').text(`${category.icon} ${category.name}`);
        $('.st-gifts-back').data('level', 'category').data('brand', brandId).data('cat', catIdx);

        $('.st-gifts-item-btn').on('click', function() {
            const bId = $(this).data('brand');
            const cIdx = $(this).data('cat');
            const iIdx = $(this).data('item');
            showContactPicker(bId, cIdx, iIdx);
        });
    }

    function showContactPicker(brandId, catIdx, itemIdx) {
        const contacts = window.STPhone.Apps?.Contacts?.getAllContacts?.() || [];
        const DEFAULT_AVATAR = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

        // 유저 자신 제외
        const giftableContacts = contacts.filter(c => c.id !== '__st_user__');

        if (giftableContacts.length === 0) {
            toastr.warning('선물할 연락처가 없습니다');
            return;
        }

        const html = `
            <div class="st-gifts-modal-overlay" id="st-gifts-contact-modal">
                <div class="st-gifts-modal">
                    <div class="st-gifts-modal-header">🎁 누구에게 선물할까요?</div>
                    <div class="st-gifts-modal-content">
                        ${giftableContacts.map(c => `
                            <div class="st-gifts-contact-item" data-id="${c.id}">
                                <img class="st-gifts-contact-avatar" src="${c.avatar || DEFAULT_AVATAR}" onerror="this.src='${DEFAULT_AVATAR}'">
                                <div class="st-gifts-contact-name">${c.name}</div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="st-gifts-modal-close">취소</div>
                </div>
            </div>
        `;

        $('body').append(html);

        $('.st-gifts-contact-item').on('click', function() {
            const contactId = $(this).data('id');
            $('#st-gifts-contact-modal').remove();
            showConfirmModal(brandId, catIdx, itemIdx, contactId);
        });

        $('.st-gifts-modal-close, .st-gifts-modal-overlay').on('click', function(e) {
            if (e.target === this) {
                $('#st-gifts-contact-modal').remove();
            }
        });
    }

    function showConfirmModal(brandId, catIdx, itemIdx, contactId) {
        const brand = brands.find(b => b.id === brandId);
        const item = brand.categories[catIdx].items[itemIdx];
        const contact = window.STPhone.Apps?.Contacts?.getContact?.(contactId);
        const balance = getBalance();
        const balanceInKRW = getBalanceInKRW();
        const currency = getCurrentCurrency();
        const rate = EXCHANGE_RATES[currency] || 1;

        // 상품 가격을 현재 화폐로 변환
        const itemPriceConverted = item.price / rate;
        const newBalanceConverted = balance - itemPriceConverted;

        if (!item || !contact) return;

        // 잔액 표시용 포맷
        const formatBalanceDisplay = (val) => {
            const symbol = CURRENCY_SYMBOLS[currency] || '원';
            if (['USD', 'EUR', 'GBP'].includes(currency)) {
                return symbol + val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            } else if (currency === 'JPY' || currency === 'CNY') {
                return symbol + Math.round(val).toLocaleString('ja-JP');
            } else {
                return Math.round(val).toLocaleString('ko-KR') + symbol;
            }
        };

        const html = `
            <div class="st-gifts-modal-overlay" id="st-gifts-confirm-modal">
                <div class="st-gifts-modal">
                    <div class="st-gifts-modal-header">선물 확인</div>
                    <div class="st-gifts-confirm">
                        <div class="st-gifts-confirm-item">${item.emoji}</div>
                        <div class="st-gifts-confirm-name">${item.name}</div>
                        <div class="st-gifts-confirm-price">${formatPrice(item.price)}</div>
                        <div class="st-gifts-confirm-recipient">
                            <strong>${contact.name}</strong>님에게 선물합니다
                        </div>
                        <div style="font-size:12px;color:var(--pt-sub-text);margin-bottom:20px;">
                            잔액: ${formatBalanceDisplay(balance)} → ${formatBalanceDisplay(newBalanceConverted)}
                        </div>
                        <div class="st-gifts-confirm-btns">
                            <button class="st-gifts-confirm-btn cancel" id="st-gifts-cancel">취소</button>
                            <button class="st-gifts-confirm-btn confirm" id="st-gifts-send" ${item.price > balanceInKRW ? 'disabled' : ''}>선물하기</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        $('body').append(html);

        $('#st-gifts-cancel').on('click', () => $('#st-gifts-confirm-modal').remove());

        $('#st-gifts-send').on('click', async () => {
            $('#st-gifts-confirm-modal').remove();
            await sendGift(brand, item, contact);
        });
    }

    async function sendGift(brand, item, contact) {
        // 1. 잔액 차감
        const Bank = window.STPhone.Apps?.Bank;
        if (!Bank) {
            toastr.error('은행 앱을 설치해주세요');
            return;
        }

        const balanceInKRW = getBalanceInKRW();
        if (item.price > balanceInKRW) {
            toastr.error('잔액이 부족합니다');
            return;
        }

        // 출금 - 현재 화폐로 변환해서 차감
        const currency = getCurrentCurrency();
        const rate = EXCHANGE_RATES[currency] || 1;
        const amountToSubtract = item.price / rate;

        Bank.subtractBalance(amountToSubtract, `${brand.name} - ${item.name} 선물 (→ ${contact.name})`);

        // 2. 문자로 선물 알림 보내기
        const Messages = window.STPhone.Apps?.Messages;
        if (Messages) {
            // 선물 메시지 추가
            const giftMessage = `🎁 선물을 보냈어요!\n\n${item.emoji} ${item.name}\n💰 ${formatPrice(item.price)}\n\n${brand.icon} ${brand.name}에서 구매`;

            Messages.addMessage(contact.id, {
                sender: 'me',
                text: giftMessage,
                timestamp: Date.now()
            });
        }

        toastr.success(`🎁 ${contact.name}님에게 선물을 보냈습니다!`);

        // 잔액 표시 업데이트 - 현재 화폐로 표시
        const newBalance = Bank.getBalance();
        const symbol = CURRENCY_SYMBOLS[currency] || '원';
        let formattedBalance;
        if (['USD', 'EUR', 'GBP'].includes(currency)) {
            formattedBalance = symbol + newBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else if (currency === 'JPY' || currency === 'CNY') {
            formattedBalance = symbol + Math.round(newBalance).toLocaleString('ja-JP');
        } else {
            formattedBalance = Math.round(newBalance).toLocaleString('ko-KR') + symbol;
        }
        $('.st-gifts-balance').text(`💰 ${formattedBalance}`);

        // 3. 문자 앱에 선물 메시지 보내기
        await sendGiftViaMessages(brand, item, contact);
    }

    async function sendGiftViaMessages(brand, item, contact) {
        try {
            const Messages = window.STPhone.Apps?.Messages;
            if (!Messages) {
                console.error('[Gifts] Messages 앱을 찾을 수 없음');
                return;
            }

            const ctx = window.SillyTavern?.getContext?.();
            const settings = window.STPhone.Apps?.Settings?.getSettings?.() || {};
            const userName = settings.userName || ctx?.name1 || 'User';

            // 선물 메시지 구성 (기프티콘 스타일 - 특수 마커 포함)
            const giftMessage = `[GIFT_CARD]${JSON.stringify({
                itemName: item.name,
                itemEmoji: item.emoji,
                itemDesc: item.desc,
                brandName: brand.name,
                brandIcon: brand.icon,
                price: item.price,
                priceFormatted: formatPrice(item.price)
            })}[/GIFT_CARD]`;

            // 문자 앱에 유저 메시지 추가
            Messages.addMessage(contact.id, 'me', giftMessage, null, true, null, null);

            // [핵심] 히든로그에 선물 기록 추가 - AI가 기억할 수 있도록
            if (typeof Messages.addHiddenLog === 'function') {
                const giftLog = `[🎁 GIFT SENT] ${userName} sent a gift to ${contact.name}:
- Item: ${item.name} ${item.emoji}
- Brand: ${brand.name}
- Value: ${formatPrice(item.price)}
- Description: ${item.desc}
- Type: Digital Gift Voucher (기프티콘)`;
                Messages.addHiddenLog(userName, giftLog);
            }

            // AI 반응 생성
            setTimeout(async () => {
                await generateGiftResponseViaPhone(contact, brand, item, userName);
            }, 1500);

        } catch (e) {
            console.error('[Gifts] 문자 전송 실패:', e);
        }
    }

    async function generateGiftResponseViaPhone(contact, brand, item, userName) {
        try {
            const Messages = window.STPhone.Apps?.Messages;
            if (!Messages) return;

            const ctx = window.SillyTavern?.getContext?.();
            if (!ctx) {
                sendDefaultGiftResponse(contact.id);
                return;
            }

            const settings = window.STPhone.Apps?.Settings?.getSettings?.() || {};
            const prefill = settings.prefill || '';
            const maxContextTokens = settings.maxContextTokens || 4096;

            // [멀티턴 방식] 메시지 배열 구성 - messages.js의 generateReply와 동일한 방식
            const messages = [];

            // [추가] SMS 시스템 프롬프트 (폰 로직)
            const smsSystemPrompt = settings.smsSystemPrompt || '';

            // [추가] 캘린더 기념일 프롬프트
            let calendarEventsPrompt = '';
            try {
                const Store = window.STPhone?.Apps?.Store;
                if (Store && typeof Store.isInstalled === 'function' && Store.isInstalled('calendar')) {
                    const Calendar = window.STPhone?.Apps?.Calendar;
                    if (Calendar && Calendar.isCalendarEnabled && Calendar.isCalendarEnabled() && typeof Calendar.getEventsOnlyPrompt === 'function') {
                        const eventTxt = Calendar.getEventsOnlyPrompt();
                        if (eventTxt) calendarEventsPrompt = eventTxt;
                    }
                }
            } catch (calErr) {}

            // [추가] 은행 프롬프트
            let bankPrompt = '';
            try {
                const Store = window.STPhone?.Apps?.Store;
                if (Store && typeof Store.isInstalled === 'function' && Store.isInstalled('bank')) {
                    const Bank = window.STPhone?.Apps?.Bank;
                    if (Bank && typeof Bank.generateBankSystemPrompt === 'function') {
                        bankPrompt = Bank.generateBankSystemPrompt() || '';
                    }
                }
            } catch (bankErr) {}

            // [추가] 인스타그램 프롬프트
            let instagramPrompt = '';
            try {
                const Store = window.STPhone?.Apps?.Store;
                if (Store && typeof Store.isInstalled === 'function' && Store.isInstalled('instagram') && settings.instagramPostEnabled !== false) {
                    const savedPrompt = settings.instagramPrompt;
                    if (savedPrompt) {
                        instagramPrompt = savedPrompt;
                    } else {
                        instagramPrompt = `### 📸 Instagram Posting
To post on Instagram, append this tag at the END of your message:
[IG_POST]Your caption here in Korean[/IG_POST]

Example: "오늘 날씨 좋다~ [IG_POST]오늘 카페에서 작업 중! ☕️[/IG_POST]"

Rules:
- Only post when it makes sense (sharing moments, achievements, etc.)
- Caption should be casual and short (1-2 sentences, Korean)
- Do NOT include hashtags
- Do NOT post every message - only when naturally appropriate`;
                    }
                }
            } catch (igErr) {}

            // 1. 시스템 프롬프트 (캐릭터 정보 + 폰 로직 + 각종 앱 프롬프트 포함)
            const systemContent = `### Character Info
Name: ${contact.name}
Personality: ${contact.persona || '(not specified)'}

### User Info
Name: ${userName}
Personality: ${settings.userPersonality || '(not specified)'}

${smsSystemPrompt}
${calendarEventsPrompt}
${bankPrompt}
${instagramPrompt}

### Gift System
${userName} sent a digital gift voucher/e-gift card to ${contact.name} via mobile messenger.
This is NOT a physical item being shipped - it's an instant digital gift code/voucher that can be redeemed.
Think of it like a Starbucks gift card, Amazon gift card, or mobile gift certificate (기프티콘).
Even expensive items (luxury bags, cars, etc.) are sent as "digital gift vouchers" that can be redeemed at stores.

### Gift Details
- Item: ${item.name} ${item.emoji}
- Brand: ${brand.name} ${brand.icon}
- Value: ${formatPrice(item.price)}
- Description: ${item.desc}
- Type: Digital Gift Voucher / E-Gift Card (기프티콘)

### Instructions
Respond as ${contact.name} reacting to receiving this digital gift voucher via text message.
Keep it short and natural like a real text message (1-3 sentences).
Express genuine emotion based on your personality and relationship with ${userName}.
DO NOT question how expensive items can be sent via message - they are digital vouchers.
DO NOT use quotation marks. SMS style only.`;

            messages.push({ role: 'system', content: systemContent });

            // 2. 히스토리 (과거 -> 최신) - messages.js와 동일한 방식
            if (ctx.chat && ctx.chat.length > 0) {
                let currentTokens = 0;
                const tempHistory = [];

                for (let i = ctx.chat.length - 1; i >= 0; i--) {
                    const m = ctx.chat[i];
                    const msgContent = m.mes || '';
                    const estimatedTokens = Math.ceil(msgContent.length / 2.5);

                    if (currentTokens + estimatedTokens > maxContextTokens) break;

                    tempHistory.push({
                        role: m.is_user ? 'user' : 'assistant',
                        content: msgContent
                    });
                    currentTokens += estimatedTokens;
                }
                messages.push(...tempHistory.reverse());
            }

            // 3. 선물 알림 메시지
            messages.push({
                role: 'user',
                content: `[${userName} sent ${contact.name} a digital gift voucher via messenger]\n🎁 ${item.emoji} ${item.name}\n💰 ${formatPrice(item.price)}\n${brand.icon} ${brand.name}`
            });

            // 4. 프리필
            if (prefill) {
                messages.push({ role: 'assistant', content: prefill });
            }

            // AI 생성 - messages.js의 generateWithProfile 사용
            let replyText = '';
            try {
                const generateWithProfile = getGenerateWithProfile();
                if (generateWithProfile) {
                    const result = await generateWithProfile(messages, maxContextTokens);
                    replyText = String(result || '').trim();
                }
            } catch (genErr) {
                console.log('[Gifts] generateWithProfile 실패:', genErr);
            }

            // 프리필 제거
            if (prefill && replyText.startsWith(prefill.trim())) {
                replyText = replyText.substring(prefill.trim().length).trim();
            }

            // 이름 접두사 제거
            const namePrefix = `${contact.name}:`;
            if (replyText.startsWith(namePrefix)) {
                replyText = replyText.substring(namePrefix.length).trim();
            }

            // 응답 정리
            replyText = cleanGiftResponse(replyText);

            if (replyText && replyText.length > 0) {
                // 문자 앱에 AI 응답 추가
                Messages.addMessage(contact.id, 'them', replyText, null, false, null, null);

                // 알림 표시 및 배지 업데이트
                showGiftNotification(contact, replyText);

                // 히든 로그 추가
                if (typeof Messages.addHiddenLog === 'function') {
                    Messages.addHiddenLog(contact.name, `[📩 ${contact.name} -> ${userName}]: ${replyText}`);
                }

                console.log('[Gifts] AI 선물 반응 생성 완료:', replyText);
                return;
            }

            // fallback: 기본 반응
            sendDefaultGiftResponse(contact.id);

        } catch (e) {
            console.error('[Gifts] AI 반응 생성 실패:', e);
            sendDefaultGiftResponse(contact.id);
        }
    }

    // generateWithProfile 함수 가져오기 헬퍼
    function getGenerateWithProfile() {
        // messages.js에서 노출된 함수가 있으면 사용
        if (window.STPhone.Apps?.Messages?.generateWithProfile) {
            return window.STPhone.Apps.Messages.generateWithProfile;
        }

        // 없으면 내부 구현
        return async function(promptOrMessages, maxTokens = 1024) {
            const settings = window.STPhone.Apps?.Settings?.getSettings?.() || {};
            const profileId = settings.connectionProfileId;
            const context = window.SillyTavern?.getContext?.();

            if (!context) throw new Error('SillyTavern context not available');

            const messages = Array.isArray(promptOrMessages)
                ? promptOrMessages
                : [{ role: 'user', content: promptOrMessages }];

            if (profileId) {
                const connectionManager = context.ConnectionManagerRequestService;
                if (connectionManager && typeof connectionManager.sendRequest === 'function') {
                    const result = await connectionManager.sendRequest(profileId, messages, maxTokens, {}, { max_tokens: maxTokens });
                    return normalizeModelOutput(result);
                }
            }

            // fallback
            const fallbackPrompt = messages.map(m => `${m.role}: ${m.content}`).join('\n\n');
            const parser = context.SlashCommandParser || window.SlashCommandParser;
            const genCmd = parser?.commands['genraw'] || parser?.commands['gen'];
            if (!genCmd) throw new Error('AI 명령어를 찾을 수 없습니다');

            const result = await genCmd.callback({ quiet: 'true' }, fallbackPrompt);
            return String(result || '').trim();
        };
    }

    function normalizeModelOutput(raw) {
        if (raw == null) return '';
        if (typeof raw === 'string') return raw;
        if (typeof raw?.content === 'string') return raw.content;
        if (typeof raw?.text === 'string') return raw.text;
        const choiceContent = raw?.choices?.[0]?.message?.content;
        if (typeof choiceContent === 'string') return choiceContent;
        const dataContent = raw?.data?.content;
        if (typeof dataContent === 'string') return dataContent;
        try { return JSON.stringify(raw); } catch (e) { return String(raw); }
    }

    function cleanGiftResponse(response) {
        let cleanResponse = response
            .replace(/^["']|["']$/g, '')
            .replace(/^(assistant|AI|bot):\s*/gi, '')
            .replace(/\*[^*]+\*/g, '') // 액션 마크 제거
            .replace(/\([^)]+\)/g, '') // 괄호 안 행동 제거
            .trim();

        // 너무 긴 경우 줄이기 (문자 메시지는 간결해야 함)
        if (cleanResponse.length > 200) {
            const sentences = cleanResponse.split(/[.!?。]+/);
            cleanResponse = sentences.slice(0, 2).join('. ').trim();
            if (!cleanResponse.endsWith('!') && !cleanResponse.endsWith('?') && !cleanResponse.endsWith('.')) {
                cleanResponse += '!';
            }
        }

        return cleanResponse || '고마워!! 💕';
    }

    function sendDefaultGiftResponse(contactId) {
        const Messages = window.STPhone.Apps?.Messages;
        if (!Messages) return;

        const contact = window.STPhone.Apps?.Contacts?.getContact?.(contactId);

        const defaultResponses = [
            '와!! 정말 고마워!! 💕',
            '헉 이거 진짜야?! 너무 좋아!! 😍',
            '대박... 어떻게 이런 걸... 감동이야 ㅠㅠ',
            '선물 받았어! 너무 고마워~! 💝',
            '이야~ 완전 취저야!! 고마워!! 🎁',
            '우와앙 선물이다!! 너무 좋아!! 🥰',
            '진짜?! 이거 받아도 돼?! 감사해!! 💗',
        ];
        const randomResponse = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];

        Messages.addMessage(contactId, 'them', randomResponse, null, false, null, null);

        // 알림 및 배지 업데이트
        if (contact) {
            showGiftNotification(contact, randomResponse);
        }

        // 히든 로그 추가
        if (contact && typeof Messages.addHiddenLog === 'function') {
            const ctx = window.SillyTavern?.getContext?.();
            const settings = window.STPhone.Apps?.Settings?.getSettings?.() || {};
            const userName = settings.userName || ctx?.name1 || 'User';
            Messages.addHiddenLog(contact.name, `[📩 ${contact.name} -> ${userName}]: ${randomResponse}`);
        }
    }

    function showGiftNotification(contact, message) {
        const Messages = window.STPhone.Apps?.Messages;

        // 폰이 꺼져있거나 해당 채팅방을 안 보고 있으면 알림 표시
        const isPhoneActive = $('#st-phone-container').hasClass('active');
        const $chatMessages = $('#st-chat-messages');
        const isViewingThisChat = $chatMessages.length > 0 && $chatMessages.closest('.st-chat-screen').length > 0;

        if (!isPhoneActive || !isViewingThisChat) {
            // 미읽음 카운트 증가
            const key = getUnreadStorageKey();
            if (key) {
                try {
                    const unread = JSON.parse(localStorage.getItem(key) || '{}');
                    unread[contact.id] = (unread[contact.id] || 0) + 1;
                    localStorage.setItem(key, JSON.stringify(unread));
                } catch (e) {}
            }

            // 버블 알림 표시
            if (window.STPhone?.UI?.showNotification) {
                window.STPhone.UI.showNotification(`💬 ${contact.name}`, message);
            }
        } else {
            // 채팅방 보고 있으면 말풍선 직접 추가
            const msgs = Messages?.getMessages?.(contact.id) || [];
            const newIdx = msgs.length - 1;

            // [수정] 줄바꿈을 분리해서 각각 말풍선으로 만들기
            const lines = message.split('\n').filter(l => l.trim());
            let wrapperHtml = `<div class="st-msg-wrapper them">`;

            lines.forEach((line, lineIdx) => {
                const clickAttr = `data-action="msg-option" data-idx="${newIdx}" data-line-idx="${lineIdx}" data-sender="them" class="st-msg-bubble them clickable" style="cursor:pointer;" title="옵션 보기"`;
                wrapperHtml += `<div ${clickAttr}>${line.trim()}</div>`;
            });

            wrapperHtml += `</div>`;
            $chatMessages.find('#st-typing').before(wrapperHtml);

            // 스크롤 맨 아래로
            $chatMessages.scrollTop($chatMessages[0]?.scrollHeight || 0);
        }

        // 배지 업데이트
        if (Messages?.updateMessagesBadge) {
            Messages.updateMessagesBadge();
        }
    }

    // 미읽음 스토리지 키 가져오기
    function getUnreadStorageKey() {
        const ctx = window.SillyTavern?.getContext?.();
        const charId = ctx?.characterId || ctx?.characters?.[ctx?.characterId]?.avatar;
        if (!charId) return null;
        return `st_phone_messages_${charId}_unread`;
    }

    function open() {
        if (!$('#st-gifts-css').length) {
            $('head').append(css.replace('<style>', '<style id="st-gifts-css">'));
        }

        const $screen = window.STPhone.UI.getContentElement();
        const balance = getBalance();
        const currency = getCurrentCurrency();
        const symbol = CURRENCY_SYMBOLS[currency] || '원';

        // 잔액을 현재 화폐로 표시
        let formattedBalance;
        if (['USD', 'EUR', 'GBP'].includes(currency)) {
            formattedBalance = symbol + balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else if (currency === 'JPY' || currency === 'CNY') {
            formattedBalance = symbol + Math.round(balance).toLocaleString('ja-JP');
        } else {
            formattedBalance = Math.round(balance).toLocaleString('ko-KR') + symbol;
        }

        const html = `
            <div class="st-gifts-app">
                <div class="st-gifts-header">
                    <button class="st-gifts-back" data-level="home">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <span class="st-gifts-title">${APP_ICON} ${APP_NAME}</span>
                    <div class="st-gifts-balance">💰 ${formattedBalance}</div>
                </div>
                <div class="st-gifts-content"></div>
            </div>
        `;

        $screen.html(html);

        const $content = $('.st-gifts-content');
        showBrandList($content);

        // 뒤로가기 버튼 - 이벤트 위임 사용
        $('.st-gifts-app').off('click', '.st-gifts-back').on('click', '.st-gifts-back', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const $btn = $(this);
            const level = $btn.data('level');
            const brandId = $btn.data('brand');

            console.log('[Gifts] 뒤로가기 클릭:', level, brandId);

            if (level === 'home' || !level) {
                // 첫 화면에서 뒤로가기 → 홈으로
                if (window.STPhone?.UI?.showHome) {
                    window.STPhone.UI.showHome();
                }
            } else if (level === 'brand') {
                // 카테고리 목록에서 뒤로가기 → 브랜드 목록으로
                showBrandList($content);
                $('.st-gifts-header .st-gifts-title').text(`${APP_ICON} ${APP_NAME}`);
                $btn.data('level', 'home').data('brand', '');
            } else if (level === 'category') {
                // 상품 목록에서 뒤로가기 → 카테고리 목록으로
                showCategoryList($content, brandId);
            }
        });
    }

    return { open };
})();
