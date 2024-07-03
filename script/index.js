/* 앤티앤스 프레즐 자바스크립트 */
const save_btn = document.querySelector('#save_btn')
console.log(save_btn)

/* function btn_func(){
    console.log('test')
}
btn_func() */

save_btn.addEventListener('click', function(){
    let save_q = confirm('한줄평(이벤트)을 등록하시겠습니까?')
    let save_end = alert('이벤트 참여 완료되었습니다.')
})