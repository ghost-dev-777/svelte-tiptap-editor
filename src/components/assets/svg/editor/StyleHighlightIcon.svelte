<script>
    export let className;
    export let color = "currentColor"; // default color
    export let secondColor = "currentColor";
    export let width = "18px"; // default width
    export let height = "18px"; // default height
</script>

<svg viewBox="0 0 20 20" {width} {height} fill={color} class={className}>
    <path d="M10.798 1.59 3.002 12.875l1.895 1.852 2.521 1.402 6.997-12.194z"></path>
    <path
        d="m2.556 16.727.234-.348c-.297-.151-.462-.293-.498-.426-.036-.137.002-.416.115-.837.094-.25.15-.449.169-.595a4.495 4.495 0 0 0 0-.725c-.209-.621-.303-1.041-.284-1.26.02-.218.178-.506.475-.862l6.77-9.414c.539-.91 1.605-.85 3.199.18 1.594 1.032 2.188 1.928 1.784 2.686l-5.877 10.36c-.158.412-.333.673-.526.782-.193.108-.604.179-1.232.21-.362.131-.608.237-.738.318-.13.081-.305.238-.526.47-.293.265-.504.397-.632.397-.096 0-.27-.075-.524-.226l-.31.41-1.6-1.12zm-.279.415 1.575 1.103-.392.515H1.19l1.087-1.618zm8.1-13.656-4.953 6.9L8.75 12.57l4.247-7.574c.175-.25-.188-.647-1.092-1.192-.903-.546-1.412-.652-1.528-.32zM8.244 18.5 9.59 17h9.406v1.5H8.245z"
        fill={secondColor}>
    </path>
</svg>
