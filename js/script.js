// 슬라이드 기능 공부하기

document.addEventListener("DOMContentLoaded", () => {
  //  dom 요소 참조
  const mainMenu = document.querySelectorAll("header ul");
  const subMenu = document.querySelectorAll(".sub_menu");
  const header = document.querySelector("header");
  const logos = document.querySelector(".logo");
  const popup = document.querySelector("#popup");
  const noticeA = document.querySelectorAll(".notice ol li a");
  const closeBtn = document.querySelector(".popupClose");

  // 메뉴 호버시 서브메뉴 등장
  mainMenu.forEach((menu) => {
    menu.addEventListener("mouseenter", () => {
      header.style.height = "300px";
      logos.style.transform = "translateY(-10px)";
      subMenu.forEach((sub) => {
        setTimeout(() => {
          sub.style.display = "block";
        }, 500);
        //   menu.style.top = "5%";
        //   menu.style.margin = 0;
      });
    });
    menu.addEventListener("mouseleave", () => {
      header.style.height = "110px";
      subMenu.forEach((sub) => {
        sub.style.display = "none";
        //   menu.style.margin = "auto";
      });
    });
  });

  // 슬라이드 기능 구현
  /*
   1. 슬라이드 이미지 요소들 선택
   2. 현재 표시 중인 슬라이드 인덱스 관리
   3. 슬라이드 전환 함수 구현
   - 현재 슬라이드 숨기기
   - 다음 슬라이드 표시
   - 인덱스 업데이트
   4. 자동 슬라이드 전환을 위한 setInterval 사용
   */
  const slideTrack = document.querySelector(".slideTrack");
  const images = slideTrack.querySelectorAll("img");

  let currentIndex = 0;

  const updateSlide = (newIndex) => {
    images[currentIndex].classList.remove("active");
    images[newIndex].classList.add("active");
    currentIndex = newIndex;
  };

  const nextSlide = () => updateSlide((currentIndex + 1) % images.length);

  setInterval(nextSlide, 1500);

  // 팝업 기능 구현
  /*
  1. 팝업 요소와 관련 버튼들 선택
  2. 팝업 표시 함수 구현
  - display 속성 변경 또는 클래스 토글
  3. 팝업 숨김 함수 구현
  4. 이벤트 리스너 추가
  - 공지사항 클릭 시 팝업 표시
  - 닫기 버튼 클릭 시 팝업 숨김
  - 팝업 외부 클릭 시 팝업 숨김 (선택적)
  */
  function popupClose() {
    noticeA.forEach((e) => {
      e.addEventListener("click", (a) => {
        a.preventDefault();
        popup.classList.add("show");
        closeBtn.addEventListener("click", () => {
          popup.classList.remove("show");
        });
      });
    });
  }

  // 기타 인터랙션 구현
  /*
 1. 배너 클릭 이벤트 처리
 - alert 메시지 표시
 2. 푸터 링크 클릭 이벤트 처리
 - alert 메시지 표시
 3. 갤러리 이미지 클릭 이벤트 처리
 - alert 메시지 표시
 */

  // 추가 최적화 및 개선사항
  /*
1. 이벤트 위임 사용하여 성능 최적화
2. 디바운싱 또는 쓰로틀링 적용 (필요시)
3. 브라우저 호환성 고려
4. 에러 처리 및 예외 상황 대비
*/
  popupClose();
});
