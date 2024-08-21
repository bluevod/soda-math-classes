let waitlist = {
    class1: 0,
    class2: 0,
    class3: 0
};

function registerForClass(className, phoneInputId) {
    const phoneInput = document.getElementById(phoneInputId).value;

    if (phoneInput) {
        waitlist[className]++;
        document.getElementById(`waitlist${className.charAt(className.length - 1)}`).textContent = waitlist[className];
        alert(`전화번호 ${phoneInput}이(가) ${className}에 등록되었습니다.`);
    } else {
        alert('전화번호를 입력해주세요.');
    }
}
