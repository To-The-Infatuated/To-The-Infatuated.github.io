// 动态生成星星和流星雨效果
class MeteorShower {
    constructor() {
        this.starsContainer = null;
        this.heroElement = null;
    }

    init() {
        // 找到 hero 元素
        this.heroElement = document.querySelector('.hero');
        if (!this.heroElement) {
            return;
        }

        // 创建星星容器
        this.starsContainer = document.createElement('div');
        this.starsContainer.className = 'stars';
        this.heroElement.appendChild(this.starsContainer);

        // 生成星星
        this.createStars(200);

        // 生成流星雨
        this.createMeteors(10);
    }

    // 创建星星
    createStars(count) {
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // 随机位置
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            
            // 随机大小
            const size = Math.random() * 2 + 1;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            
            // 随机动画持续时间
            const duration = Math.random() * 3 + 2;
            star.style.setProperty('--duration', duration + 's');
            
            // 随机延迟
            star.style.animationDelay = Math.random() * 5 + 's';
            
            this.starsContainer.appendChild(star);
        }
    }

    // 创建流星雨
    createMeteors(count) {
        for (let i = 0; i < count; i++) {
            this.createMeteor();
        }
    }

    // 创建单个流星
    createMeteor() {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';
        
        // 随机位置（从顶部开始）
        meteor.style.top = Math.random() * 50 + '%';
        meteor.style.left = '-100px';
        
        // 随机长度
        const length = Math.random() * 100 + 50;
        meteor.style.width = length + 'px';
        
        // 随机动画持续时间
        const duration = Math.random() * 3 + 1;
        meteor.style.setProperty('--duration', duration + 's');
        
        // 随机延迟
        const delay = Math.random() * 5;
        meteor.style.animationDelay = delay + 's';
        
        // 动画结束后重新创建
        meteor.addEventListener('animationend', () => {
            meteor.remove();
            // 延迟一段时间后重新创建，形成循环
            setTimeout(() => this.createMeteor(), Math.random() * 3000 + 1000);
        });
        
        this.starsContainer.appendChild(meteor);
    }
}

// 页面加载完成后初始化
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        const meteorShower = new MeteorShower();
        meteorShower.init();
    });
}