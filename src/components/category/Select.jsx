import React, { useState } from 'react';
import '../../assets/Category.css';

const books = {
  '경제': [
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791198517425.jpg",  title: '불변의 법칙',  author: '모건 하우절', description: '세계적인 베스트셀러 《돈의 심리학》의 저자 모건 하우절이 3년 만에 세상에 내놓은 신작.‘절대 변하지 않는 것들에 대한 23가지 이야기’를 전한다.', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791192445717.jpg",  title: '반도체 투자의 원칙',  author: '우황제', description: '“앞으로 자본시장은 반도체라는 메가 트렌드로 인해 변화할 것이다.” 빅 데이터, 자율주행, 인공지능 등의 차세대 기술 모두를 실현하는 반도체 산업을 이해하고 시대를 앞서가는 투자 원칙을 세워라!', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788997743605.jpg",  title: '퍼스널 MBA',  author: '조시 카우프만', description: '비즈니스의 성공을 위해 꼭 알아야 하는 경영의 핵심 지식 살아 숨 쉬는 경영의 핵심 지식이 ‘10주년 기념 증보판’으로 돌아오다! 《퍼스널 MBA》는 필자가 수천 권이 넘는 경영 서적을 읽고, 수백 ... ', link: "https://www.naver.com/" },
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791170610359.jpg", title:'시대예보: 핵개인의 시대', author:'송길영', description:'마인드 마이너 송길영이 예보하는 미래 시대,앞으로 세상은 어떻게 변화할 것인가?',  link: "https://www.naver.com/"},
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791171174935.jpg", title:'인구 감소, 부의 대전환', author:'전영수', description:'인구 전문가 한양대 전영수 교수의 청사진 부의 지각변동을 인구 통계의 눈으로 예측한다!',  link: "https://www.naver.com/"}

  ],
  '경영': [
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791157842636.jpg",  title: '원칙', author: '레이 달리오', description: ' 시대의 가장 위대한 투자자이자 경영자, 그가 지켜온 원칙은 무엇인가? 최근 몇 년 동안 지구에서 가장 혁신적인 기업 가운데 하나라는 평가를 들어온 브리지워터 어소시에이츠 창립자로, 헤지... ', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9781982181284.jpg",  title: '일론 머스크', author: '윌터 아이작슨', description: '계 1위 부자, 괴짜, 몽상가, 천재, 사기꾼, 혁신가, 허풍쟁이, 관종... 극과 극의 평가를 받는 문제적 혁신가를 만나보세요.', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791139716771.jpg",  title: '유튜브,제국의 탄생', author: '마크 버겐', description: '튜브, 판도라의 상자가 열리다! 1일 10억 시간 이상 시청, 1분 500시간 이상 영상 업로드. 실리콘밸리에서 무명의 스타트업으로 시작한 어느 동영상 사이트가 20년이 지난 지금 세계 최대의 콘... ', link: "https://www.naver.com/" },
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791140705054.jpg", title:'괴물 같은 기업 키엔스를 배워라', author:'니시오카 안누', description:'키엔스(KEYENCE)는 공장 자동화에 필요한 센서와 계측기 등을 만드는 회사로, 1974년 설립 이후 압도적인 점유율을 보이며 시장 1위를 지키는 놀라운 기업이다. 키엔스의 제품에는 “세계 최초” “세계',  link: "https://www.naver.com/"},
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791165346935.jpg", title:'일본전산 이야기', author:'김성호', description:'지난 15년 동안 수많은 기업의 경영인들은 물론이고 자기계발에 힘쓰는 사람들에게 큰 공감을 끌어낸 《일본전산 이야기》가 ‘50만 부 돌파 리커버’로 새롭게 출간되었다. 따라가기 힘들 정도로 쉴 새 없이 바뀌는 비즈니스의 세계에서 일본전산과 나가모리 시게노부 회장의 이야기가 15년이 넘는 시간 동안 여전히 신뢰받으며 읽히는 이유는 무엇일까?',  link: "https://www.naver.com/"}
  ],
  '만화': [
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791136784483.jpg",  title: '명탐정 코난', author: 'Gosho AOYAMA', description: '검은 조직에 의해 어린아이가 되어버린 고등학생 명탐정 남도일. 그는 자신과 주변 사람들의 안전을 위해 코난이란 이름으로 유명한 탐정의 딸이자 자신의 소꿉 친구인 미란이의 집에 얹혀 살게 된다.', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791136784605.jpg",  title: '지박소년 하나코 군', author: 'Aidalro', description: '학원의 일곱 가지 불가사의 중 하나인 화장실에 있는 하나코와 그를 불러낸 오컬트 소녀를 중심으로 그려지는 괴이 코미디 애니메이션', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791138482769.jpg",  title: '던전밥', author: 'Ryoko Kul', description: '일본 아마존 만화 랭킹 1위!최고의 화제를 불러일으킨 바로 그 작품, 드디어 한국어판 출간!드래곤도 구우면 맛있다!!!모험을 하면 배가 고프게 마련. 몬스터를 먹으며 대 미궁 ‘황금성’을 답파하라, 용사들이여! ', link: "https://www.naver.com/" },
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791170591450.jpg", title:'스킵과 로퍼', author:'타카마츠 미사키 저자', description:'입학식 때부터 서로 감화받은 두 사람.그 거리는 친구를 넘어 더욱 가까워진다-!연애도 우정도 학업도 학생회도전부 잘 해내고 싶은 미츠미의 마음은 정신없이 바쁜 일상으로 튕겨 나가기 직전인데!',  link: "https://www.naver.com/"},
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791172033194.jpg", title:'아이돌리쉬 세븐: 유성에 빌다', author:'타네무라 아리나', description:'모바일 소셜 게임으로 시작하여 소설, 만화, 애니메이션으로도 제작된 큰 인기에 힘입어 한국판으로 정식 발행되는 아이돌리쉬 세븐. 아이돌과 매니저가 같은 목표와 꿈을 안고 정점을 향해 분투하는 과정에서 기쁨과 감동을 자아내는 대중적인 작품으로, 이미 한국에서도 두터운 팬층을 보유하고 있다.',  link: "https://www.naver.com/"}
  ],
  '여행': [
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791191994278.jpg",  title: '마츠다 리스트', author: '마츠다 아키히로', description: '잠들지 않는 오사카의 은색 밤, 오사카 블루스 마츠다 부장이 알려주는 진짜 특별한 미식의 찰나 오사카에서 술이 마시고 싶다면 진짜 술집으로.', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791192767116.jpg",  title: '디스 이즈 도쿄', author: '박설희', description: '★ 가장 힙한 도쿄 여행 가이드북의 정석 ★ 압도적으로 자세하고 친절한 교통·실용 정보 ★ ', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791192767123.jpg",  title: '디스 이즈 오사카', author: '호밀씨', description: '★2023년 교보 여행 부문 연간 베스트셀러 1위! ★비교 불가한 최신 정보로 업데이트한 전면 개정판 출간! ★', link: "https://www.naver.com/" },
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791190073349.jpg", title:'에이든 국내여행 가이드북(2024-2025)', author:'이정기', description:'2022년 교보문고 여행 연간 베스트셀러 1위 “에이든 국내여행 가이드북”의 “개정증보2판”을 출간하였습니다. 예스24 올해의 책 100위 안에도 올랐던 그책이 524페이지에서 340페이지가 증가한 864페이지로 40% 정도가 증가한 분량으로 국내 전체 여행지를 제대로 다룰 수 있게 되었습니다.',  link: "https://www.naver.com/"},
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791193080252.jpg", title:'리얼 도쿄(2024~2025)', author:'양미석', description:'시시각각 변하는 도쿄를 가장 생생하고 정확하게 담아낸 《리얼 도쿄》의 귀환! 겉핥기식의 내용은 가라! 20여 년간 도쿄를 속속들이 누벼온 저자의 여행 감각과 노하우, 그리고 여행자에게 꼭 필요한 실용적인 정보를 쏙쏙 골라내 한 권의 책으로 빚어냈다. 도쿄가 처음인 사람에게는 더없이 알찬 정보로, 도쿄 좀 여행 한다 싶은 사람에게는 새롭고 신선한 정보로 가득하다. ',  link: "https://www.naver.com/"}
  ],
  '외국어': [
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9788901281797.jpg",  title: '빨모쌤의 라이브 영어회화', author: '신용하', description: '150만 영어 유목민이 선택한 유튜브 최고의 영어 수업, ‘빨모쌤’의 〈라이브 아카데미〉를 마침내 책으로 만난다', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9788965422785.jpg",  title: '해커스 토익 기출', author: 'David Cho', description: '주제별 연상암기로 토익 영단어 30일 완성', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9788917239508.jpg",  title: 'ETS 토익 정기시험', author: 'ETS-TBM', description: 'ETS 토익 정기시험 기출종합서 RC+LC 세트(전2권)', link: "https://www.naver.com/" },
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788917235944.jpg", title:'ETS 토익 단기공략 750+(LC+RC)', author:'ETS', description:'기출문제 한국 독점출간, 기출 문항으로 보강한 단기완성 시리즈 |',  link: "https://www.naver.com/"},
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791161508214.jpg", title:'한권 한달 완성 일본어 말하기 Lv 2', author:'최유리', description:'『한권 한달 완성 일본어 말하기』 시리즈는 일본어 진입 장벽을 확 낮춘 말하기 학습서로 일본어를 몰라도 누구나 쉽게 따라 말할 수 있도록 구성하였습니다.',  link: "https://www.naver.com/"}
  ],
  '요리': [
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791192366364.jpg",  title: '플레이팅 레시피', author: '고네뜨', description: '늘 먹는 평범한 밥과 반찬. 다르게 만들기에도 한계가 있고, 멋을 내보자니 쉽지가 않죠? 그렇다고 그냥 그릇에 툭 담기에는 뭔가 아쉽고… 이럴 때 “요리와 플레이팅을 하나부터 열까지 알려주는 책이 있다면 얼마나 좋을까?”라는 생각을 하곤 합니다. 여기, 인스타그램 팔로워 7만명이 넘는 푸드 아티스트가 있습니다. 바로 고네뜨(g.one_t)가 그 주인공인데요. 그녀', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791168222724.jpg",  title: '뿐이 토핑 이유식', author: '정주희', description: '첫째 튼이를 건강하게 키운 『튼이 이유식 』출간 이후 5년이 흘렀습니다. 그동안 『튼이 이유식』은 초보 부모들의 이유식 길라잡이자 국민이유식 책이 되었습니다. 희야 작가는 튼이 동생을 갖기 위해 매우 노력했지만 쉽지 않았는데요. 오랜 기다림과 노력 끝에(시험관 7차) 35주 1일 차에 둘째 뿐이는 2.32kg 저체중의 이른둥이로 태어났습니다. 스스로 호흡하...', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791195795529.jpg",  title: '삐뽀삐뽀 119 이유식', author: '하정훈', description: '최신 의학 지식에 근거한 과학적 이유식, 초보맘도 만들기 쉬운 만만한 이유식 『삐뽀삐뽀 119 이유식』 전면개정판. 2005년 초판 출간 이래 아기들의 이유식 정석을 이끌어온 책으로, 최신의 의학 정보를 바탕으로 과학적이고 체계적으로 이유식 하는 방식, 좀더 쉽고 재밌게 요리하여 초보 엄마아빠도 따라 할 수 있도록 도운 레시피, 좀더 보기 편한 디자인, 무엇보...', link: "https://www.naver.com/" },
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791188601387.jpg", title:'오늘은 아무래도 덮밥', author:'이마이 료 ', description:'너무 배가 고프거나 바빠서 여유가 없을 때, 부담 없이 간편하게 요리할 수 있는 맛있고 든든한 덮밥 레시피들을 소개합니다. 《오늘은 아무래도 덮밥》에서는 폭신하고 부드러운 덮밥부터 포만감 가',  link: "https://www.naver.com/"},
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788969525390.jpg", title:'김대석 셰프의 집밥 레시피', author:'김대석', description:'유튜브 구독자 143만 명 전체 레시피 동영상 QR 코드 수록 매일 만들어 먹고 싶은 한식 레시피를 소개했어요 요리를 처음 시작한 사람이나, 요리가 꽤 손에 익은 사람이나 늘 어떤 음식을 해야 할지, 제',  link: "https://www.naver.com/"}
  ],
  '인문': [
    { image: "https://img.ridicdn.net/cover/950000429/xxlarge?dpi=xxhdpi#1",  title: '컬트', author: '맥스 커틀러', description: '컬트란 무엇이고 우리는 왜 컬트에 빠져드는가 컬트는 우리를 인간답게 만들어 주는 그 속성을 먹이로 삼는다.', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791171711673.jpg",  title: '하루 한 장 나의 어휘력을 위한 필사 노트', author: '유선경', description: '《어른의 어휘력》, 《감정 어휘》 어휘력 도서 최다 판매 유선경 작가의 첫 필사책!', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791198704504.jpg",  title: '삶이 흔들릴 때 뇌과학을 읽습니다', author: '이케가야 유지', description: '“우리가 알고 싶은 인생의 모든 해답은 ‘뇌’ 안에 있습니다” ‘뇌과학’이라고 하면 어떤 느낌이 드는가? ', link: "https://www.naver.com/" },
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791192300818.jpg", title:'마흔에 읽는 쇼펜하우어', author:'강용수', description:'2023년 8월 유노북스에서 펴낸 《마흔에 읽는 쇼펜하우어》가 전 서점 종합 베스트셀러 1위에 올랐다. 철학 교양서로는 최초라는 점에서 기념비적이다. ‘마흔’, ‘오십’, ‘서른’ 등 연령을 키워드로 한 인',  link: "https://www.naver.com/"},
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788901280776.jpg", title:'사람을 안다는 것', author:'데이비드 브룩스', description:'필요한 때에 중요한 목소리를 내는 미국의 대표 저널리스트 데이비드 브룩스의 『사람을 안다는 것』이 출간되었다. 전 세계 베스트셀러 『두 번째 산』 이후로 3년 만에 펴내는 신작이다. 작가로',  link: "https://www.naver.com/"}
  ],
  '종교': [
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791165045210.jpg",  title: '따라하는 기도5:고난', author: '장재기', description: '봄봄북스 따라 하는 기도 5 고난', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791170831211.jpg",  title: '고백의 언어들', author: '김기석', description: '우리 시대의 목회자이자 설교자, 기독교 사상가, 김기석 목사의 고별 메시지! "김기석 목사의 삶과 신앙, 경험과 통찰의 정수를 담다“ 이 책은 우리 시대의 목회자이자 설교자,', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791187506072.jpg",  title: '하나님의 열심', author: '박영선', description: '설교자 박영선의 단초를 엿보다! 박영선 목사의 대표작으로 잘 알려진 설교집 『하나님의 열심』. 1985년 출간된 이래, 많은 신자들의 ‘인생 책’으로 손꼽히는 이 설교집을 한 세대가 지난 지금 다시... ', link: "https://www.naver.com/" },
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791193664032.jpg", title:'엄마가 된 나의 신앙이야기', author:'이슬기 ', description:'저자는 이 책을 통해 엄마가 아이를 믿음으로 양육하는 데 있어 꼭 알아야 할 중요한 신앙의 개념들을 성경과 교리, 그리고 자신의 이야기를 바탕으로 현실감 있게 전달한다. 이후 실제로 아이들에게...',  link: "https://www.naver.com/"},
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791193454596.jpg", title:'인생의 괴로움과 깨달음', author:'강성용', description:'이제껏 우리가 ‘불교’라고 믿어온 종교를 신박하게 뒤집었다! 사성제와 팔정도, 연기법, 까르마(업)와 윤회 등 불교의 핵심 개념들에 덧씌워진 각색을 걷어내고 붓다의 진짜 목소리에 다가간다. 그래서...',  link: "https://www.naver.com/"}
  ],
  '소설': [
    { image: "https://img.ridicdn.net/cover/3306000090/xxlarge?dpi=xxhdpi#1",  title: '개정 번역판 | 해리 포터와 마법사의 돌', author: '조앤.K.롤링', description: '해리 포터 세대의, 해리 포터 세대를 위한, 해리 포터 세대에 의한 새 번역! 21세기 대표 아이콘’에 걸맞은 완성도 높은 작품으로 재탄생하다!', link: "https://www.naver.com/" },
    { image: "https://img.ridicdn.net/cover/4755000137/xxlarge?dpi=xxhdpi#1g",  title: '개정판 | 류츠신 삼체 3부작 1권', author: '류츠신', description: ' SF의 신화가 된 류츠신『삼체』를 개정판으로 새롭게 만나다 오바마 전 미국 대통령이 선택하고, 노벨문학상 모옌이 극찬한 최고의 작품!', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791161571768.jpg",  title: '나의 돈키호테', author: '김호연', description: '150만 독자가 사랑한 『불편한 편의점』 김호연 작가 신작 “그 시절 우리는 모두 주인공이었다” 2024년 봄, 또 한 번 찾아온 가슴 따뜻한 우리들의 이야기 150만 독자가 애독하며 수만 개의 입소문 ... ', link: "https://www.naver.com/" },
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791130646381.jpg", title:'이처럼 사소한 것들', author:'클레어 키건', description:'* 문학평론가 신형철, 르포작가 은유 추천 * 2022 오웰상 소설 부문 수상 * 킬리언 머피 주연·제작 영화화 2023년 4월 국내에 처음 소개된 『맡겨진 소녀』로 국내 문인들과 문학 독자들의 열렬한 환...',  link: "https://www.naver.com/"},
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788936434434.jpg", title:'철도원 삼대', author:'황석영', description:'한반도 백년의 역사를 꿰뚫는 『철도원 삼대』. 이 작품은 철도원 가족을 둘러싼 방대한 서사를 통해 일제강점기부터 해방 전후 그리고 21세기까지 이어지는 노동자와 민중의 삶을 실감나게 다루고,...',  link: "https://www.naver.com/"}
  ],
   
  '컴퓨터': [
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791191905748.jpg",  title: '요즘 AI 페어 프로그래밍', author: '서지연', description: '차원이 다른 생산성을 발휘하는 with AI 개발자로 탈바꿈하세요 2022년 깃허브 리서치에 따르면 깃허브 코파일럿을 사용하는 개발자는 55% 더 빠르고, 달성율은 75% 더 높습니다. 이미 포춘...', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791192987965.jpg",  title: '러스트 서버,서비스,앱 만들기', author: '프라부 에스왈라', description: '분산 웹 앱 구축하며 풀스택 러스트 마스터하기 이 책은 오직 러스트만으로 웹서버, RESTful 서비스, 서버 렌더링 앱, 클라이언트 프런트엔드를 만든다. 작고 예측 가능한 리소스 풋프린트로 코... ', link: "https://www.naver.com/" },
    { image: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791140709403.jpg",  title: '그림으로 이해하는 알고리즘', author: '미야자키 슈이치', description: '알고리즘과 자료 구조, 이렇게 쉽게 표현하고 이해할 수 있다고? 전 세계 250만 다운로드 ‘알고리즘 도감’ 앱을 책으로 엮은 일본 아마존 스테디셀러, 개정2판! 알고리즘은 같은 목적을 달성하더라... ', link: "https://www.naver.com/" },
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788966264414.jpg", title:'JVM 밑바닥까지 파헤치기', author:'저우즈밍', description:'“자바 가상 머신의 깊숙한 내부를 향해 떠나는 흥미진진한 모험”C·C++를 사용해 주로 프로그래밍을 하던 시절 까다로운 메모리 관리와 플랫폼 이식성 문제는 개발자들에게 적지 않은 부담이었다. 그...',  link: "https://www.naver.com/"},
    { image:"https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791138362573.jpg", title:'2024 SD에듀 유선배 SQL개발자(SQLD) 과외노트', author:'정미나 ', description:'이 책은 데이터베이스에 대한 기본 지식은 없지만 자격증을 취득해보기로 마음을 먹은 용감한 초보자들을 위한 책입니다. 기술 서적의 경우 전공자를 대상으로 쓰인 책이 많기 때문에 초보자들이 술...',  link: "https://www.naver.com/"}
  ]

  
  
};

function truncateText(text, limit) {
  return text.length > limit ? text.substring(0, limit) + "..." : text;
}

function Select() {
  const [selectedCategory, setSelectedCategory] = useState('소설');

  return (
    <div className="container">
      <div className="sidebar">
        <h1 className="sidebar-header">카테고리</h1> {/* 카테고리 제목 추가 */}
        {Object.keys(books).map(category => (
          <div
            key={category}
            className={`category ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="books-section">
        <h2 className="category-title">{selectedCategory}</h2>
        <div className="books">
          {books[selectedCategory].map(book => (
            <a href={book.link} key={book.title} className="book" style={{ textDecoration: 'none' }}>
              <img src={book.image} alt={`Cover of ${book.title}`} />
              <div className="book-info">
              <div className="info-row">
                  <span className="label">제목:</span>
                  <span className="value">{book.title}</span>
                </div>
                <div className="info-row">
                  <span className="label">저자:</span>
                  <span className="value">{book.author}</span>
                </div>
                <div className="info-row">
                  <span className="label">줄거리:</span>
                  <span className="value">{truncateText(book.description, 100)}</span>             
              </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Select;
