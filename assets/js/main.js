const svg = document.querySelector("svg");
const text = document.querySelector("text");
const mask = document.getElementById("m");

svg.onmouseenter = () => (text.style.opacity = "1");
svg.onmouseleave = () => (text.style.opacity = "0");
svg.onmousemove = (e) => {
    const r = svg.getBoundingClientRect();
    mask.setAttribute("cx", ((e.clientX - r.left) / r.width) * 100 + "%");
    mask.setAttribute("cy", ((e.clientY - r.top) / r.height) * 100 + "%");
};
