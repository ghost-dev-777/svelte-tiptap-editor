<script>
    export let className;
    export let color = "currentColor"; // default color
    export let width = "18px"; // default width
    export let height = "18px"; // default height
</script>

<svg viewBox="0 0 16 16" {width} {height} fill={color} class={className}>
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 4C2 3.58579 2.33579 3.25 2.75 3.25H13.25C13.6642 3.25 14 3.58579 14 4C14 4.41421 13.6642 4.75 13.25 4.75H2.75C2.33579 4.75 2 4.41421 2 4Z">
    </path>
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.75 8C3.75 7.58579 4.08579 7.25 4.5 7.25H11.5C11.9142 7.25 12.25 7.58579 12.25 8C12.25 8.41421 11.9142 8.75 11.5 8.75H4.5C4.08579 8.75 3.75 8.41421 3.75 8Z">
    </path>
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.5 12C5.5 11.5858 5.83579 11.25 6.25 11.25H9.75C10.1642 11.25 10.5 11.5858 10.5 12C10.5 12.4142 10.1642 12.75 9.75 12.75H6.25C5.83579 12.75 5.5 12.4142 5.5 12Z">
    </path>
</svg>
