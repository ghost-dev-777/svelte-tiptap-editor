<script>
    export let className;
    export let color = "currentColor"; // default color
    export let secondColor = "currentColor";
    export let width = "18px"; // default width
    export let height = "18px"; // default height
</script>

<svg viewBox="0 0 20 20" {width} {height} fill={color} class={className}>
    <!-- The "A" -->
    <path d="M12.4 10.3 10 4.5l-2.4 5.8h4.8zm.5 1.2H7.1L5.7 15H4.2l5-12h1.6l5 12h-1.5L13 11.5" fill={secondColor}></path>
    <!-- The underline -->
    <path d="M17 18H4a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"></path>
</svg>
