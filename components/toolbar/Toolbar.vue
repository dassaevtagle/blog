<template>
    <div class="flex justify-between items-center h-12 px-4 shadow-md text-sm">
    <div>
      <Transition name="slide">
        <slot name="left">
          <div key="left">
            <span class="font-bold text-blue-700">Blog</span>
          </div>
        </slot>
      </Transition>
    </div>
    <div>
      <Transition name="slide" mode="out-in">
        <slot name="center">
          <div class="text-red-600">No slot content</div>
        </slot>
      </Transition>
    </div>
    <div>
      <Transition name="slide" mode="out-in">
        <slot name="right">
          <div class="text-red-600">No slot content</div>
        </slot>
      </Transition>
    </div>
    <div>
      <ColorModeButton />
    </div>
  </div>
</template>