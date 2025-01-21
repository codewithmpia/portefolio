<script setup>
    const props = defineProps({
        url: String,
        text: String
    })
</script>

<template>
    <a :href="props.url" class="w-44 flex items-center justify-between bg-cyan-600 text-white font-medium py-2 px-3 rounded shadow-sm cursor-pointer hover:filter hover:brightness-110">
        <span>{{ props.text }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8L22 12L18 16"/>
            <path d="M2 12H22"/>
        </svg>
    </a>
</template>