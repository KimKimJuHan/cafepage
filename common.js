document.getElementById("header").innerHTML = `
  <div class="logo">카페이름이 어떻게</div>
  <nav>
    <a href="index.html">홈</a>
    <a href="menu.html">메뉴</a>
    <a href="about.html">소개</a>
  </nav>
`;

document.getElementById("footer").innerHTML = `
  카페이름이 어떻게 | 집 바로 앞 | 전화 010-1010-0111<br>
  Copyright 2026 카페이름이 어떻게
`;
const page = location.pathname.split("/").pop() || "index.html";


document.querySelectorAll("nav a").forEach((a) => {
  if (a.getAttribute("href") === page) {
    a.classList.add("active");
  }
});
