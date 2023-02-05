const quotes = [
    {quote:"우리가 어떤 일을 감히 하지 못하는 것은 그 일이 너무 어렵기 때문이 아니라 어렵다는 생각에 사로잡혀 시도하지 않기 때문이다.",
    author:"세네카"},
    {quote:"현명한 사람은 기회를 찾지 않고 기회를 창조한다.",
    author:"프란시스 베이컨"},
    {quote:"열심히 하는 자는 좋아하는 자를 이길 수 없고 좋아하는 자는 즐기는 자를 이길 수 없다.",
    author:"공자"},
    {quote:"아름다운 장미는 가시 위에서 피고 슬픔 뒤에는 반드시 기쁨이 있다.",
    author:"윌리엄 스미스"},
    {quote:"자기 자신을 이기는 것이야말로 최대의 승리다",
    author:"플라톤"},
    {quote:"천재, 절대로 그런 건 없다. 계획과 실행, 그리고 부단한 노력 뿐이다.",
    author:"우귀스트 로댕"},
    {quote:"항상 가장 좋은 부분에 주목하는 습관을 길러라. 1년이 지나면 천 파운드 이상의 가치를 얻을 것이다.",
    author:"새뮤얼 존슨"},
    {quote:"남의 책을 읽는 데 시간을 보내라. 남이 고생한 것에 의해 쉽게 자기를 개선할 수 있다.",
    author:"소크라테스"},
    {quote:"우연은 준비되지 않은 사람을 구하지 않는다.",
    author:"파스퇴르"},
    {quote:"많이 웃는 자는 행복하고 많이 우는 자는 불행하다.",
    author:"쇼펜하우어"},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;