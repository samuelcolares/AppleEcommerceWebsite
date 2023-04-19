// Iphone box 3d
const Cuboid = {
    init: function () {
        this.cacheSelectors();
        this.bindEvents();
        this.Events.playPause.bind(this)();
    },

    cacheSelectors: function () {
        this.cube = document.querySelector('.cube')
        this.controls = document.querySelector('.controls')
        this.top_X_control = document.querySelector('.top-x-control')
        this.bottom_X_control = document.querySelector('.bottom-x-control')
        this.left_Y_control = document.querySelector('.left-y-control')
        this.right_Y_control = document.querySelector('.right-y-control')
        this.top_Z_control = document.querySelector('.top-z-control')
        this.bottom_Z_control = document.querySelector('.bottom-z-control')
        this.reset = document.querySelector('.reset')
    },

    variables: {
        x: 0,
        y: 20,
        z: 0,
        flagCube: true,
        intervalCube: undefined,
    },

    bindEvents: function () {
        this.top_X_control.addEventListener('click', () => {
            this.cube.style.transform = `rotateX(${this.variables.x += 20}deg) rotateY(${this.variables.y}deg) rotateZ(${this.variables.z}deg)`
        })

        this.bottom_X_control.addEventListener('click', () => {
            this.cube.style.transform = `rotateX(${this.variables.x -= 20}deg) rotateY(${this.variables.y}deg) rotateZ(${this.variables.z}deg)`
        })

        this.right_Y_control.addEventListener('click', () => {
            this.cube.style.transform = `rotateX(${this.variables.x}deg) rotateY(${this.variables.y += 20}deg) rotateZ(${this.variables.z}deg)`
        })

        this.left_Y_control.addEventListener('click', () => {
            this.cube.style.transform = `rotateX(${this.variables.x}deg) rotateY(${this.variables.y -= 20}deg) rotateZ(${this.variables.z}deg)`
        })

        this.top_Z_control.addEventListener('click', () => {
            this.cube.style.transform = `rotateX(${this.variables.x}deg) rotateY(${this.variables.y}deg) rotateZ(${this.variables.z += 20}deg)`
        })

        this.bottom_Z_control.addEventListener('click', () => {
            this.cube.style.transform = `rotateX(${this.variables.x}deg) rotateY(${this.variables.y}deg) rotateZ(${this.variables.z -= 20}deg)`
        })

        this.reset.addEventListener('click', () => {
            this.cube.style.transform = `rotateX(${this.variables.x = 0}deg) rotateY(${this.variables.y = 0}deg) rotateZ(${this.variables.z = 0}deg)`
        })

        this.controls.addEventListener('mouseenter', () => {
            this.variables.flagCube = false
            this.Events.playPause.bind(this)()
        })

        this.controls.addEventListener('mouseout', () => {
            this.variables.flagCube = true
            clearInterval(this.variables.intervalCube)
            this.Events.playPause.bind(this)()
        })
    },

    Events: {
        playPause: function () {
            if (this.variables.flagCube === true) {
                this.variables.intervalCube = setInterval(() => {
                    this.cube.style.transform = `rotateX(${this.variables.x}deg) rotateY(${this.variables.y++}deg) rotateZ(${this.variables.z}deg)`
                }, 100)
            } else {
                clearInterval(this.variables.intervalCube)
            }
        }
    }
}
Cuboid.init()
// End Iphone box 3d


// Slideshow
const Slideshow = {
    init: function () {
        this.slideshowDivs();
        this.cacheSelectors();
        setInterval(this.changeBackground.bind(this), 10000)
    },

    slideshowDivs: function () {
        for (i = 1; i <= 5; i++) {
            const slide = document.createElement('div')
            slide.classList.add(`slide`)
            slide.style.background = `url(img/slideshow/section-1-bg-${i}.jpg)`
            i === 1 && slide.classList.add(`change`)
            document.querySelector('.slideshow').appendChild(slide)
        }
    },

    cacheSelectors: function () {
        this.slides = document.querySelectorAll(`.slide`)
    },

    count: 0,

    changeBackground: function () {
        this.slides.forEach((slide, idx) => {
            if (idx === this.count) {
                slide.classList.add('change')
            } else {
                slide.classList.remove('change')
            }
        })
        this.count++
        if (this.count > this.slides.length - 1) {
            this.count = 0
        }
    }
}
Slideshow.init()
// End of slideshow


// Macbook Effect
const Macbook = {
    init: function () {
        this.cacheSelectors();
        this.bindEvents();

    },

    cacheSelectors: function () {
        this.section3Content = document.querySelector('.section-3-content')
    },

    bindEvents: function () {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset + window.innerHeight >= this.section3Content.offsetTop + this.section3Content.offsetHeight / 2) {
                this.section3Content.classList.add('change')
            }
        })
    }
}
Macbook.init()
// End of Macbook Effect


// Apple Watch
const appleWatch = {
    init: function () {
        this.cacheSelectors();
        this.bindEvents();

    },

    cacheSelectors: function () {
        this.watchBands = document.querySelector('.watch-bands')
        this.watchCases = document.querySelector('.watch-cases')

        this.watchTopControl = document.querySelector('.watch-top-control')
        this.watchRightControl = document.querySelector('.watch-right-control')
        this.watchBottomControl = document.querySelector('.watch-bottom-control')
        this.watchLeftControl = document.querySelector('.watch-left-control')
    },

    variables: {
        axisY: 0,
        axisX: 0,
    },

    bindEvents: function () {
        this.watchTopControl.addEventListener('click', () => {
            this.variables.axisY -= 70
            if (this.variables.axisY > -350) {
                this.watchCases.style.marginTop = `${this.variables.axisY}rem`
            } else {
                this.variables.axisY = 280
                this.watchCases.style.marginTop = `${this.variables.axisY}rem`
            }
        })

        this.watchBottomControl.addEventListener('click', () => {
            this.variables.axisY += 70
            if (this.variables.axisY < 350) {
                this.watchCases.style.marginTop = `${this.variables.axisY}rem`
            } else {
                this.variables.axisY = -280
                this.watchCases.style.marginTop = `${this.variables.axisY}rem`
            }
        })

        this.watchRightControl.addEventListener('click', () => {
            this.axisX -= 70
            if (this.axisX > -350) {
                this.watchBands.style.marginLeft = `${this.axisX}rem`
            } else {
                this.axisX = 280
                this.watchBands.style.marginLeft = `${this.axisX}rem`
            }
        })

        this.watchLeftControl.addEventListener('click', () => {
            this.axisX += 70
            if (this.axisX < 350) {
                this.watchBands.style.marginLeft = `${this.axisX}rem`
            } else {
                this.axisX = -280
                this.watchBands.style.marginLeft = `${this.axisX}rem`
            }
        })
    },

}
appleWatch.init()
// End of Apple Watch


// Smooth Scroll to Section
const Scroll = {
    init: function () {
        this.cacheSelectors();
        this.bindEvents();

    },

    cacheSelectors: function () {
        this.homeBtn = document.querySelectorAll('.home-btn')
        this.iphone14Btn = document.querySelectorAll('.iphone14-btn')
        this.macbookAirBtn = document.querySelectorAll('.macbookAir-btn')
        this.aWatchBtn = document.querySelectorAll('.aWatch-btn')
        this.airpodProBtn = document.querySelectorAll('.airpodPro-btn')
        this.sections = document.querySelectorAll('section')
    },

    bindEvents: function () {
        this.homeBtn.forEach(button => {
            button.addEventListener('click', () => {
                const here = this.sections[0].offsetTop
                this.Events.scrollSection(here)
            })
        })
        this.iphone14Btn.forEach(button => {
            button.addEventListener('click', () => {
                const here = this.sections[1].offsetTop
                this.Events.scrollSection(here)
            })
        })
        this.macbookAirBtn.forEach(button => {
            button.addEventListener('click', () => {
                const here = this.sections[2].offsetTop
                this.Events.scrollSection(here)
            })
        })
        this.aWatchBtn.forEach(button => {
            button.addEventListener('click', () => {
                const here = this.sections[3].offsetTop + this.sections[3].offsetHeight * 0.14
                this.Events.scrollSection(here)
            })
        })
        this.airpodProBtn.forEach(button => {
            button.addEventListener('click', () => {
                const here = this.sections[4].offsetTop
                this.Events.scrollSection(here)
            })
        })
    },

    Events: {
        scrollSection: function (here) {
            window.scrollTo({
                top: here,
                behavior: 'smooth',
            })
        }
    },
}
Scroll.init()
// End of Smooth Scroll to Section

