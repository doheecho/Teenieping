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

// ===== 정답을 음성으로 읽어주기 (TTS, 팝업 설정에서 목소리/방식 선택 가능) =====
// 기본값은 기기의 시스템 설정을 그대로 따른다 (voice/lang을 아예 지정하지 않음).
// PC는 한국어 음성이 깔려있어 잘 되지만, 안드로이드 기기는 한국어 음성이 따로 설치되어
// 있지 않은 경우가 많아서 'ko-KR'을 강제로 지정하면 아예 소리가 안 나는 경우가 있다.
// 그래서 사용자가 직접 고르지 않으면 언어/목소리를 강제하지 않고, 설정 팝업에서는
// 기기에 설치된 모든 목소리 중에서 원하는 것을 선택할 수 있게 한다.
var TP_SPEECH_SYNTH_SUPPORTED = !!window.speechSynthesis;
var TP_VOICE_STORAGE_KEY = 'tinypingVoiceURI';
var TP_ANSWER_STYLE_KEY = 'tinypingAnswerStyle';
var tpVoicesList = [];
function tpLoadVoices() {
    if (!TP_SPEECH_SYNTH_SUPPORTED) return;
    tpVoicesList = window.speechSynthesis.getVoices();
}
if (TP_SPEECH_SYNTH_SUPPORTED) {
    tpLoadVoices();
    // 목소리 목록은 비동기로 늦게 채워지는 브라우저가 많아서, 준비되면 다시 읽어오고
    // 설정 팝업이 열려있으면 새로 그려서 목록에 반영한다.
    window.speechSynthesis.onvoiceschanged = function () {
        tpLoadVoices();
        if (document.getElementById('tpSettingsOverlay')) { renderTinypingSettingsModal(); }
    };
}
function getTinypingKoreanVoices() {
    // 'ko'로 "시작하기만" 하면 통과시키면 'kok'(인도 콘칸어) 같은 언어 코드까지 한국어로
    // 잘못 걸러져서 인도어 목소리가 섞여 들어온다. 'ko' 단독이거나 'ko-KR'처럼 'ko-'로
    // 시작하는 경우만 한국어로 인정한다.
    return tpVoicesList.filter(function (v) {
        var lang = (v.lang || '').toLowerCase();
        return lang === 'ko' || lang.indexOf('ko-') === 0;
    });
}
function tpGetSavedVoiceURI() {
    try { return localStorage.getItem(TP_VOICE_STORAGE_KEY) || ''; } catch (e) { return ''; }
}
// null을 반환하면 "기본값" 상태를 뜻하며, 이때는 utter.voice/utter.lang을 아예 지정하지 않고
// 기기의 시스템 설정(기본 언어·기본 목소리)을 그대로 따르게 둔다.
function getTinypingSelectedVoice() {
    if (!TP_SPEECH_SYNTH_SUPPORTED) return null;
    var uri = tpGetSavedVoiceURI();
    if (!uri) return null; // 직접 고른 적 없음 → 기본값(시스템 설정)
    return tpVoicesList.filter(function (v) { return v.voiceURI === uri; })[0] || null;
}
function setTinypingVoice(uri) {
    try { localStorage.setItem(TP_VOICE_STORAGE_KEY, uri || ''); } catch (e) { }
    renderTinypingSettingsModal();
}
// 설치된 TTS 목소리 이름에서 남/여를 대략적으로 추정한다 (완벽하지 않은 보조 정보용).
function tpGuessVoiceGender(name) {
    var n = (name || '').toLowerCase();
    var femaleHints = ['female', '여성', 'heami', 'yuna', 'sora', 'woman'];
    var maleHints = ['male', '남성', 'injoon', 'man'];
    for (var i = 0; i < femaleHints.length; i++) { if (n.indexOf(femaleHints[i]) > -1) return '여자'; }
    for (var i = 0; i < maleHints.length; i++) { if (n.indexOf(maleHints[i]) > -1) return '남자'; }
    return '';
}
// 한국어 음성들을 여자/남자/기타(구분 불가)로 묶는다. 같은 성별이 여러 개면 첫 번째만 대표로 쓴다.
function tpBuildVoiceGenderGroups(koreanVoices) {
    var groups = { female: null, male: null, other: [] };
    koreanVoices.forEach(function (v) {
        var g = tpGuessVoiceGender(v.name);
        if (g === '여자' && !groups.female) { groups.female = v; }
        else if (g === '남자' && !groups.male) { groups.male = v; }
        else if (!g) { groups.other.push(v); }
    });
    return groups;
}
function tpGetAnswerStyle() {
    try { return localStorage.getItem(TP_ANSWER_STYLE_KEY) || 'nameOnly'; } catch (e) { return 'nameOnly'; }
}
function setTinypingAnswerStyle(style) {
    try { localStorage.setItem(TP_ANSWER_STYLE_KEY, style); } catch (e) { }
    renderTinypingSettingsModal();
}
function speakTinypingAnswer(text, isCorrect, onEnd) {
    if (!TP_SPEECH_SYNTH_SUPPORTED) { if (onEnd) onEnd(); return; }
    try {
        window.speechSynthesis.cancel(); // 이전에 읽던 말이 남아있으면 정리하고 새로 읽는다.
        var style = tpGetAnswerStyle();
        var spoken = (isCorrect && style === 'correctPrefix') ? ('정답! ' + text) : text;
        var utter = new SpeechSynthesisUtterance(spoken);
        var voice = getTinypingSelectedVoice();
        if (voice) {
            // 사용자가 직접 고른 목소리가 있을 때만 voice/lang을 지정한다.
            utter.voice = voice;
            utter.lang = voice.lang;
        }
        // voice가 없으면(기본값) lang도 지정하지 않는다 — 'ko-KR'을 강제하면 한국어 음성이
        // 없는 기기(일부 안드로이드 등)에서는 아예 아무 소리도 안 나기 때문에, 그냥 기기의
        // 시스템 기본 설정 그대로 읽게 둔다.
        if (onEnd) { utter.onend = onEnd; utter.onerror = onEnd; }
        window.speechSynthesis.speak(utter);
    } catch (e) { if (onEnd) onEnd(); }
}
// ===== 설정 팝업 (목소리 / 정답 방식, 메인 설정 화면과 별도의 모달) =====
var tinypingUiState = { settingsTab: 'voice' };
function openTinypingSettings() {
    tinypingUiState.settingsTab = 'voice';
    renderTinypingSettingsModal();
}
function closeTinypingSettings() {
    var el = document.getElementById('tpSettingsOverlay');
    if (el) el.parentNode.removeChild(el);
}
function setTinypingSettingsTab(tab) {
    tinypingUiState.settingsTab = tab;
    renderTinypingSettingsModal();
}
function tpVoiceSetupBtnHtml(voice, label, savedUri) {
    var active = savedUri === voice.voiceURI;
    var safeUri = voice.voiceURI.replace(/'/g, "\\'");
    return '<button class="setup-btn' + (active ? ' active' : '') + '" onclick="setTinypingVoice(\'' + safeUri + '\')">' + label + '</button>';
}
function buildTinypingVoiceTabHtml() {
    if (!TP_SPEECH_SYNTH_SUPPORTED) {
        return '<div class="tinyping-voice-status">이 기기/브라우저는 음성 읽어주기를 지원하지 않아요.</div>';
    }
    var savedUri = tpGetSavedVoiceURI();
    var koreanVoices = getTinypingKoreanVoices();
    var otherVoices = tpVoicesList.filter(function (v) { return koreanVoices.indexOf(v) === -1; });

    var html = '<div class="setup-section-label">정답을 읽어주는 목소리</div>';
    html += '<div class="tinyping-voice-status">기본값은 기기의 시스템 설정(기본 언어·목소리)을 그대로 따라요.</div>';
    html += '<div class="tinyping-type-grid">';
    html += '<button class="setup-btn' + (savedUri === '' ? ' active' : '') + '" onclick="setTinypingVoice(\'\')">⚙️ 기본값 (시스템 설정)</button>';

    if (koreanVoices.length) {
        var groups = tpBuildVoiceGenderGroups(koreanVoices);
        if (groups.female) { html += tpVoiceSetupBtnHtml(groups.female, '👩 여자 목소리', savedUri); }
        if (groups.male) { html += tpVoiceSetupBtnHtml(groups.male, '👨 남자 목소리', savedUri); }
        groups.other.forEach(function (v) { html += tpVoiceSetupBtnHtml(v, v.name, savedUri); });
    }
    // 한국어 음성이 없는 기기(특히 일부 안드로이드)에서도 설치된 다른 목소리 중에서 고를 수 있게 한다.
    otherVoices.forEach(function (v) { html += tpVoiceSetupBtnHtml(v, v.name + ' (' + v.lang + ')', savedUri); });
    html += '</div>';

    if (koreanVoices.length === 0) {
        html += '<div class="tinyping-voice-status">이 기기에는 한국어 음성이 따로 설치돼 있지 않아요. "기본값"을 쓰면 기기의 시스템 설정대로 읽어주고, 위 목록에서 설치된 다른 목소리를 선택할 수도 있어요.</div>';
    }
    html += '<button class="action-btn secondary" style="font-size:0.85rem; padding:0.5rem 0.8rem;" onclick="speakTinypingAnswer(\'안녕하세요\', false)">🔊 미리 듣기</button>';
    return html;
}
function buildTinypingAnswerStyleTabHtml() {
    var style = tpGetAnswerStyle();
    var html = '<div class="setup-section-label">정답을 맞췄을 때 읽어주는 방식</div><div class="tinyping-type-grid">';
    html += '<button class="setup-btn' + (style === 'nameOnly' ? ' active' : '') + '" onclick="setTinypingAnswerStyle(\'nameOnly\')">이름만 (예: "하츄핑")</button>';
    html += '<button class="setup-btn' + (style === 'correctPrefix' ? ' active' : '') + '" onclick="setTinypingAnswerStyle(\'correctPrefix\')">정답! + 이름 (예: "정답! 하츄핑")</button>';
    html += '</div><div class="tinyping-voice-status">오답이거나 시간이 끝났을 땐 항상 이름만 말해줘요.</div>';
    return html;
}
function renderTinypingSettingsModal() {
    var tab = tinypingUiState.settingsTab;
    var html = '<div class="tp-modal-overlay" id="tpSettingsOverlay" onclick="if(event.target===this){closeTinypingSettings();}">';
    html += '<div class="tp-modal-box">';
    html += '<div class="tp-modal-header"><div class="tp-modal-title">⚙️ 설정</div><button class="tp-modal-close" onclick="closeTinypingSettings()">✕</button></div>';
    html += '<div class="tp-modal-tabs">';
    html += '<button class="tp-modal-tab' + (tab === 'voice' ? ' active' : '') + '" onclick="setTinypingSettingsTab(\'voice\')">🔊 목소리</button>';
    html += '<button class="tp-modal-tab' + (tab === 'style' ? ' active' : '') + '" onclick="setTinypingSettingsTab(\'style\')">🗣️ 정답 방식</button>';
    html += '</div>';
    html += '<div class="tp-modal-body">' + (tab === 'voice' ? buildTinypingVoiceTabHtml() : buildTinypingAnswerStyleTabHtml()) + '</div>';
    html += '</div></div>';

    var existing = document.getElementById('tpSettingsOverlay');
    if (existing) { existing.outerHTML = html; } else { document.body.insertAdjacentHTML('beforeend', html); }
}

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

    html += '<button class="action-btn secondary" style="margin-bottom:1.2rem;" onclick="openTinypingSettings()">⚙️ 목소리 · 정답 방식 설정</button>';

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
    tinypingState.answerSpoken = false;
    tinypingState.wrongAttempts = 0;
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
        if (tinypingState.timedOut) {
            html += '<div class="msg-box bad" style="display:block;">⏰ 시간이 다 됐어요!</div>';
            html += buildStandardResultButtons('nextTinypingQuestion()', 'retryTinypingQuestion()', 'initTinypingQuiz()');
        } else if (tinypingState.showSuccess) {
            if (tinypingState.voiceSaid !== undefined) {
                html += '<div class="game-sub-desc">내가 말한 것: "' + tinypingState.voiceSaid + '"</div>';
            }
            html += '<div class="msg-box good" style="display:block;">🎉 ' + (tinypingState.voiceSaid !== undefined ? '정답을 정확히 말했어요!' : '정답이에요!') + '</div>';
            if (TP_SPEECH_SUPPORTED) { html += '<div class="tinyping-voice-status">🎤 "다음" 또는 "다음 문제"라고 말해도 넘어가요</div>'; }
            html += buildStandardResultButtons('nextTinypingQuestion()', 'retryTinypingQuestion()', 'initTinypingQuiz()');
        } else if (tinypingState.voiceSaid !== undefined) {
            html += '<div class="game-sub-desc">내가 말한 것: "' + tinypingState.voiceSaid + '"</div>';
            html += '<div class="msg-box bad" style="display:block;">음... 다르게 들렸어요. 잘 말했는데 못 알아들었을 수도 있어요!</div>';
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

    // 정답이 화면에 뜨는 순간, 이번 라운드에서 딱 한 번만 음성으로 읽어준다.
    // 정답을 맞춘 경우엔 TTS가 끝난 뒤에 "다음" 음성 명령을 듣기 시작한다 (말하는 도중 마이크가
    // 같이 켜져 있으면 TTS 소리를 마이크가 주워듣고 오작동할 수 있어서).
    if (tinypingState.revealed && !tinypingState.answerSpoken) {
        tinypingState.answerSpoken = true;
        speakTinypingAnswer(c.name, tinypingState.showSuccess, function () {
            if (tinypingState.showSuccess && TP_SPEECH_SUPPORTED) { startTinypingNextVoiceListener(); }
        });
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
    // 이 경로는 이미 한 번 이름을 읽어준 뒤라 다시 TTS를 틀지 않으므로, 여기서 바로 "다음" 듣기를 시작한다.
    if (TP_SPEECH_SUPPORTED) { startTinypingNextVoiceListener(); }
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
    recognition.continuous = true; // 중간에 끊기고 다시 시작하는 횟수를 줄여서 마이크 시작음이 덜 울리게 한다.

    recognition.onresult = function (event) {
        // continuous 모드에서는 event.results에 이전 발화까지 계속 쌓이므로,
        // 항상 가장 마지막(이번에 새로 들어온) 결과만 읽어야 한다.
        var last = event.results[event.results.length - 1];
        var transcripts = [];
        for (var i = 0; i < last.length; i++) {
            transcripts.push(last[i].transcript);
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

// 정답 화면에서 "다음" 또는 "다음 문제"라고 말하면 다음 문제로 넘어간다 (정답을 맞춘 뒤에만 켜짐).
// 알아듣지 못하거나 다른 말이면 onend에서 이 인스턴스가 여전히 유효한지(아직 정답 화면인지)
// 확인한 뒤 다시 듣기를 반복한다.
function startTinypingNextVoiceListener() {
    var SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) return;
    stopVoiceRecognition();

    var recognition = new SpeechRecognitionAPI();
    recognition.lang = 'ko-KR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;
    recognition.continuous = true;

    recognition.onresult = function (event) {
        var last = event.results[event.results.length - 1];
        var isNext = false;
        for (var i = 0; i < last.length; i++) {
            if (tpNormalizeSpeechText(last[i].transcript).indexOf('다음') > -1) { isNext = true; }
        }
        if (isNext) { nextTinypingQuestion(); }
    };
    recognition.onerror = function () { };
    recognition.onend = function () {
        if (tpVoiceRecognition === recognition && tinypingState.showSuccess) {
            setTimeout(function () {
                if (tpVoiceRecognition === recognition && tinypingState.showSuccess) {
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
        tinypingState.wrongAttempts++;
        if (tinypingState.wrongAttempts >= 2) {
            // 한 번 더 기회를 줬는데도 또 틀리면, 더 듣지 않고 바로 정답을 보여준다.
            revealTinyping(true);
            return;
        }
        // 처음 틀렸을 때는 라운드를 끝내지 않고 한 번 더 들어본다.
        // 마이크는 onend에서 자동으로 다시 듣기 시작한다.
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
