<template>
  <div
    class="
      bg-slate-600/50
      absolute
      top-0
      left-0
      z-50
      w-screen
      h-screen
      flex
      justify-center
      items-center
    "
    @click.self="$emit('close')"
  >
    <div class="bg-white text-slate-800 rounded drop-shadow-2xl p-5 w-[550px]">
      <slot />
    </div>
  </div>
</template>
