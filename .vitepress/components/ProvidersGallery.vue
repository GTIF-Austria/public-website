<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { withBase } from "vitepress";

const cacheBuster = `?t=${new Date().getTime()}`;

const providers = ref([]);
const indicators = ref([]);
const narratives = ref([]);
const loading = ref(true);
const error = ref(null);
const activeProvider = ref(null);

const getIndicatorsForProvider = (providerKey) =>
  indicators.value.filter((i) => i.providers?.includes(providerKey));

const getNarrativesForProvider = (providerKey) =>
  narratives.value.filter((n) => n.provider?.includes(providerKey));

const getFilename = (file) => {
  if (!file) return "";
  const parts = file.split(/\/|\\/);
  return parts[parts.length - 1].replace(".md", "");
};

onMounted(async () => {
  try {
    loading.value = true;
    const [providersRes, indicatorsRes, narrativesRes] = await Promise.all([
      fetch(withBase(`/providers.json${cacheBuster}`)),
      fetch(
        `https://gtif-austria.github.io/public-catalog/GTIF-Austria/catalog.json${cacheBuster}`,
      ),
      fetch(
        `https://gtif-austria.github.io/public-narratives/narratives.json${cacheBuster}`,
      ),
    ]);

    const providersJson = await providersRes.json();
    const indicatorsJson = await indicatorsRes.json();
    indicators.value = (indicatorsJson.links || []).filter(
      (c) => c.rel === "child",
    );
    narratives.value = (await narrativesRes.json()) || [];

    providers.value = Object.entries(providersJson).map(([key, provider]) => ({
      id: key,
      title: key,
      url: provider.Url || "",
      description: provider.Description || "",
      logo: provider.Logo || "",
      norOffering: provider["NoR Offering"] || null,
      indicators: getIndicatorsForProvider(key),
      narratives: getNarrativesForProvider(key),
    }));
  } catch (err) {
    console.error("Failed to load providers:", err);
    error.value =
      "Failed to load provider information. Please check your connection.";
  } finally {
    loading.value = false;
  }

  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
  if (typeof document !== "undefined") {
    document.body.style.overflow = "";
  }
});

const handleKeyDown = (e) => {
  if (e.key === "Escape" && activeProvider.value) {
    closeModal();
  }
};

const openModal = (provider) => {
  activeProvider.value = provider;
  if (typeof document !== "undefined") {
    document.body.style.overflow = "hidden";
  }
};

const closeModal = () => {
  activeProvider.value = null;
  if (typeof document !== "undefined") {
    document.body.style.overflow = "";
  }
};

const onImageError = (e) => {
  e.target.style.display = "none";
  if (e.target.nextElementSibling) {
    e.target.nextElementSibling.style.display = "flex";
  }
};
</script>

<template>
  <div class="pv-page">
    <!-- Header Section -->
    <div class="pv-header">
      <h1 class="pv-title">Providers</h1>
      <p class="pv-subtitle">
        Austrian organizations, research institutes, and companies delivering
        Earth Observation capabilities, datasets, and scientific narratives.
      </p>
    </div>

    <!-- Loading Skeletons -->
    <div v-if="loading" class="pv-cards-grid">
      <div v-for="n in 6" :key="n" class="pv-skeleton-card">
        <div class="pv-skeleton-header">
          <div class="pv-skeleton-logo"></div>
          <div class="pv-skeleton-title"></div>
        </div>
        <div class="pv-skeleton-desc"></div>
        <div class="pv-skeleton-desc short"></div>
        <div class="pv-skeleton-footer"></div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="pv-state-box pv-error-box">
      <p>{{ error }}</p>
    </div>

    <!-- Providers Cards Grid (3 in a row maximum, exact 200px height) -->
    <div v-else class="pv-cards-grid">
      <div
        v-for="provider in providers"
        :key="provider.id"
        class="pv-card"
        tabindex="0"
        role="button"
        :aria-label="`View details for ${provider.id}`"
        @click="openModal(provider)"
        @keydown.enter="openModal(provider)"
        @keydown.space.prevent="openModal(provider)"
      >
        <!-- Card Header: Logo & Name -->
        <div class="pv-card-header">
          <div class="pv-card-logo-box">
            <img
              v-if="provider.logo"
              :src="provider.logo"
              :alt="`${provider.id} logo`"
              class="pv-card-logo-img"
              loading="lazy"
              @error="onImageError"
            />
            <div class="pv-card-logo-fallback" style="display: none">
              {{ provider.id.slice(0, 2).toUpperCase() }}
            </div>
          </div>
          <div class="pv-card-title" :title="provider.id">
            {{ provider.id }}
          </div>
        </div>

        <!-- Card Body: Short 2-Line Truncated Description -->
        <div class="pv-card-description">
          {{ provider.description }}
        </div>

        <!-- Card Footer: Dataset & Narrative Counts (Flat top border, NO border radius) -->
        <div class="pv-card-footer">
          <div class="pv-card-stats">
            <span
              class="pv-pill pv-pill-narrative"
              :class="{ 'pv-pill-zero': !provider.narratives.length }"
              :title="`${provider.narratives.length} Narratives available`"
            >
              <svg
                viewBox="0 0 24 24"
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path
                  d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                ></path>
              </svg>
              <span
                >{{ provider.narratives.length }}
                {{
                  provider.narratives.length === 1 ? "Narrative" : "Narratives"
                }}</span
              >
            </span>

            <span
              class="pv-pill pv-pill-dataset"
              :class="{ 'pv-pill-zero': !provider.indicators.length }"
              :title="`${provider.indicators.length} Datasets available`"
            >
              <svg
                viewBox="0 0 24 24"
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              <span
                >{{ provider.indicators.length }}
                {{
                  provider.indicators.length === 1 ? "Dataset" : "Datasets"
                }}</span
              >
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Provider Details Modal Dialog -->
    <Teleport to="body">
      <Transition name="pv-modal-fade">
        <div
          v-if="activeProvider"
          class="pv-modal-backdrop"
          @click.self="closeModal"
        >
          <div
            class="pv-modal-window"
            role="dialog"
            aria-modal="true"
            :aria-labelledby="`modal-title-${activeProvider.id}`"
          >
            <!-- Modal Header: Logo + Vertically Centered Title + Round Close Button -->
            <div class="pv-modal-header">
              <div class="pv-modal-identity">
                <div class="pv-modal-logo-wrapper">
                  <img
                    v-if="activeProvider.logo"
                    :src="activeProvider.logo"
                    :alt="`${activeProvider.id} logo`"
                    class="pv-modal-logo-img"
                    @error="onImageError"
                  />
                  <div class="pv-modal-logo-fallback" style="display: none">
                    {{ activeProvider.id.slice(0, 2).toUpperCase() }}
                  </div>
                </div>

                <div
                  :id="`modal-title-${activeProvider.id}`"
                  class="pv-modal-title"
                >
                  {{ activeProvider.id }}
                </div>
              </div>

              <!-- Round Close Button -->
              <button
                type="button"
                class="pv-modal-close-btn"
                aria-label="Close dialog"
                @click="closeModal"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <!-- Modal Scrollable Content -->
            <div class="pv-modal-body">
              <!-- Top Row: Action Links & Pill Counters -->
              <div class="pv-modal-top-bar">
                <div class="pv-modal-actions-group">
                  <a
                    v-if="activeProvider.url"
                    :href="activeProvider.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="pv-btn-action pv-btn-primary"
                  >
                    <span>Provider Website</span>
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>

                  <a
                    v-if="activeProvider.norOffering"
                    :href="activeProvider.norOffering"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="pv-btn-action pv-btn-secondary"
                  >
                    <span>NoR Offering</span>
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>

                <div class="pv-modal-pills-group">
                  <span
                    class="pv-pill pv-pill-narrative"
                    :class="{
                      'pv-pill-zero': !activeProvider.narratives.length,
                    }"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path
                        d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                      ></path>
                    </svg>
                    <span
                      >{{ activeProvider.narratives.length }}
                      {{
                        activeProvider.narratives.length === 1
                          ? "Narrative"
                          : "Narratives"
                      }}</span
                    >
                  </span>

                  <span
                    class="pv-pill pv-pill-dataset"
                    :class="{
                      'pv-pill-zero': !activeProvider.indicators.length,
                    }"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <line x1="18" y1="20" x2="18" y2="10"></line>
                      <line x1="12" y1="20" x2="12" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>
                    <span
                      >{{ activeProvider.indicators.length }}
                      {{
                        activeProvider.indicators.length === 1
                          ? "Dataset"
                          : "Datasets"
                      }}</span
                    >
                  </span>
                </div>
              </div>

              <!-- Full Description -->
              <div class="pv-modal-section">
                <div class="pv-section-title">About</div>
                <div class="pv-modal-description-text">
                  {{ activeProvider.description }}
                </div>
              </div>

              <!-- Narratives Section -->
              <div
                v-if="activeProvider.narratives.length"
                class="pv-modal-section"
              >
                <div class="pv-section-header-row">
                  <div class="pv-section-title">
                    Narratives
                    <span class="pv-count-pill">{{
                      activeProvider.narratives.length
                    }}</span>
                  </div>
                </div>
                <div class="pv-items-list">
                  <a
                    v-for="narrative in activeProvider.narratives"
                    :key="narrative.file"
                    :href="
                      withBase(`/narratives/${getFilename(narrative.file)}`)
                    "
                    class="pv-item-card"
                    @click="closeModal"
                  >
                    <div class="pv-item-icon pv-item-narrative-icon">
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path
                          d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                        ></path>
                      </svg>
                    </div>
                    <div class="pv-item-content">
                      <div class="pv-item-title">{{ narrative.title }}</div>
                      <div
                        v-if="narrative.subtitle || narrative.domain"
                        class="pv-item-meta"
                      >
                        <span v-if="narrative.domain" class="pv-meta-tag">{{
                          narrative.domain
                        }}</span>
                        <span
                          v-if="narrative.subtitle"
                          class="pv-meta-subtitle"
                          >{{ narrative.subtitle }}</span
                        >
                      </div>
                    </div>
                    <div class="pv-item-arrow">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              <!-- Datasets / Indicators Section -->
              <div
                v-if="activeProvider.indicators.length"
                class="pv-modal-section"
              >
                <div class="pv-section-header-row">
                  <div class="pv-section-title">
                    Datasets & Indicators
                    <span class="pv-count-pill">{{
                      activeProvider.indicators.length
                    }}</span>
                  </div>
                </div>
                <div class="pv-items-list">
                  <a
                    v-for="indicator in activeProvider.indicators"
                    :key="indicator.id"
                    :href="withBase(`/explore/?indicator=${indicator.id}`)"
                    class="pv-item-card"
                    @click="closeModal"
                  >
                    <div class="pv-item-icon pv-item-dataset-icon">
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <line x1="18" y1="20" x2="18" y2="10"></line>
                        <line x1="12" y1="20" x2="12" y2="4"></line>
                        <line x1="6" y1="20" x2="6" y2="14"></line>
                      </svg>
                    </div>
                    <div class="pv-item-content">
                      <div class="pv-item-title">{{ indicator.title }}</div>
                      <div v-if="indicator.themes?.length" class="pv-item-meta">
                        <span
                          v-for="theme in indicator.themes"
                          :key="theme"
                          class="pv-meta-tag pv-meta-dataset-tag"
                        >
                          {{ theme }}
                        </span>
                      </div>
                    </div>
                    <div class="pv-item-arrow">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <!-- Modal Footer -->
            <div class="pv-modal-footer">
              <button
                type="button"
                class="pv-btn-close-modal"
                @click="closeModal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.pv-page {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 64px 0;
  box-sizing: border-box;
}

/* Page Header */
.pv-header {
  margin-bottom: 28px;
}
.pv-title {
  font-size: 2.25rem !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  color: var(--on-surface, #1a1c1e) !important;
  margin: 0 0 8px 0 !important;
  padding: 0 !important;
  border-top: none !important;
}
.pv-subtitle {
  font-size: 1rem !important;
  line-height: 1.5 !important;
  color: var(--on-surface-variant, #5f6368) !important;
  margin: 0 !important;
  padding: 0 !important;
  max-width: 800px;
}

/* Cards Grid: Maximum 3 in a row on desktop, 2 on tablet, 1 on mobile */
.pv-cards-grid {
  display: grid !important;
  grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  gap: 20px !important;
  align-items: stretch !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* Individual Provider Card (Exact 200px Height) */
.pv-card {
  height: 200px !important;
  min-height: 200px !important;
  max-height: 200px !important;
  box-sizing: border-box !important;
  background: var(--surface-container-low, #f8f9fa);
  border: 1px solid var(--outline-variant, #e2e8f0);
  border-radius: 12px !important;
  padding: 14px 16px !important;
  margin: 0 !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  cursor: pointer;
  user-select: none;
  transition:
    transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.pv-card:hover {
  transform: translateY(-3px);
  box-shadow:
    0 10px 25px -5px rgba(0, 65, 112, 0.12),
    0 8px 10px -6px rgba(0, 65, 112, 0.08);
  border-color: var(--primary, #004170);
  background: var(--surface-container-lowest, #ffffff);
}

.pv-card:focus-visible {
  outline: 2px solid var(--primary, #004170);
  outline-offset: 2px;
}

/* Card Header */
.pv-card-header {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  margin: 0 !important;
  padding: 0 !important;
  min-width: 0 !important;
}

.pv-card-logo-box {
  width: 44px !important;
  height: 36px !important;
  min-width: 44px !important;
  flex-shrink: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: #ffffff !important;
  border-radius: 6px !important;
  border: 1px solid var(--outline-variant, #e5e7eb) !important;
  padding: 2px !important;
  box-sizing: border-box !important;
}

.pv-card-logo-img {
  max-width: 100% !important;
  max-height: 100% !important;
  object-fit: contain !important;
}

.pv-card-logo-fallback {
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--primary, #004170);
}

.pv-card-title {
  font-size: 0.95rem !important;
  font-weight: 600 !important;
  line-height: 1.3 !important;
  color: var(--on-surface, #1a1c1e) !important;
  margin: 0 !important;
  padding: 0 !important;
  flex: 1 !important;
  min-width: 0 !important;
  word-break: normal !important;
  overflow-wrap: break-word !important;
  display: -webkit-box !important;
  -webkit-line-clamp: 2 !important;
  -webkit-box-orient: vertical !important;
  overflow: hidden !important;
}

/* Card Body */
.pv-card-description {
  font-size: 0.8125rem !important;
  line-height: 1.45 !important;
  color: var(--on-surface-variant, #5f6368) !important;
  margin: 0 !important;
  padding: 0 !important;
  display: -webkit-box !important;
  -webkit-line-clamp: 4 !important;
  -webkit-box-orient: vertical !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}

/* Card Footer (Flat border-top, strictly NO border radius) */
.pv-card-footer {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 8px !important;
  padding-top: 8px !important;
  border-left: none !important;
  border-right: none !important;
  border-bottom: none !important;
  border-radius: 0 !important;
  margin: 0 !important;
  background: transparent !important;
}

.pv-card-stats {
  display: flex !important;
  align-items: center !important;
  gap: 6px !important;
  flex-wrap: nowrap !important;
  overflow: hidden !important;
}

/* Custom Scoped Stat Pills */
.pv-pill {
  display: inline-flex !important;
  position: static !important;
  align-items: center !important;
  gap: 4px !important;
  padding: 3px 7px !important;
  font-size: 0.6875rem !important;
  font-weight: 600 !important;
  border-radius: 6px !important;
  white-space: nowrap !important;
  letter-spacing: 0.01em !important;
  line-height: 1 !important;
  box-sizing: border-box !important;
}

.pv-pill-narrative {
  background: #e0f2fe !important;
  color: #0369a1 !important;
  border: none !important;
}

.pv-pill-dataset {
  background: #ecfdf5 !important;
  color: #047857 !important;
  border: none !important;
}

.pv-pill-zero {
  background: var(--surface-container, #f1f5f9) !important;
  color: var(--on-surface-variant, #94a3b8) !important;
  border: 1px solid var(--outline-variant, #e2e8f0) !important;
}



.pv-card:hover {
  opacity: 1 !important;
  transform: translateX(3px) !important;
}

/* Skeletons */
.pv-skeleton-card {
  height: 200px;
  border-radius: 12px;
  background: var(--surface-container, #eeedf1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: pvPulse 1.5s infinite ease-in-out;
}
.pv-skeleton-header {
  display: flex;
  gap: 12px;
  align-items: center;
}
.pv-skeleton-logo {
  width: 44px;
  height: 36px;
  border-radius: 6px;
  background: var(--surface-variant, #e0e0e0);
}
.pv-skeleton-title {
  flex: 1;
  height: 16px;
  border-radius: 4px;
  background: var(--surface-variant, #e0e0e0);
}
.pv-skeleton-desc {
  height: 12px;
  border-radius: 4px;
  background: var(--surface-variant, #e0e0e0);
}
.pv-skeleton-desc.short {
  width: 70%;
}
.pv-skeleton-footer {
  height: 20px;
  border-radius: 4px;
  background: var(--surface-variant, #e0e0e0);
}
@keyframes pvPulse {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

/* State Boxes */
.pv-state-box {
  text-align: center;
  padding: 48px 24px;
  background: var(--surface-container-low, #f8f9fa);
  border-radius: 16px;
  border: 1px dashed var(--outline-variant, #cbd5e1);
  margin-top: 16px;
}
.pv-error-box {
  color: var(--error, #ba1a1a);
  border-color: var(--error-container, #ffdad6);
  background: #fef2f2;
}

/* =========================================================
   Modal Popup Styles
   ========================================================= */
.pv-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}

.pv-modal-window {
  background: var(--surface-container-lowest, #ffffff);
  color: var(--on-surface, #1a1c1e);
  width: 100%;
  max-width: 760px;
  max-height: calc(100vh - 40px);
  max-height: calc(100dvh - 40px);
  border-radius: 16px;
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.35),
    0 0 0 1px var(--outline-variant, rgba(0, 0, 0, 0.08));
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  animation: pvModalPopIn 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes pvModalPopIn {
  from {
    opacity: 0;
    transform: scale(0.96) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Modal Header: Logo + Vertically Centered Title + Round Close */
.pv-modal-header {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 16px !important;
  padding: 20px 24px !important;
  border-bottom: 1px solid var(--outline-variant, #e5e7eb) !important;
  background: var(--surface-container-lowest, #ffffff) !important;
  flex-shrink: 0 !important;
}

.pv-modal-identity {
  display: flex !important;
  align-items: center !important;
  gap: 16px !important;
  min-width: 0 !important;
  flex: 1 !important;
}

.pv-modal-logo-wrapper {
  width: 60px !important;
  height: 48px !important;
  min-width: 60px !important;
  min-height: 48px !important;
  flex-shrink: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: #ffffff !important;
  border-radius: 8px !important;
  border: 1px solid var(--outline-variant, #e5e7eb) !important;
  padding: 4px !important;
  box-sizing: border-box !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.pv-modal-logo-img {
  max-width: 100% !important;
  max-height: 100% !important;
  object-fit: contain !important;
}

.pv-modal-logo-fallback {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--primary, #004170);
}

.pv-modal-title {
  font-size: 1.25rem !important;
  font-weight: 700 !important;
  line-height: 1.35 !important;
  color: var(--on-surface, #1a1c1e) !important;
  margin: 0 !important;
  padding: 0 !important;
  word-break: break-word !important;
  flex: 1 !important;
}

/* Modal Close Button (Perfect Circle) */
.pv-modal-close-btn {
  width: 36px !important;
  height: 36px !important;
  min-width: 36px !important;
  max-width: 36px !important;
  min-height: 36px !important;
  max-height: 36px !important;
  padding: 0 !important;
  border-radius: 50% !important;
  aspect-ratio: 1 / 1 !important;
  border: none !important;
  background: var(--surface-container, #f1f5f9) !important;
  color: var(--on-surface-variant, #64748b) !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  flex: 0 0 36px !important;
  margin: 0 !important;
  transition: all 0.2s ease;
  box-sizing: border-box !important;
}

.pv-modal-close-btn:hover {
  background: var(--surface-variant, #e2e8f0) !important;
  color: var(--on-surface, #0f172a) !important;
}

.pv-modal-close-btn svg {
  width: 18px !important;
  height: 18px !important;
  display: block !important;
  margin: auto !important;
}

/* Modal Body */
.pv-modal-body {
  padding: 24px !important;
  overflow-y: auto !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 24px !important;
  -webkit-overflow-scrolling: touch;
}

/* Top Bar in Modal Body: Actions & Pills */
.pv-modal-top-bar {
  display: flex !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 12px !important;
  padding-bottom: 4px !important;
}

.pv-modal-actions-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.pv-modal-pills-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.pv-btn-action {
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  padding: 8px 16px !important;
  border-radius: 8px !important;
  font-size: 0.875rem !important;
  font-weight: 600 !important;
  text-decoration: none !important;
  transition: all 0.2s ease;
}

.pv-btn-primary {
  background: var(--primary, #004170) !important;
  color: var(--on-primary, #ffffff) !important;
}
.pv-btn-primary:hover {
  opacity: 0.92;
  transform: translateY(-1px);
}

.pv-btn-secondary {
  background: var(--surface-container, #f1f5f9) !important;
  color: var(--primary, #004170) !important;
  border: 1px solid var(--outline-variant, #cbd5e1) !important;
}
.pv-btn-secondary:hover {
  background: var(--surface-variant, #e2e8f0) !important;
  transform: translateY(-1px);
}

/* Modal Section */
.pv-modal-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pv-section-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pv-section-title {
  font-size: 1rem !important;
  font-weight: 700 !important;
  color: var(--on-surface, #1a1c1e) !important;
  margin: 0 !important;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.pv-count-pill {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 12px;
  background: var(--surface-container-high, #e2e8f0);
  color: var(--on-surface-variant, #475569);
}

.pv-modal-description-text {
  font-size: 0.9375rem !important;
  line-height: 1.65 !important;
  color: var(--on-surface, #334155) !important;
  margin: 0 !important;
}

/* Items List (Narratives & Datasets) */
.pv-items-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pv-item-card {
  display: flex !important;
  align-items: center !important;
  gap: 14px !important;
  padding: 12px 14px !important;
  background: var(--surface-container-low, #f8fafc) !important;
  border: 1px solid var(--outline-variant, #e2e8f0) !important;
  border-radius: 10px !important;
  text-decoration: none !important;
  color: inherit !important;
  transition: all 0.2s ease;
}

.pv-item-card:hover {
  background: var(--surface-container-lowest, #ffffff) !important;
  border-color: var(--primary, #004170) !important;
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0, 65, 112, 0.08);
}

.pv-item-icon {
  width: 34px;
  height: 34px;
  min-width: 34px;
  flex-shrink: 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pv-item-narrative-icon {
  background: #e0f2fe;
  color: #0284c7;
}

.pv-item-dataset-icon {
  background: #ecfdf5;
  color: #059669;
}

.pv-item-content {
  flex: 1;
  min-width: 0;
}

.pv-item-title {
  font-size: 0.875rem !important;
  font-weight: 600 !important;
  color: var(--on-surface, #0f172a) !important;
  line-height: 1.35 !important;
}

.pv-item-card:hover .pv-item-title {
  color: var(--primary, #004170);
}

.pv-item-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
  flex-wrap: wrap;
}

.pv-meta-tag {
  font-size: 0.6875rem;
  font-weight: 500;
  padding: 1px 6px;
  border-radius: 4px;
  background: #f1f5f9;
  color: #475569;
}

.pv-meta-dataset-tag {
  background: #f0fdf4;
  color: #166534;
}

.pv-meta-subtitle {
  font-size: 0.75rem;
  color: var(--on-surface-variant, #64748b);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.pv-item-arrow {
  color: var(--on-surface-variant, #94a3b8);
  flex-shrink: 0;
  transition:
    transform 0.2s,
    color 0.2s;
}

.pv-item-card:hover .pv-item-arrow {
  color: var(--primary, #004170);
  transform: translateX(2px);
}

/* Modal Footer */
.pv-modal-footer {
  padding: 16px 24px !important;
  background: var(--surface-container-lowest, #ffffff) !important;
  display: flex !important;
  justify-content: flex-end !important;
  flex-shrink: 0 !important;
}

.pv-btn-close-modal {
  padding: 8px 20px !important;
  font-size: 0.875rem !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
  border: 1px solid var(--outline-variant, #cbd5e1) !important;
  background: var(--surface-container, #f1f5f9) !important;
  color: var(--on-surface, #334155) !important;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pv-btn-close-modal:hover {
  background: var(--surface-variant, #e2e8f0) !important;
}

/* Transitions */
.pv-modal-fade-enter-active,
.pv-modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.pv-modal-fade-enter-from,
.pv-modal-fade-leave-to {
  opacity: 0;
}

/* Mobile Responsive */
@media (max-width: 960px) {
  .pv-cards-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 16px !important;
  }
}

@media (max-width: 640px) {
  .pv-title {
    font-size: 1.75rem !important;
  }
  .pv-subtitle {
    font-size: 0.9375rem !important;
  }
  .pv-cards-grid {
    grid-template-columns: 1fr !important;
    gap: 14px !important;
  }
  .pv-card {
    height: 200px !important;
    min-height: 200px !important;
    max-height: 200px !important;
    padding: 14px !important;
  }
  .pv-modal-backdrop {
    padding: 10px;
    align-items: flex-end;
  }
  .pv-modal-window {
    max-height: 90vh;
    max-height: 90dvh;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .pv-modal-header {
    padding: 16px !important;
  }
  .pv-modal-body {
    padding: 16px !important;
    gap: 18px !important;
  }
  .pv-modal-top-bar {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 10px;
  }
  .pv-modal-footer {
    padding: 12px 16px !important;
  }
  .pv-modal-logo-wrapper {
    width: 48px !important;
    height: 40px !important;
    min-width: 48px !important;
    min-height: 40px !important;
  }
  .pv-modal-title {
    font-size: 1.125rem !important;
  }
}
</style>
