const App = {
    data: [
        {
            img: "../Imgate/avatar.jpg",
            name: "Tô Mỳ",
            icon: "fa-solid fa-circle-check",
            partime: "1 giay truoc",
            text: "Xin chao minh la to my day!",
            imgs: "../Imgate/avatar.jpg",
            imgs1: "../Imgate/avatar.jpg",
        },
        {
            img: "../Imgate/avatar.jpg",
            name: "Tô Mỳ",
            icon: "fa-solid fa-circle-check",
            partime: "1 giay truoc",
            text: "Xin chao minh la to my day!",
            imgs: "../Imgate/avatar.jpg",
            imgs1: "../Imgate/avatar.jpg",
        },
        {
            img: "../Imgate/avatar.jpg",
            name: "Tô Mỳ",
            icon: "fa-solid fa-circle-check",
            partime: "1 giay truoc",
            text: "Xin chao minh la to my day!",
            imgs: "../Imgate/avatar.jpg",
            imgs1: "../Imgate/avatar.jpg",
        },
        {
            img: "../Imgate/avatar.jpg",
            name: "Tô Mỳ",
            icon: "fa-solid fa-circle-check",
            partime: "1 giay truoc",
            text: "Xin chao minh la to my day!",
            imgs: "../Imgate/avatar.jpg",
            imgs1: "../Imgate/avatar.jpg",
        },
    ],

    app: function(){
        const htmls = this.data.map(item => {
            return `<div class="tabidlog">
                            <div class="box">
                                <div class="avatars">
                                    <img src="${item.img}" alt="">
                                </div>
                                <div class="names">
                                    <h1>
                                       ${item.name} <i class="${item.icon}"></i>
                                    </h1>
                                    <p>
                                        35 phut truoc
                                    </p>
                                </div>
                            </div>

                            <!-- text bai viet -->
                             <div class="text">
                                <p>${item.text}</p>
                             </div>

                             <!-- img bai viet -->
                              <div class="imgs">
                                <div>
                                    <img src="${item.imgs}" alt="">
                                </div>
                                <div>
                                    <img src="${item.imgs1}" alt="">
                                </div>
                              </div>
                        </div>`;
        });

        document.getElementById("idlog-baiviet").innerHTML = htmls.join('');
    },

    list: function(){
        this.app();
    }
}

App.list();