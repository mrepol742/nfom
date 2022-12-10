let no = document.querySelector(".no");
        let yes = document.querySelector(".yes");
        let wrapper = document.querySelector(".wrapper");
        no.addEventListener("click", () => {
            no.textContent = "Yes 😍"
            conffetti();
        });
        yes.addEventListener("click", () => {
            setTimeout(() => {
                conffetti();
            }, 300);
        });

        let off = (e) => {
            const vw = Math.max(
                document.documentElement.clientWidth || 0,
                window.innerWidth || 0
            );
            const vh = Math.max(
                document.documentElement.clientHeight || 0,
                window.innerHeight || 0
            );
            let y = (Math.random() * 5 + 5) * e.offsetY - vh * 0.5 - 10;
            let x = (Math.random() * 5 + 5) * e.offsetX - vw * 0.5 - 10;
            return {
                x,
                y,
            };
        };

        // window.addEventListener("mousemove",moveCursor)

        no.addEventListener("mousedown", (e) => {
            let {x, y} = off(e);
            // if(e.target.classList.contains("yes")) return
            no.style.transform = `translate(${x}px,${y}px)`;
        });

        const moveCursor = (e) => {
            const mouseY = ((e.clientY * 10) / wrapper.offsetHeigh) * 0.5;
            const mouseX = (e.clientX * 10) / wrapper.offsetWidth;
            no.style.transform = `translate(${mouseX}px, ${mouseY}px, 0)`;
        };

        const conffetti = () => {
            var end = Date.now() + 5 * 1000;
            // go Buckeyes!
            var colors = ["#000", "#ff0000", "#f3f3f3"];
            (function frame() {
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: {
                        x: 0,
                    },
                    colors: colors,
                });
                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: {
                        x: 1,
                    },
                    colors: colors,
                });
                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            })();
        };