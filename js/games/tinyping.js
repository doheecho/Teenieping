// ===================== 티니핑 캐릭터 맞추기 =====================
// 데이터 출처: 티니핑캐릭터.xlsx (A:캐릭터명, B:기수, C:기수(캐릭터명), D:유형)
// 이미지 파일: images/{기수}_{캐릭터명}.webp
var TINYPING_DATA = [
    { name: '하츄핑', gen: '1기', genName: '큐브 티니핑', type: '로열 티니핑', file: '1기_하츄핑.webp' },
    { name: '바로핑', gen: '1기', genName: '큐브 티니핑', type: '로열 티니핑', file: '1기_바로핑.webp' },
    { name: '아자핑', gen: '1기', genName: '큐브 티니핑', type: '로열 티니핑', file: '1기_아자핑.webp' },
    { name: '차차핑', gen: '1기', genName: '큐브 티니핑', type: '로열 티니핑', file: '1기_차차핑.webp' },
    { name: '라라핑', gen: '1기', genName: '큐브 티니핑', type: '로열 티니핑', file: '1기_라라핑.webp' },
    { name: '해핑', gen: '1기', genName: '큐브 티니핑', type: '로열 티니핑', file: '1기_해핑.webp' },
    { name: '키키핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_키키핑.webp' },
    { name: '아잉핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_아잉핑.webp' },
    { name: '부끄핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_부끄핑.webp' },
    { name: '부투핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_부투핑.webp' },
    { name: '깜빡핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_깜빡핑.webp' },
    { name: '띠용핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_띠용핑.webp' },
    { name: '주르핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_주르핑.webp' },
    { name: '차나핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_차나핑.webp' },
    { name: '따라핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_따라핑.webp' },
    { name: '나르핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_나르핑.webp' },
    { name: '무셔핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_무셔핑.webp' },
    { name: '투투핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_투투핑.webp' },
    { name: '차캐핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_차캐핑.webp' },
    { name: '떠벌핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_떠벌핑.webp' },
    { name: '다조핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_다조핑.webp' },
    { name: '화나핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_화나핑.webp' },
    { name: '시러핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_시러핑.webp' },
    { name: '바네핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_바네핑.webp' },
    { name: '악동핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_악동핑.webp' },
    { name: '덜덜핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_덜덜핑.webp' },
    { name: '그림핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_그림핑.webp' },
    { name: '무거핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_무거핑.webp' },
    { name: '꺼꿀핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_꺼꿀핑.webp' },
    { name: '씽씽핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_씽씽핑.webp' },
    { name: '베베핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_베베핑.webp' },
    { name: '코자핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_코자핑.webp' },
    { name: '딱풀핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_딱풀핑.webp' },
    { name: '모야핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_모야핑.webp' },
    { name: '토이핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_토이핑.webp' },
    { name: '또까핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_또까핑.webp' },
    { name: '플라핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_플라핑.webp' },
    { name: '노라핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_노라핑.webp' },
    { name: '노리핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_노리핑.webp' },
    { name: '아휴핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_아휴핑.webp' },
    { name: '똑똑핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_똑똑핑.webp' },
    { name: '꽁꽁핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_꽁꽁핑.webp' },
    { name: '찌릿핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_찌릿핑.webp' },
    { name: '홀로핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_홀로핑.webp' },
    { name: '앙대핑', gen: '1기', genName: '큐브 티니핑', type: '일반 티니핑', file: '1기_앙대핑.webp' },
    { name: '다이아 하츄핑', gen: '2기', genName: '보석 티니핑', type: '로열 티니핑', file: '2기_다이아하츄핑.webp' },
    { name: '조아핑', gen: '2기', genName: '보석 티니핑', type: '로열 티니핑', file: '2기_조아핑.webp' },
    { name: '방글핑', gen: '2기', genName: '보석 티니핑', type: '로열 티니핑', file: '2기_방글핑.webp' },
    { name: '믿어핑', gen: '2기', genName: '보석 티니핑', type: '로열 티니핑', file: '2기_믿어핑.webp' },
    { name: '까르핑', gen: '2기', genName: '보석 티니핑', type: '일반 티니핑', file: '2기_까르핑.webp' },
    { name: '아야핑', gen: '2기', genName: '보석 티니핑', type: '일반 티니핑', file: '2기_아야핑.webp' },
    { name: '소원핑', gen: '2기', genName: '보석 티니핑', type: '일반 티니핑', file: '2기_소원핑.webp' },
    { name: '토닥핑', gen: '2기', genName: '보석 티니핑', type: '일반 티니핑', file: '2기_토닥핑.webp' },
    { name: '쪼꼼핑', gen: '2기', genName: '보석 티니핑', type: '일반 티니핑', file: '2기_쪼꼼핑.webp' },
    { name: '싹싹핑', gen: '2기', genName: '보석 티니핑', type: '일반 티니핑', file: '2기_싹싹핑.webp' },
    { name: '맛나핑', gen: '2기', genName: '보석 티니핑', type: '일반 티니핑', file: '2기_맛나핑.webp' },
    { name: '포근핑', gen: '2기', genName: '보석 티니핑', type: '일반 티니핑', file: '2기_포근핑.webp' },
    { name: '메모핑', gen: '2기', genName: '보석 티니핑', type: '일반 티니핑', file: '2기_메모핑.webp' },
    { name: '다해핑', gen: '2기', genName: '보석 티니핑', type: '일반 티니핑', file: '2기_다해핑.webp' },
    { name: '공쥬핑', gen: '2기', genName: '보석 티니핑', type: '일반 티니핑', file: '2기_공쥬핑.webp' },
    { name: '짝짝핑', gen: '2기', genName: '보석 티니핑', type: '일반 티니핑', file: '2기_짝짝핑.webp' },
    { name: '주네핑', gen: '2기', genName: '보석 티니핑', type: '일반 티니핑', file: '2기_주네핑.webp' },
    { name: '뚝딱핑', gen: '2기', genName: '보석 티니핑', type: '일반 티니핑', file: '2기_뚝딱핑.webp' },
    { name: '발레핑', gen: '2기', genName: '보석 티니핑', type: '일반 티니핑', file: '2기_발레핑.webp' },
    { name: '원더핑', gen: '2기', genName: '보석 티니핑', type: '일반 티니핑', file: '2기_원더핑.webp' },
    { name: '플로라 하츄핑', gen: '3기', genName: '열쇠 티니핑', type: '로열 티니핑', file: '3기_플로라하츄핑.webp' },
    { name: '꾸래핑', gen: '3기', genName: '열쇠 티니핑', type: '로열 티니핑', file: '3기_꾸래핑.webp' },
    { name: '나나핑', gen: '3기', genName: '열쇠 티니핑', type: '로열 티니핑', file: '3기_나나핑.webp' },
    { name: '솔찌핑', gen: '3기', genName: '열쇠 티니핑', type: '로열 티니핑', file: '3기_솔찌핑.webp' },
    { name: '행운핑', gen: '3기', genName: '열쇠 티니핑', type: '레전드 티니핑', file: '3기_행운핑.webp' },
    { name: '빨리핑', gen: '3기', genName: '열쇠 티니핑', type: '일반 티니핑', file: '3기_빨리핑.webp' },
    { name: '얌얌핑', gen: '3기', genName: '열쇠 티니핑', type: '일반 티니핑', file: '3기_얌얌핑.webp' },
    { name: '뜨거핑', gen: '3기', genName: '열쇠 티니핑', type: '일반 티니핑', file: '3기_뜨거핑.webp' },
    { name: '삐뽀핑', gen: '3기', genName: '열쇠 티니핑', type: '일반 티니핑', file: '3기_삐뽀핑.webp' },
    { name: '간호핑', gen: '3기', genName: '열쇠 티니핑', type: '일반 티니핑', file: '3기_간호핑.webp' },
    { name: '힘내핑', gen: '3기', genName: '열쇠 티니핑', type: '일반 티니핑', file: '3기_힘내핑.webp' },
    { name: '고쳐핑', gen: '3기', genName: '열쇠 티니핑', type: '일반 티니핑', file: '3기_고쳐핑.webp' },
    { name: '아라핑', gen: '3기', genName: '열쇠 티니핑', type: '일반 티니핑', file: '3기_아라핑.webp' },
    { name: '패션핑', gen: '3기', genName: '열쇠 티니핑', type: '일반 티니핑', file: '3기_패션핑.webp' },
    { name: '꼼딱핑', gen: '3기', genName: '열쇠 티니핑', type: '일반 티니핑', file: '3기_꼼딱핑.webp' },
    { name: '퐁당핑', gen: '3기', genName: '열쇠 티니핑', type: '일반 티니핑', file: '3기_퐁당핑.webp' },
    { name: '파티핑', gen: '3기', genName: '열쇠 티니핑', type: '일반 티니핑', file: '3기_파티핑.webp' },
    { name: '꾸며핑', gen: '3기', genName: '열쇠 티니핑', type: '일반 티니핑', file: '3기_꾸며핑.webp' },
    { name: '삐짐핑', gen: '3기', genName: '열쇠 티니핑', type: '일반 티니핑', file: '3기_삐짐핑.webp' },
    { name: '아아핑', gen: '3기', genName: '열쇠 티니핑', type: '일반 티니핑', file: '3기_아아핑.webp' },
    { name: '빙글핑', gen: '3기', genName: '열쇠 티니핑', type: '일반 티니핑', file: '3기_빙글핑.webp' },
    { name: '베리 하츄핑', gen: '4기', genName: '디저트 티니핑', type: '로열 티니핑', file: '4기_베리하츄핑.webp' },
    { name: '포실핑', gen: '4기', genName: '디저트 티니핑', type: '로열 티니핑', file: '4기_포실핑.webp' },
    { name: '말랑핑', gen: '4기', genName: '디저트 티니핑', type: '로열 티니핑', file: '4기_말랑핑.webp' },
    { name: '샤샤핑', gen: '4기', genName: '디저트 티니핑', type: '로열 티니핑', file: '4기_샤샤핑.webp' },
    { name: '새콤핑', gen: '4기', genName: '디저트 티니핑', type: '레전드 티니핑', file: '4기_새콤핑.webp' },
    { name: '달콤핑', gen: '4기', genName: '디저트 티니핑', type: '레전드 티니핑', file: '4기_달콤핑.webp' },
    { name: '캔디핑', gen: '4기', genName: '디저트 티니핑', type: '일반 티니핑', file: '4기_캔디핑.webp' },
    { name: '머랭핑', gen: '4기', genName: '디저트 티니핑', type: '일반 티니핑', file: '4기_머랭핑.webp' },
    { name: '샌드핑', gen: '4기', genName: '디저트 티니핑', type: '일반 티니핑', file: '4기_샌드핑.webp' },
    { name: '또너핑', gen: '4기', genName: '디저트 티니핑', type: '일반 티니핑', file: '4기_또너핑.webp' },
    { name: '와플핑', gen: '4기', genName: '디저트 티니핑', type: '일반 티니핑', file: '4기_와플핑.webp' },
    { name: '롤리핑', gen: '4기', genName: '디저트 티니핑', type: '일반 티니핑', file: '4기_롤리핑.webp' },
    { name: '마카핑', gen: '4기', genName: '디저트 티니핑', type: '일반 티니핑', file: '4기_마카핑.webp' },
    { name: '핫케핑', gen: '4기', genName: '디저트 티니핑', type: '일반 티니핑', file: '4기_핫케핑.webp' },
    { name: '커핑', gen: '4기', genName: '디저트 티니핑', type: '일반 티니핑', file: '4기_커핑.webp' },
    { name: '머핑', gen: '4기', genName: '디저트 티니핑', type: '일반 티니핑', file: '4기_머핑.webp' },
    { name: '요거핑', gen: '4기', genName: '디저트 티니핑', type: '일반 티니핑', file: '4기_요거핑.webp' },
    { name: '눈꽃핑', gen: '4기', genName: '디저트 티니핑', type: '일반 티니핑', file: '4기_눈꽃핑.webp' },
    { name: '푸딩핑', gen: '4기', genName: '디저트 티니핑', type: '일반 티니핑', file: '4기_푸딩핑.webp' },
    { name: '멜로핑', gen: '4기', genName: '디저트 티니핑', type: '일반 티니핑', file: '4기_멜로핑.webp' },
    { name: '쪼꼬핑', gen: '4기', genName: '디저트 티니핑', type: '일반 티니핑', file: '4기_쪼꼬핑.webp' },
    { name: '뿌뿌핑', gen: '4기', genName: '디저트 티니핑', type: '일반 티니핑', file: '4기_뿌뿌핑.webp' },
    { name: '스타 하츄핑', gen: '5기', genName: '스타 티니핑', type: '로열 티니핑', file: '5기_스타하츄핑.webp' },
    { name: '빛나핑', gen: '5기', genName: '스타 티니핑', type: '로열 티니핑', file: '5기_빛나핑.webp' },
    { name: '초롱핑', gen: '5기', genName: '스타 티니핑', type: '로열 티니핑', file: '5기_초롱핑.webp' },
    { name: '빤짝핑', gen: '5기', genName: '스타 티니핑', type: '로열 티니핑', file: '5기_빤짝핑.webp' },
    { name: '왕자핑', gen: '5기', genName: '스타 티니핑', type: '로열 티니핑', file: '5기_왕자핑.webp' },
    { name: '오로라핑', gen: '5기', genName: '스타 티니핑', type: '레전드 티니핑', file: '5기_오로라핑.webp' },
    { name: '깡총핑', gen: '5기', genName: '스타 티니핑', type: '일반 티니핑', file: '5기_깡총핑.webp' },
    { name: '훌라핑', gen: '5기', genName: '스타 티니핑', type: '일반 티니핑', file: '5기_훌라핑.webp' },
    { name: '나눔핑', gen: '5기', genName: '스타 티니핑', type: '일반 티니핑', file: '5기_나눔핑.webp' },
    { name: '딩동핑', gen: '5기', genName: '스타 티니핑', type: '일반 티니핑', file: '5기_딩동핑.webp' },
    { name: '나그네핑', gen: '5기', genName: '스타 티니핑', type: '일반 티니핑', file: '5기_나그네핑.webp' },
    { name: '고고핑', gen: '5기', genName: '스타 티니핑', type: '일반 티니핑', file: '5기_고고핑.webp' },
    { name: '뿌쵸핑', gen: '5기', genName: '스타 티니핑', type: '일반 티니핑', file: '5기_뿌쵸핑.webp' },
    { name: '고마핑', gen: '5기', genName: '스타 티니핑', type: '일반 티니핑', file: '5기_고마핑.webp' },
    { name: '아롱핑', gen: '5기', genName: '스타 티니핑', type: '일반 티니핑', file: '5기_아롱핑.webp' },
    { name: '다롱핑', gen: '5기', genName: '스타 티니핑', type: '일반 티니핑', file: '5기_다롱핑.webp' },
    { name: '뽀송핑', gen: '5기', genName: '스타 티니핑', type: '일반 티니핑', file: '5기_뽀송핑.webp' },
    { name: '유리핑', gen: '5기', genName: '스타 티니핑', type: '일반 티니핑', file: '5기_유리핑.webp' },
    { name: '함께핑', gen: '5기', genName: '스타 티니핑', type: '일반 티니핑', file: '5기_함께핑.webp' },
    { name: '댄스핑', gen: '5기', genName: '스타 티니핑', type: '일반 티니핑', file: '5기_댄스핑.webp' },
    { name: '여우핑', gen: '5기', genName: '스타 티니핑', type: '일반 티니핑', file: '5기_여우핑.webp' },
    { name: '루루핑', gen: '5기', genName: '스타 티니핑', type: '일반 티니핑', file: '5기_루루핑.webp' },
    { name: '몰래핑', gen: '5기', genName: '스타 티니핑', type: '일반 티니핑', file: '5기_몰래핑.webp' },
    { name: '뽀뽀핑', gen: '5기', genName: '스타 티니핑', type: '일반 티니핑', file: '5기_뽀뽀핑.webp' },
    { name: '프린세스 하츄핑', gen: '6기', genName: '프린세스 티니핑', type: '로열 티니핑', file: '6기_프린세스하츄핑.webp' },
    { name: '사뿐핑', gen: '6기', genName: '프린세스 티니핑', type: '로열 티니핑', file: '6기_사뿐핑.webp' },
    { name: '아름핑', gen: '6기', genName: '프린세스 티니핑', type: '로열 티니핑', file: '6기_아름핑.webp' },
    { name: '뽀니핑', gen: '6기', genName: '프린세스 티니핑', type: '로열 티니핑', file: '6기_뽀니핑.webp' },
    { name: '이클립스핑', gen: '6기', genName: '프린세스 티니핑', type: '레전드 티니핑', file: '6기_이클립스핑.webp' },
    { name: '다이아나핑', gen: '6기', genName: '프린세스 티니핑', type: '레전드 티니핑', file: '6기_다이아나핑.webp' },
    { name: '뽀득핑', gen: '6기', genName: '프린세스 티니핑', type: '일반 티니핑', file: '6기_뽀득핑.webp' },
    { name: '차밍핑', gen: '6기', genName: '프린세스 티니핑', type: '일반 티니핑', file: '6기_차밍핑.webp' },
    { name: '나비핑', gen: '6기', genName: '프린세스 티니핑', type: '일반 티니핑', file: '6기_나비핑.webp' },
    { name: '실크핑', gen: '6기', genName: '프린세스 티니핑', type: '일반 티니핑', file: '6기_실크핑.webp' },
    { name: '스노우핑', gen: '6기', genName: '프린세스 티니핑', type: '일반 티니핑', file: '6기_스노우핑.webp' },
    { name: '이슬핑', gen: '6기', genName: '프린세스 티니핑', type: '일반 티니핑', file: '6기_이슬핑.webp' },
    { name: '쿨쿨핑', gen: '6기', genName: '프린세스 티니핑', type: '일반 티니핑', file: '6기_쿨쿨핑.webp' },
    { name: '슈슈핑', gen: '6기', genName: '프린세스 티니핑', type: '일반 티니핑', file: '6기_슈슈핑.webp' },
    { name: '롱롱핑', gen: '6기', genName: '프린세스 티니핑', type: '일반 티니핑', file: '6기_롱롱핑.webp' },
    { name: '큐핑', gen: '6기', genName: '프린세스 티니핑', type: '일반 티니핑', file: '6기_큐핑.webp' },
    { name: '야옹핑', gen: '6기', genName: '프린세스 티니핑', type: '일반 티니핑', file: '6기_야옹핑.webp' },
    { name: '샤를핑', gen: '6기', genName: '프린스 티니핑', type: '일반 티니핑', file: '6기_샤를핑.webp' },
    { name: '트롯핑', gen: '6기', genName: '프린스 티니핑', type: '일반 티니핑', file: '6기_트롯핑.webp' },
    { name: '깨굴핑', gen: '6기', genName: '프린스 티니핑', type: '일반 티니핑', file: '6기_깨굴핑.webp' },
    { name: '젠틀핑', gen: '6기', genName: '프린스 티니핑', type: '일반 티니핑', file: '6기_젠틀핑.webp' }
];

var TINYPING_GEN_ORDER = ['1기', '2기', '3기', '4기', '5기', '6기'];
var TINYPING_GEN_LABEL = {
    '1기': '큐브 티니핑', '2기': '보석 티니핑', '3기': '열쇠 티니핑',
    '4기': '디저트 티니핑', '5기': '스타 티니핑', '6기': '프린세스 티니핑'
};
var TINYPING_TYPE_ORDER = ['로열 티니핑', '일반 티니핑', '레전드 티니핑'];
var TINYPING_TYPE_SHORT_LABEL = {
    '로열 티니핑': '로열핑', '일반 티니핑': '일반핑', '레전드 티니핑': '레전드핑'
};
var TINYPING_TIME_OPTIONS = [{ v: 10, l: '10초' }, { v: 15, l: '15초' }, { v: 20, l: '20초' }, { v: 0, l: '무제한' }];
var TINYPING_TITLE = '🎀 티니핑 맞히기!';

// 한글 초성 분해 (공백은 그대로 유지)
var TP_CHO_LIST = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
function tpGetChosung(ch) {
    if (ch === ' ') return ' ';
    var code = ch.charCodeAt(0) - 0xAC00;
    if (code < 0 || code > 11171) return ch;
    return TP_CHO_LIST[Math.floor(code / (21 * 28))];
}
function tpGetWordChosung(word) {
    return word.split('').map(tpGetChosung).join('');
}

var tinypingSettings = {
    gens: TINYPING_GEN_ORDER.slice(),
    types: TINYPING_TYPE_ORDER.slice(),
    timeLimit: 10
};
var tinypingState = {};
var TP_SPEECH_SUPPORTED = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
var tpVoiceRecognition = null;

function initTinypingQuiz() {
    clearAllGameTimers();
    stopVoiceRecognition();
    document.getElementById('homeBtn').style.display = 'none';
    renderTinypingSetup();
}

function getTinypingPool() {
    return TINYPING_DATA.filter(function (d) {
        return tinypingSettings.gens.indexOf(d.gen) > -1 && tinypingSettings.types.indexOf(d.type) > -1;
    });
}

function renderTinypingSetup() {
    var pool = getTinypingPool();
    var allGens = tinypingSettings.gens.length === TINYPING_GEN_ORDER.length;
    var allTypes = tinypingSettings.types.length === TINYPING_TYPE_ORDER.length;

    var html = '<div class="game-title-box">' + TINYPING_TITLE + '</div>';
    html += '<div class="game-sub-desc">캐릭터 사진을 보고 이름을 소리 내어 맞혀보세요!</div>';

    html += '<div class="setup-section-label">기수</div><div class="tinyping-gen-grid">';
    html += '<button class="setup-btn tinyping-gen-all' + (allGens ? ' active' : '') + '" onclick="toggleTinypingGenAll()">전체</button>';
    TINYPING_GEN_ORDER.forEach(function (g) {
        var active = tinypingSettings.gens.indexOf(g) > -1;
        var shortLabel = TINYPING_GEN_LABEL[g].replace('티니핑', '').trim();
        html += '<button class="setup-btn' + (active ? ' active' : '') + '" onclick="toggleTinypingGen(\'' + g + '\')">' +
            '<span class="tinyping-gen-num">' + g + '</span><span class="tinyping-gen-name">(' + shortLabel + ')</span></button>';
    });
    html += '</div>';

    html += '<div class="setup-section-label">유형</div><div class="tinyping-type-grid">';
    html += '<button class="setup-btn' + (allTypes ? ' active' : '') + '" onclick="toggleTinypingTypeAll()">전체</button>';
    TINYPING_TYPE_ORDER.forEach(function (t) {
        var active = tinypingSettings.types.indexOf(t) > -1;
        html += '<button class="setup-btn' + (active ? ' active' : '') + '" onclick="toggleTinypingType(\'' + t + '\')">' + TINYPING_TYPE_SHORT_LABEL[t] + '</button>';
    });
    html += '</div>';

    html += '<div class="setup-section-label">제한 시간</div><div class="tinyping-type-grid">';
    TINYPING_TIME_OPTIONS.forEach(function (t) {
        html += '<button class="setup-btn' + (tinypingSettings.timeLimit === t.v ? ' active' : '') + '" onclick="setTinypingTimeLimit(' + t.v + ')">' + t.l + '</button>';
    });
    html += '</div>';

    html += '<button class="action-btn" ' + (pool.length === 0 ? 'disabled' : '') + ' onclick="startTinypingSession()">시작하기 🚀 (' + pool.length + '개 중에서)</button>';
    document.getElementById('mainArea').innerHTML = html;
}

function toggleTinypingGenAll() {
    tinypingSettings.gens = (tinypingSettings.gens.length === TINYPING_GEN_ORDER.length) ? [] : TINYPING_GEN_ORDER.slice();
    renderTinypingSetup();
}
function toggleTinypingGen(g) {
    var idx = tinypingSettings.gens.indexOf(g);
    if (idx > -1) { tinypingSettings.gens.splice(idx, 1); } else { tinypingSettings.gens.push(g); }
    renderTinypingSetup();
}
function toggleTinypingTypeAll() {
    tinypingSettings.types = (tinypingSettings.types.length === TINYPING_TYPE_ORDER.length) ? [] : TINYPING_TYPE_ORDER.slice();
    renderTinypingSetup();
}
function toggleTinypingType(t) {
    var idx = tinypingSettings.types.indexOf(t);
    if (idx > -1) { tinypingSettings.types.splice(idx, 1); } else { tinypingSettings.types.push(t); }
    renderTinypingSetup();
}
function setTinypingTimeLimit(t) { tinypingSettings.timeLimit = t; renderTinypingSetup(); }

function startTinypingSession() {
    var pool = getTinypingPool();
    if (pool.length === 0) return;
    stopVoiceRecognition();
    clearAllGameTimers();
    tinypingState = { pool: pool, correctCount: 0, totalCount: 0, current: null };
    document.getElementById('homeBtn').style.display = 'inline-block';
    nextTinypingQuestion();
}

function nextTinypingQuestion() {
    stopVoiceRecognition();
    clearAllGameTimers();

    var pool = tinypingState.pool;
    var next = pickRandom(pool);
    if (pool.length > 1 && tinypingState.current) {
        while (next.name === tinypingState.current.name) { next = pickRandom(pool); }
    }
    tinypingState.current = next;
    resetTinypingRoundState();
    renderTinyping();
    startTinypingTimer();
    if (TP_SPEECH_SUPPORTED) { startVoiceAnswer(); }
}

function retryTinypingQuestion() {
    stopVoiceRecognition();
    clearAllGameTimers();
    resetTinypingRoundState();
    renderTinyping();
    startTinypingTimer();
    if (TP_SPEECH_SUPPORTED) { startVoiceAnswer(); }
}

function resetTinypingRoundState() {
    tinypingState.revealed = false;
    tinypingState.voiceSaid = undefined;
    tinypingState.voiceMatched = undefined;
    tinypingState.timedOut = false;
    tinypingState.showSuccess = false;
    tinypingState.timeLeft = tinypingSettings.timeLimit;
    tinypingState.timerId = null;
}

function startTinypingTimer() {
    if (tinypingSettings.timeLimit <= 0) return; // 무제한: 타이머 없음
    var bar = document.getElementById('tinypingTimerBar');
    if (bar) bar.style.width = '100%';
    tinypingState.timerId = setInterval(function () {
        tinypingState.timeLeft -= 0.1;
        var pct = Math.max(0, (tinypingState.timeLeft / tinypingSettings.timeLimit) * 100);
        var b = document.getElementById('tinypingTimerBar');
        if (b) b.style.width = pct + '%';
        if (tinypingState.timeLeft <= 0) {
            clearInterval(tinypingState.timerId);
            tinypingState.timerId = null;
            tinypingState.timedOut = true;
            revealTinyping(false);
        }
    }, 100);
    activeTimers.push(tinypingState.timerId);
}

// 초성 힌트는 문제가 나오자마자 바로 보여준다.
function buildTinypingHintHtml() {
    if (tinypingState.revealed) {
        return '<div class="tinyping-hint-box tinyping-hint-answer">' + tinypingState.current.name + '</div>';
    }
    return '<div class="tinyping-hint-box">' + tpGetWordChosung(tinypingState.current.name) + '</div>';
}

function renderTinyping() {
    var c = tinypingState.current;
    var html = '<div class="game-title-box">' + TINYPING_TITLE + '</div>';
    html += '<div class="game-sub-desc">사진 속 캐릭터의 이름을 소리 내어 말해보세요!' + (TP_SPEECH_SUPPORTED ? ' 마이크 버튼을 누르고 말해보세요.' : ' 다 말했으면 눌러서 확인해요.') + '</div>';

    if (!tinypingState.revealed && tinypingSettings.timeLimit > 0) {
        html += '<div class="timer-container"><div class="timer-bar" id="tinypingTimerBar"></div></div>';
    }

    html += '<div class="status-row"><div class="tinyping-badge-group">' +
        '<span class="tinyping-badge tinyping-badge-gen">' + c.genName + '</span>' +
        '<span class="tinyping-badge tinyping-badge-type">' + c.type + '</span>' +
        '</div><div>맞춘 개수: ' + tinypingState.correctCount + ' / ' + tinypingState.totalCount + '</div></div>';

    html += '<div class="tinyping-image-box"><img src="images/' + encodeURIComponent(c.file) + '" alt="티니핑 캐릭터"></div>';

    html += '<div id="tinypingHintArea">' + buildTinypingHintHtml() + '</div>';

    if (!tinypingState.revealed) {
        if (TP_SPEECH_SUPPORTED) {
            html += '<button class="action-btn" style="background:#8b5cf6;" onclick="startVoiceAnswer()">🎤 음성으로 답하기</button>';
            html += '<div id="tpVoiceStatus" class="tinyping-voice-status"></div>';
            html += '<button class="action-btn secondary" onclick="revealTinyping(true)">그냥 정답 보기 👀</button>';
        } else {
            html += '<button class="action-btn" onclick="revealTinyping(true)">정답 확인하기 👀</button>';
        }
    } else {
        var showsNextBtn = tinypingState.timedOut || tinypingState.showSuccess || tinypingState.voiceSaid !== undefined;
        var voiceHint = (TP_SPEECH_SUPPORTED && showsNextBtn) ? '<div class="tinyping-voice-status">🎤 "다음 문제" 또는 "처음으로"라고 말해도 돼요</div>' : '';

        if (tinypingState.timedOut) {
            html += '<div class="msg-box bad" style="display:block;">⏰ 시간이 다 됐어요!</div>';
            html += voiceHint;
            html += buildStandardResultButtons('nextTinypingQuestion()', 'retryTinypingQuestion()', 'initTinypingQuiz()');
        } else if (tinypingState.showSuccess) {
            if (tinypingState.voiceSaid !== undefined) {
                html += '<div class="game-sub-desc">내가 말한 것: "' + tinypingState.voiceSaid + '"</div>';
            }
            html += '<div class="msg-box good" style="display:block;">🎉 ' + (tinypingState.voiceSaid !== undefined ? '정답을 정확히 말했어요!' : '정답이에요!') + '</div>';
            html += voiceHint;
            html += buildStandardResultButtons('nextTinypingQuestion()', 'retryTinypingQuestion()', 'initTinypingQuiz()');
        } else if (tinypingState.voiceSaid !== undefined) {
            html += '<div class="game-sub-desc">내가 말한 것: "' + tinypingState.voiceSaid + '"</div>';
            html += '<div class="msg-box bad" style="display:block;">음... 다르게 들렸어요. 잘 말했는데 못 알아들었을 수도 있어요!</div>';
            html += voiceHint;
            html += '<div class="options-grid">';
            html += '<button class="action-btn" onclick="overrideTinypingCorrect()">그래도 맞았어요! 🙋</button>';
            html += '<button class="action-btn secondary" onclick="nextTinypingQuestion()">다음 문제 ▶</button>';
            html += '</div>';
        } else {
            html += '<div class="options-grid">';
            html += '<button class="action-btn" onclick="tinypingResult(true)">맞았어요! 🎉</button>';
            html += '<button class="action-btn secondary" onclick="tinypingResult(false)">아쉬워요</button>';
            html += '</div>';
        }
    }
    html += '<div style="margin-top:1.5rem;"><button class="action-btn secondary" onclick="initTinypingQuiz()" style="font-size:0.85rem; padding:0.5rem 0.8rem;">설정으로 돌아가기 ⚙️</button></div>';
    document.getElementById('mainArea').innerHTML = html;

    if (tinypingState.revealed && (tinypingState.timedOut || tinypingState.showSuccess || tinypingState.voiceSaid !== undefined)) {
        if (TP_SPEECH_SUPPORTED) { startTinypingNextVoiceListener(); }
    }
}

function revealTinyping(manual) {
    stopVoiceRecognition();
    if (tinypingState.timerId) { clearInterval(tinypingState.timerId); tinypingState.timerId = null; }
    tinypingState.revealed = true;
    if (manual === false) {
        tinypingState.timedOut = true;
        tinypingState.totalCount++;
    } else if (tinypingState.voiceSaid !== undefined) {
        // 음성으로 몇 번 시도했지만 못 맞히고 "그냥 정답 보기"를 누른 경우도 한 번의 시도로 집계한다.
        tinypingState.totalCount++;
    }
    renderTinyping();
}

function tinypingResult(correct) {
    tinypingState.totalCount++;
    if (correct) {
        tinypingState.correctCount++;
        tinypingState.showSuccess = true;
        renderTinyping();
    } else {
        nextTinypingQuestion();
    }
}
function overrideTinypingCorrect() {
    tinypingState.correctCount++;
    tinypingState.showSuccess = true;
    renderTinyping();
}

function stopVoiceRecognition() {
    if (tpVoiceRecognition) {
        try { tpVoiceRecognition.onresult = null; tpVoiceRecognition.onerror = null; tpVoiceRecognition.onend = null; tpVoiceRecognition.stop(); } catch (e) { }
        tpVoiceRecognition = null;
    }
}
// 음성 인식은 한 번 말하면 끝나버리는 단발성이라, 정답을 못 맞히면 onend에서
// (이 문제가 아직 진행 중일 때만) 스스로 다시 시작해서 타이머가 끝날 때까지 마이크가 계속 켜져있게 한다.
function startVoiceAnswer() {
    var SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) return;
    stopVoiceRecognition();
    var statusEl = document.getElementById('tpVoiceStatus');
    if (statusEl) statusEl.innerText = '🎙️ 듣고 있어요... 캐릭터 이름을 말해보세요!';

    var recognition = new SpeechRecognitionAPI();
    recognition.lang = 'ko-KR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    recognition.onresult = function (event) {
        var transcripts = [];
        for (var i = 0; i < event.results[0].length; i++) {
            transcripts.push(event.results[0][i].transcript);
        }
        handleTinypingVoiceResult(transcripts);
    };
    recognition.onerror = function () {
        var st = document.getElementById('tpVoiceStatus');
        if (st && tpVoiceRecognition === recognition) st.innerText = '🎙️ 아직 듣고 있어요... 다시 한 번 말해볼까요?';
    };
    recognition.onend = function () {
        // 인식이 끝나자마자 바로 start()를 다시 부르면 브라우저가 무시하거나 조용히 실패해서
        // (특히 무음이 몇 초 이어져 자동 종료된 경우) 마이크가 영영 안 켜질 수 있다.
        // 살짝 텀을 두고 다시 시작하면 훨씬 안정적으로 계속 듣게 된다.
        if (tpVoiceRecognition === recognition && !tinypingState.revealed) {
            setTimeout(function () {
                if (tpVoiceRecognition === recognition && !tinypingState.revealed) {
                    try { recognition.start(); } catch (e) { }
                }
            }, 300);
        }
    };

    tpVoiceRecognition = recognition;
    try { recognition.start(); } catch (e) { }
}
function tpNormalizeSpeechText(s) {
    return String(s).replace(/\s+/g, '').trim();
}

// ===== 발음 유사도 비교 (아이들 발음이 정확하지 않아도 정답으로 인정하기 위함) =====
// 음절을 초성/중성/종성 자모로 풀어서 비교하면, 음절 단위 비교보다 훨씬 촘촘하게
// "얼마나 비슷하게 말했는지"를 잴 수 있다 (예: "새콤핑"과 "새콩핑"은 자모 9개 중 1개만 달라 정확도가 높게 나옴).
var TP_JAMO_CHO = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
var TP_JAMO_JUNG = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
var TP_JAMO_JONG = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
function tpDecomposeSyllable(ch) {
    var code = ch.charCodeAt(0) - 0xAC00;
    if (code < 0 || code > 11171) return [ch];
    var cho = Math.floor(code / (21 * 28));
    var jung = Math.floor((code % (21 * 28)) / 28);
    var jong = code % 28;
    var out = [TP_JAMO_CHO[cho], TP_JAMO_JUNG[jung]];
    if (jong > 0) out.push(TP_JAMO_JONG[jong]);
    return out;
}
function tpToJamoArray(str) {
    var out = [];
    for (var i = 0; i < str.length; i++) { out = out.concat(tpDecomposeSyllable(str[i])); }
    return out;
}
function tpLevenshtein(a, b) {
    var m = a.length, n = b.length;
    var dp = [];
    for (var i = 0; i <= m; i++) { dp.push([i]); }
    for (var j = 1; j <= n; j++) { dp[0][j] = j; }
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            dp[i][j] = (a[i - 1] === b[j - 1]) ? dp[i - 1][j - 1] :
                1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
    }
    return dp[m][n];
}
function tpSpeechSimilarity(a, b) {
    var ja = tpToJamoArray(a), jb = tpToJamoArray(b);
    var maxLen = Math.max(ja.length, jb.length);
    if (maxLen === 0) return 1;
    return 1 - tpLevenshtein(ja, jb) / maxLen;
}
var TP_VOICE_MATCH_THRESHOLD = 0.5; // 정확도 50% 이상이면 정답으로 인정

// 정답/시간초과 화면에서 "다음 문제"라고 말하면 다음 문제로, "처음으로"라고 말하면 설정 화면으로 이동한다.
// 알아듣지 못하거나 다른 말이면 onend에서 이 인스턴스가 여전히 최신인지 확인 후 다시 듣기를 반복한다.
function startTinypingNextVoiceListener() {
    var SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) return;
    stopVoiceRecognition();

    var recognition = new SpeechRecognitionAPI();
    recognition.lang = 'ko-KR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    recognition.onresult = function (event) {
        var isNext = false, isHome = false;
        for (var i = 0; i < event.results[0].length; i++) {
            var t = tpNormalizeSpeechText(event.results[0][i].transcript);
            if (t.indexOf('처음') > -1) { isHome = true; }
            if (t.indexOf('다음') > -1) { isNext = true; }
        }
        if (isHome) { goHome(); }
        else if (isNext) { nextTinypingQuestion(); }
    };
    recognition.onerror = function () { };
    recognition.onend = function () {
        if (tpVoiceRecognition === recognition) {
            setTimeout(function () {
                if (tpVoiceRecognition === recognition) {
                    try { recognition.start(); } catch (e) { }
                }
            }, 300);
        }
    };

    tpVoiceRecognition = recognition;
    try { recognition.start(); } catch (e) { }
}
function handleTinypingVoiceResult(transcripts) {
    var target = tpNormalizeSpeechText(tinypingState.current.name);
    var matched = transcripts.some(function (t) {
        var n = tpNormalizeSpeechText(t);
        if (n === target || n.indexOf(target) > -1 || target.indexOf(n) > -1) return true;
        return tpSpeechSimilarity(n, target) >= TP_VOICE_MATCH_THRESHOLD;
    });
    tinypingState.voiceSaid = transcripts[0] || '(인식된 말이 없어요)';
    tinypingState.voiceMatched = matched;

    if (!matched) {
        // 정답이 아니면 라운드를 끝내지 않는다. 마이크는 onend에서 자동으로 다시 듣기 시작한다.
        var st = document.getElementById('tpVoiceStatus');
        if (st) st.innerText = '🎙️ "' + tinypingState.voiceSaid + '"라고 들었어요. 다시 말해볼까요?';
        return;
    }

    stopVoiceRecognition();
    if (tinypingState.timerId) { clearInterval(tinypingState.timerId); tinypingState.timerId = null; }
    tinypingState.revealed = true;
    tinypingState.totalCount++;
    tinypingState.correctCount++;
    tinypingState.showSuccess = true;
    renderTinyping();
}
