let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  


const noTexts = [
    "真的不写嘛~~？", 
    "不再考虑考虑嘛~~~", 
    "再想想嘛~~~", 
    "就写一下嘛，又不多~~~", 
    "写一下嘛~~写一下嘛~~~"
];


noButton.addEventListener("click", function() {
    clickCount++;

    
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    
    let moveUp = clickCount * 25; 
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 这里需要自己准备5张图片，每点一次“右边的按钮”切换一张图片
    if (clickCount === 1) mainImage.src = "https://tse3-mm.cn.bing.net/th/id/OIP-C.FVtlA55tFk-99ftvDXX4bAHaJ4?rs=1&pid=ImgDetMain"; // 点击图片1
    if (clickCount === 2) mainImage.src = "https://tse4-mm.cn.bing.net/th/id/OIP-C.SRyDkWGSAbZNFUtIiAnWHwHaHG?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";   // 点击图片2
    if (clickCount === 3) mainImage.src = "https://tse2-mm.cn.bing.net/th/id/OIP-C.gysif8ffkcE1dp7GhPGqhgHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";   // 点击图片3
    if (clickCount === 4) mainImage.src = "https://img.taotu.cn/ssd/ssd4/1/2025-03-13/1_564de798546896ec966da3db2fed2b53.webp";  // 点击图片4
    if (clickCount >= 5) mainImage.src = "https://picx.zhimg.com/v2-fda493e152803eb96c38c2b492f23dcb_720w.jpg?source=172ae18b";  // 点击图片5

});

// 这里需要自己选个图片然后改src路径，还可以改字
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">来学3 211拿高数作业本吧！！</h1>
            <img src="https://pic1.zhimg.com/v2-646d6681fc76680c29080e545b09c426_1440w.jpg" alt="可爱表情包" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});
