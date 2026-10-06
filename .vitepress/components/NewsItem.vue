<script setup>
defineProps({
  href: { type: String, required: true },
  target: { type: String, default: "_self" },
});
</script>

<template>
  <div class="news-item">
    <div class="news-item-icon">
      <slot name="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 3v11" />
          <path d="m18 8-6 6-6-6" />
          <path d="M5 19h14" />
        </svg>
      </slot>
    </div>
    <div class="news-item-content">
      <div class="title">
        <a :href="href" :target="target">
          <slot name="title"></slot>
        </a>
      </div>
      <div class="details">
        <slot name="details"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.news-item {
  display: flex;
  align-items: center;
  padding: 24px;
  border-radius: 16px;
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid var(--vp-c-brand-2);
  background: linear-gradient(145deg, var(--vp-c-bg-soft), var(--vp-c-bg));
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.news-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
.news-item-icon {
  margin-right: 24px;
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}
.news-item-icon svg {
  width: 32px;
  height: 32px;
}
.news-item-content .title {
  font-size: 18px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}
.news-item-content .title a {
  text-decoration: none;
  color: var(--vp-c-brand-1);
}
.news-item-content .details {
  padding-top: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>
